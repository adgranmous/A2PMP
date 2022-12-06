import React, { useState } from "react";
import InfoSection from "../InfoSection/InfoSection";
import { chantierObjEglise } from "../InfoSection/Data";
import {
  GalleryContainer,
  GalleryLDJ,
  LDJimg,
  Panorama,
  PanoramaImg,
  CloseIcon,
  LdjH1,
} from "./GalleryElements";
import {
  ArticleWrapper,
  ArticleContainer,
  ArticleTexte,
  ArticleImgWrapper,
  ArticleImg,
} from "../Articles/ArticlesElements";
import { data, data2, data3, data4 } from "./DataPhoto";

const Gallery = () => {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <Panorama className={model ? "model open" : "model"}>
        <PanoramaImg alt="panorama" src={tempImgSrc} />
        <CloseIcon onClick={() => setModel(false)} />
      </Panorama>
      <LdjH1 id="LDJ">Le lavoir de Jacques</LdjH1>
      <GalleryContainer>
        {data.map((item, index) => {
          return (
            <GalleryLDJ key={index} onClick={() => getImg(item.imgSrc)}>
              <LDJimg src={item.imgSrc} />
            </GalleryLDJ>
          );
        })}
      </GalleryContainer>
      <LdjH1 id="cress">La créssonière</LdjH1>
      <GalleryContainer>
        {data2.map((item, index) => {
          return (
            <GalleryLDJ key={index} onClick={() => getImg(item.imgSrc)}>
              <LDJimg src={item.imgSrc} />
            </GalleryLDJ>
          );
        })}
      </GalleryContainer>
      <LdjH1 id="bar">Le bar</LdjH1>
      <GalleryContainer>
        {data3.map((item, index) => {
          return (
            <GalleryLDJ key={index} onClick={() => getImg(item.imgSrc)}>
              <LDJimg src={item.imgSrc} />
            </GalleryLDJ>
          );
        })}
      </GalleryContainer>
      <LdjH1 id="couturat">Couturat</LdjH1>
      <GalleryContainer>
        {data4.map((item, index) => {
          return (
            <GalleryLDJ key={index} onClick={() => getImg(item.imgSrc)}>
              <LDJimg src={item.imgSrc} />
            </GalleryLDJ>
          );
        })}
      </GalleryContainer>
      <InfoSection {...chantierObjEglise} />

      <ArticleWrapper>
        <ArticleContainer>
          <ArticleTexte>
            Suite à l'annexion de la partie basse de Pian par Saint Macaire en
            1861, la municipalité a décidé par la délibération du 31 Janvier
            1897 de détruire l'église située au centre du cimetière mais de
            conserver la chapelle sud.
            <ArticleImgWrapper>
              <ArticleImg src={require("../../images/Eglise/eglise1.jpg")} />
            </ArticleImgWrapper>
            Une nouvelle église (l'actuelle) fut construite en 1901 sur un
            terrain situé au lieu-dit Les Merles dans le nouveau bourg "du
            haut".
            <ArticleImgWrapper>
              <ArticleImg src={require("../../images/Eglise/eglise2.jpg")} />
            </ArticleImgWrapper>
            Ayant appris par un féru d'histoire locale et d'architecture que
            l'ancien autel du bas, des statues ainsi qu'un vieux tableau
            présents dans l'ancienne église avaient été transférés dans la
            nouvelle, nous nous sommes rendus sur place et avons vu dans la
            partie droite de la nef un grand tableau ainsi que dans le transept
            de droite un autel en bois doré surmonté de statues elles aussi en
            bois doré.
            <br /> Le temps et les insectes xylophages ayant fait leur ouvrage,
            de nombreuses parties de ce mobilier sont détériorées.
            <br />
            <br />
            Souhaitant sauvegarder ces témoignages du passé, en accord avec la
            municipalité, nous avons pris contact avec Monsieur Philippe Maffre
            conservateur des Antiquités et Objets d’Art au Ministère de la
            Culture.
            <br />
            <br /> Lors de sa première visite, il nous a confirmé que nous
            possédions deux "trésors" anciens à savoir : - un autel et son
            tabernacle à ailes ornés de dorures datant du 17éme siècle ainsi que
            des statues qui pourraient provenir d’un ancien retable du 18éme
            siècle;
            <ArticleImgWrapper>
              <ArticleImg src={require("../../images/Eglise/eglise3.JPG")} />
              <ArticleImg src={require("../../images/Eglise/eglise5.JPG")} />
            </ArticleImgWrapper>
            <ArticleImgWrapper>
              <ArticleImg src={require("../../images/Eglise/eglise6.JPG")} />
              <ArticleImg src={require("../../images/Eglise/eglise7.JPG")} />
              <ArticleImg src={require("../../images/Eglise/eglise8.JPG")} />
            </ArticleImgWrapper>
            un grand tableau représentant l’Annonciation signé de François
            Mazoyer et daté de 1665.
            <ArticleImgWrapper>
              <ArticleImg src={require("../../images/Eglise/eglise9.JPG")} />
            </ArticleImgWrapper>
            Lors de sa seconde visite accompagné d'un photographe agréé par la
            DRAC, les objets ont été mesurés, photographiés et leurs
            caractéristiques et leur état ont été répertoriés.
            <br />
            <br />
            Chacune de ces visites s'est faite en présence de membres de l'A2PMP
            et de M. Billion représentant la municipalité.
            <br />
            Après enquête, nous avons découvert que l'autel et les statues
            avaient déjà été inscrites au patrimoine des monuments historiques
            avec une erreur de localisation (église Saint Seurin du Pian Médoc).
            <br />
            <br />
            L’A2PMP et la municipalité ont entamé une procédure auprès de la
            DRAC en vue de l'inscription du tableau et de son cadre sur la liste
            supplémentaire des objets protégés au titre des monuments
            historiques afin de pouvoir par la suite bénéficier d’aides pour
            pouvoir le sauvegarder de manière pérenne.
            <br />
            <br />
            Sur les conseils de Mrs Maffre et Billa (membre de l'A2PMP) nous
            avons contacté une entreprise Bazadaise spécialisée dans la
            préservation et la restauration de mobilier ancien qui, après
            évaluation des dégâts doit transmettre à la commune un devis pour
            l'autel et les statues.
            <br />
            <br />
            Par ailleurs, nous avons retrouvé dans les archives communales une
            délibération en date du 13 Août 1843 relative notamment à des
            travaux de restauration des dorures de l’autel attestant que déjà à
            l’époque la nécessité de la préservation de ces œuvres était prise
            en compte par la municipalité.
            <br />
            <br />
            L'association, en tant qu'intermédiaire entre la municipalité, la
            DRAC et les différents intervenants a demandé à avoir au sein des
            élus un référent communal pour le patrimoine historique municipal et
            a entamé des recherches sur la possibilité pour la commune d'obtenir
            des aides et subventions.
            <br />
            Nous avons aussi envisagé l'organisation de manifestations pour
            récolter des fonds pour aider la municipalité dans le financement
            des travaux de préservation et si possible de restauration de ce
            patrimoine Pianais.
          </ArticleTexte>
        </ArticleContainer>
      </ArticleWrapper>
    </>
  );
};

export default Gallery;
