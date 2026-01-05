import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "pl", "de"],
  defaultLocale: "pl",
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

export type LinkProps = React.ComponentProps<typeof Link>;
