import { IconData } from "@/types/general";
import Link from "next/link";
import styles from "./index.module.scss";
const ButtonLink = ({ iconData }: { iconData: IconData }) => {
  return (
    <div className={styles.ButtonLink}>
      <Link href={iconData._uri}>
        <img src={iconData.imagePath} alt="a" />
      </Link>
    </div>
  );
};
export default ButtonLink;
