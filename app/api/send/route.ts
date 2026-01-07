import { sendData } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_SECRET);

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const rawData = {
    email: formData.get("email"),
    name: formData.get("name"),
    message: formData.get("message"),
    attachments: formData.getAll("files"),
  };
  const rawFiles = rawData.attachments as File[];
  const validFiles = rawFiles.filter((f) => f instanceof File && f.size > 0);
  const dataToValidate = {
    ...rawData,
    attachments: validFiles,
  };

  const result = sendData.safeParse(dataToValidate);

  if (!result.success) {
    return NextResponse.json({ error: result.error }, { status: 403 });
  }

  const { email, message, name, attachments } = result.data;

  const files = await Promise.all(
    (attachments || []).map(async (file) => {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      return {
        filename: file.name,
        content: buffer,
      };
    })
  );
  try {
    const { data, error } = await resend.emails.send({
      from: `${name} <kontakt@physiocare.com.pl>`,
      to: ["chmura.fizjoterapia@gmail.com"],
      replyTo: email,
      subject: `masz nową wiadomość od ${name}`,
      text: message,
      attachments: files,
    });

    if (error) {
      return NextResponse.json(
        { error },
        { status: 500, statusText: error.message }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
