import clsx from "clsx";
import React from "react";
import styles from "./glass.module.css";

interface GlassProps {
  children: React.ReactNode;
  className?: string;
}

export default function Glass({ children, className }: GlassProps) {
  return <div className={clsx(styles.glass, className)}>{children}</div>;
}
