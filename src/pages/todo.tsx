import ButtonLink from "@/components/buttonLink";
import ListItem from "@/components/listItem";
import styles from "@/styles/Home.module.scss";
import { useEffect, useState } from "react";
import { HTTP_GET } from "./utils/fn";
import { ItemData } from "@/types/general";
import AddItem from "@/components/addItem";

export default function todo() {
  const [todoList, setTodoList] = useState<ItemData[]>([]);
  useEffect(() => {
    HTTP_GET("/api/getList").then(({ list }) => setTodoList(list.data));
  }, []);
  return (
    <>
      <div className={styles.TodoPage}>
        <div className={styles.Head}>
          <span>Todo List</span>
          <ButtonLink iconData={{ _uri: "./", imagePath: "./ico-home.png" }} />
        </div>

        <ListItem todoList={todoList} />
        <AddItem />
      </div>
    </>
  );
}
