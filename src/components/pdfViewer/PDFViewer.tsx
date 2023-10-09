import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import styles from "./index.module.scss";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  // Gestisci il cambio di pagina
  function handlePageChange(newPageNumber: number) {
    setPageNumber(newPageNumber);
  }

  // Funzione per gestire il caricamento del PDF
  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className={styles.PdfViewer}>
      <Document
        file="file.pdf" // Sostituisci con l'URL effettivo del tuo catalogo PDF
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page width={100} height={150} pageNumber={pageNumber} />
      </Document>

      <p>
        Pagina {pageNumber} di {numPages}
      </p>
      <button
        disabled={pageNumber <= 1}
        onClick={() => handlePageChange(pageNumber - 1)}
      >
        Pagina precedente
      </button>
      <button
        disabled={pageNumber >= (numPages || 1)}
        onClick={() => handlePageChange(pageNumber + 1)}
      >
        Pagina successiva
      </button>
    </div>
  );
};

export default PDFViewer;
