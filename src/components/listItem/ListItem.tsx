import { ItemData } from "@/types/general";
import Item from "../item";
import PDFViewer from "../pdfViewer";

const ListItem = ({ todoList }: { todoList: ItemData[] }) => {
  {
    console.log(todoList);
  }
  return (
    <>
      <ul>
        {todoList.map((i) => (
          <Item item={i} key={i.id} />
        ))}
      </ul>
    </>
  );
};
export default ListItem;
