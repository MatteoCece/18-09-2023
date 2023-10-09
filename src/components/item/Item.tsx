import { ItemData } from "@/types/general";
import styles from "./index.module.scss";
import { useState } from "react";
import Image from "next/image";
import { HTTP_DELETE } from "@/pages/utils/fn";
const Item = ({ item }: { item: ItemData }) => {
  const [completed, setCompleted] = useState(item.checked);
  const handleChange = () => {
    setCompleted(!completed);
  };
  const listClasses = [styles.Item, completed ? styles.green : styles.red];

  const onHandleClick = async () => {
    HTTP_DELETE("/api/deleteElement", item.id);
  };
  return (
    <>
      <li className={[...listClasses].join(" ")}>
        <input type="checkbox" checked={completed} onChange={handleChange} />
        <span>{item.content}</span>

        <div className={styles.DeleteImg}>
          <Image
            src="/cestino.jpg"
            width="20"
            height="20"
            alt="delete element"
            onClick={onHandleClick}
          />
        </div>
      </li>
    </>
  );
};
export default Item;
