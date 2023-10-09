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
      <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catalogo PDF</title>
    <!-- Includi il CSS di PDF.js -->
    <link rel="stylesheet" type="text/css" href="https://mozilla.github.io/pdf.js/web/viewer.css">
</head>
<body>
    <!-- Div in cui verrà incorporato il lettore PDF -->
    <div id="pdfViewer"></div>

    <script src="https://mozilla.github.io/pdf.js/build/pdf.js"></script>
    <script>
        // URL del tuo catalogo PDF
        var pdfUrl = 'URL_DEL_TUO_PDF.pdf';

        // Ottieni il riferimento al div in cui verrà incorporato il lettore PDF
        var pdfViewer = document.getElementById('pdfViewer');

        // Crea una funzione per caricare e visualizzare il PDF
        function loadPDF(url) {
            // Inizializza PDF.js
            pdfjsLib.getDocument(url).promise.then(function (pdf) {
                // Imposta il numero di pagine del PDF
                var numPages = pdf.numPages;

                // Crea il lettore PDF
                var pdfViewer = document.createElement('div');
                pdfViewer.className = 'pdfViewer';
                document.body.appendChild(pdfViewer);

                // Cicla attraverso le pagine del PDF e le visualizza
                for (var pageNumber = 1; pageNumber <= numPages; pageNumber++) {
                    pdf.getPage(pageNumber).then(function (page) {
                        var canvas = document.createElement('canvas');
                        pdfViewer.appendChild(canvas);

                        // Imposta le dimensioni del canvas
                        var viewport = page.getViewport({ scale: 1.0 });
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;

                        // Disegna la pagina sul canvas
                        page.render({ canvasContext: canvas.getContext('2d'), viewport: viewport });
                    });
                }
            });
        }

        // Chiama la funzione per caricare il PDF
        loadPDF(pdfUrl);
    </script>
</body>
    </>
  );
}
