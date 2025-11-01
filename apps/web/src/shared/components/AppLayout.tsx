import { PropsWithChildren } from "react";
import styles from "./AppLayout.module.css";

export default function AppLayout({ children }: PropsWithChildren) {
  return <main className={styles.wrap}>{children}</main>;
}
