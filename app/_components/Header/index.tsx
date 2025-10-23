import styles from "./index.module.css";
export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>ガイカレ祭スタンプラリー</h1>
        </header>
    );
}