import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.bar}>
      <span className={styles.logo} tabIndex={0} aria-hidden="true" />
      <span className={styles.title}>SyncUp</span>
      <span className={styles.spacer} />
    </header>
  );
}
