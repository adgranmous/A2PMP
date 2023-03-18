import { ArticleTexte } from "../../Articles/ArticlesElements";
import PdfViewer from "../../PdfViewer/PdfViewer";

const HistoireLavoirArticle = () => {
  return (
    <>
      <ArticleTexte>
        <PdfViewer file="/lavoir.pdf" />
      </ArticleTexte>
    </>
  );
};

export default HistoireLavoirArticle;
