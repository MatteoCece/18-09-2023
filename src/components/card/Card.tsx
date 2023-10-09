import { CardData } from "@/types/general";
import styles from "./index.module.scss";
import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Image from "next/image";
import PDFViewer from "../pdfViewer";
const Card = ({ cardData }: { cardData: CardData }) => {
  /* const navigate = useNavigate();
  const onHandleClick: any = () => {
    goto("todo");
  };*/
  return (
    <div className={styles.Card}>
      {cardData.optImage ? (
        <Image
          src={cardData.optImage}
          width="200"
          height="200"
          alt={cardData.title}
        />
      ) : (
        <></>
      )}
      <div className={styles.texts}>
        <a href="./todo">
          <h4>{cardData.title}</h4>
        </a>
        <p>{cardData.description}</p>
      </div>
    </div>
  );
};

export default Card;
