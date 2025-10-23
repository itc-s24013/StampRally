import styles from "./index.module.css";

interface CardProps {
    id: number;
}

export default function Card({id}: CardProps) {
    return <h1 className={styles.square}>第{id}問</h1>
}