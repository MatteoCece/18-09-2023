import { supabase } from "@/pages/utils/supabase";
import styles from "./index.module.scss";
import { useState } from "react";
const AddItem = () => {
  const onHandleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    await supabase
      .from("todo-list")
      .insert([{ content: inputValue, checked: false }])
      .select();
  };
  const [inputValue, setInputValue] = useState("");
  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <form className={styles.AddItem} onSubmit={onHandleSubmit}>
        <input type="text" value={inputValue} onChange={onHandleChange} />
        <input type="submit" value="Add" />
      </form>
    </>
  );
};

export default AddItem;
