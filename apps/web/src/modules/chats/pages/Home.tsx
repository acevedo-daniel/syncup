import { useMemo, useState } from "react";
import styles from "./Home.module.css";
import ItemCard from "../components/ItemCard";
import ItemDetail from "../components/ItemDetail";
import { mockItems, type Item } from "../index";

export default function Home() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const items: Item[] = mockItems;

  const selected = useMemo(
    () => items.find((it) => it.id === selectedId) ?? null,
    [items, selectedId]
  );

  if (selected) {
    return <ItemDetail item={selected} onBack={() => setSelectedId(null)} />;
  }

  return (
    <section className={styles.list}>
      {items.map((it) => (
        <ItemCard key={it.id} item={it} onSelect={setSelectedId} />
      ))}
    </section>
  );
}
