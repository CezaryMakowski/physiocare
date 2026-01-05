"use client";

import { usePathname } from "@/i18n/routing";
import { LinkProps } from "@/i18n/routing";
import { Link } from "@/i18n/routing";
import { ComponentPropsWithoutRef } from "react";

interface ActiveLinkProps extends LinkProps {
  children: React.ReactNode;
  activeClassName: string;
}

export default function ActiveLink({
  children,
  href,
  activeClassName,
  ...props
}: ActiveLinkProps & ComponentPropsWithoutRef<"a">) {
  const currentRoute = usePathname();
  const isActive = currentRoute === href;

  return (
    <Link
      href={href}
      className={isActive ? activeClassName : undefined}
      {...props}
    >
      {children}
    </Link>
  );
}
