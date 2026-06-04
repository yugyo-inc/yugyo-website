import { ReactNode } from "react";

export function Section({
  children,
  className = "",
  as: Tag = "section",
}: {
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
}) {
  return <Tag className={`py-12 md:py-24 ${className}`}>{children}</Tag>;
}
