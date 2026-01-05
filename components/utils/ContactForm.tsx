"use client";

import styles from "@/style/utils/ContactForm.module.css";
import ButtonStyle from "./ButtonStyle";
import { useTranslations } from "next-intl";
import { sendData, TsendData } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function ContactForm() {
  const t = useTranslations("home.contact");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
    setValue,
  } = useForm<TsendData>({ resolver: zodResolver(sendData) });
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      const updatedFiles = [...selectedFiles, ...fileArray];
      setSelectedFiles(updatedFiles);
      setValue("attachments", updatedFiles, { shouldValidate: true });
    }
    e.target.value = "";
  };

  const removeFile = (index: number) => {
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(updatedFiles);
    setValue(
      "attachments",
      updatedFiles.length > 0 ? updatedFiles : undefined,
      { shouldValidate: true }
    );
  };

  async function onSubmit(data: TsendData) {
    try {
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("name", data.name);
      formData.append("message", data.message);
      if (data.attachments && data.attachments.length > 0) {
        data.attachments.forEach((file) => {
          formData.append("files", file);
        });
      }

      const res = await fetch(`/api/send`, {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        setError("message", { message: "formErrors.general" });
        throw new Error(res.statusText);
      } else {
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 2000);
        // reset();
        // setSelectedFiles([]);
      }
    } catch (err) {
      console.error(err);
      setError("message", { message: "formErrors.general" });
    }
  }

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.fieldsWrapper}>
          <div>
            <div className={styles.fieldWrapper}>
              <input
                {...register("name")}
                type="text"
                placeholder={t("nameLabel")}
              />
            </div>
            {errors.name && errors.name?.message && (
              <p className={styles.error}>{t(errors.name.message)}</p>
            )}
          </div>
          <div>
            <div className={styles.fieldWrapper}>
              <input
                {...register("email")}
                type="email"
                placeholder={t("emailLabel")}
              />
            </div>
            {errors.email && errors.email?.message && (
              <p className={styles.error}>{t(errors.email.message)}</p>
            )}
          </div>
        </div>
        <div className={styles.textArea}>
          <textarea {...register("message")} placeholder={t("messageLabel")} />
        </div>
        {errors.message && errors.message?.message && (
          <p className={styles.error}>{t(errors.message.message)}</p>
        )}
        <div className={styles.fileInputWrapper}>
          <label htmlFor="file-input" className={styles.fileInputLabel}>
            {t("attachmentLabel")}
          </label>
          <input
            id="file-input"
            onChange={handleFileChange}
            type="file"
            accept=".pdf, .jpg, .jpeg, .png"
            multiple
            className={styles.fileInput}
          />
          {selectedFiles.length > 0 && (
            <div className={styles.fileList}>
              {selectedFiles.map((file, index) => (
                <div key={index} className={styles.fileItem}>
                  <span className={styles.fileName}>{file.name}</span>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className={styles.removeButton}
                    aria-label="Usuń plik"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        {errors.attachments && errors.attachments?.message && (
          <p className={styles.error}>{t(errors.attachments.message)}</p>
        )}
        <div className={styles.buttonsWrapper}>
          <ButtonStyle
            disabled={isSubmitting}
            text={t("submitButton")}
            type="submit"
          />
        </div>
      </form>
      <div
        className={`${styles.success} ${
          isSuccess ? styles.visible : undefined
        }`}
      >
        {t("success")}
      </div>
    </div>
  );
}
