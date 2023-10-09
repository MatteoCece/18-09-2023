import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Link from "next/link";
import Card from "@/components/card";
import PdfViewer from "@/components/pdfViewer";
import PDFViewer from "@/components/pdfViewer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h3>Esercitazione react</h3>

        <Card
          cardData={{
            title: "Esercitazione Todo List",
            description: "integrazione di supabase.. bla bla",
            link: "./todo",
            optImage: "https://picsum.photos/200",
          }}
        />
      </main>
    </>
  );
}
