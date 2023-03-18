import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack5";
import { Button } from "../../components/ButtonElements";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewer = ({ file }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    if (numPages) {
      setPageNumber(1);
    }
  }, [numPages]);

  return (
    <>
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <p>
          Page {pageNumber} / {numPages}
        </p>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Button
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber(pageNumber - 1)}
          >
            Page precedente
          </Button>
          <Button
            disabled={pageNumber >= numPages}
            onClick={() => setPageNumber(pageNumber + 1)}
          >
            Page suivante
          </Button>
        </div>
      </div>
    </>
  );
};

export default PdfViewer;
