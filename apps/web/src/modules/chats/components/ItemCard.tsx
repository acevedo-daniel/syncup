import Card from "../../../shared/components/Card";
import styles from "./ItemCard.module.css";
import type { Item } from "../types";

type Props = { item: Item; onSelect?: (id: string) => void };

export default function ItemCard({ item, onSelect }: Props) {
  return (
    <Card>
      <button
        onClick={() => onSelect?.(item.id)}
        className={`${styles.row}`}
        style={{ all: "unset", cursor: onSelect ? "pointer" : "default" }}
        aria-label={`Abrir ${item.title}`}
      >
        {item.image ? (
          <img src={item.image} alt="" className={styles.avatar} />
        ) : (
          <div className={styles.avatar} aria-hidden="true" />
        )}
        <div>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.desc}>{item.description}</p>
        </div>
      </button>
    </Card>
  );
}
