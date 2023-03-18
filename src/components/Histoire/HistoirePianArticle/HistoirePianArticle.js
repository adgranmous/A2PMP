import { ArticleTexte } from "../../Articles/ArticlesElements";
import PdfViewer from "../../PdfViewer/PdfViewer";

const HistoirePianArticle = () => {
  return (
    <>
      <ArticleTexte>
        <PdfViewer file="/leNomDePian.pdf" />
      </ArticleTexte>
    </>
  );
};

export default HistoirePianArticle;
