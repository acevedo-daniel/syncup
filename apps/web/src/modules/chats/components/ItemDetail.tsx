import Card from "../../../shared/components/Card";
import styles from "./ItemDetail.module.css";
import type { Item } from "../types";

type Props = { item: Item; onBack: () => void };

export default function ItemDetail({ item, onBack }: Props) {
  return (
    <Card>
      <div className={styles.wrap}>
        <button className={styles.back} onClick={onBack} aria-label="Volver">
          ← Volver
        </button>
        <div className={styles.head}>
          {item.image ? (
            <img src={item.image} alt="" className={styles.avatar} />
          ) : (
            <div className={styles.avatar} aria-hidden="true" />
          )}
          <div>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.desc}>{item.description}</p>
          </div>
        </div>
        <p className={styles.desc}>Este es un detalle de ejemplo.</p>
      </div>
    </Card>
  );
}
