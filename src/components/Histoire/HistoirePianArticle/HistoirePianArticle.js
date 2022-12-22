import React from "react";
import {
  ArticleContainer,
  ArticleTexte,
  ArticleImg,
  ArticleImgWrapper,
  ArticleWrapper,
} from "../../Articles/ArticlesElements";
import { Signature } from "../../Temoignage/TemoignageElements";

const HistoirePianArticle = () => {
  return (
    <>
      <ArticleWrapper>
        <ArticleContainer>
          <ArticleTexte>
            <h2>Origine du nom de Pian</h2>
            <br />
            <br />
            L’existence de la paroisse de Pian est attestée dès l’année 1165 par
            une lettre que l’abbé De LIGNAN adresse au pape Alexandre III pour
            se plaindre du comportement des moines de Saint-Macaire qui
            persistent dans la contestation de l’autorité de l’abbaye
            Sainte-Croix de Bordeaux dont leur monastère dépend.
            <br />
            <br />
            <ArticleImgWrapper>
              <ArticleImg
                src={require("../../../images/histoire/pian/ApianDeLignan1165.png")}
              />
            </ArticleImgWrapper>
            <small>
              Archives historiques de la Gironde, vol. I, Bordeaux 1859
              (Gallica)
              <br />
              (1) Bertrand DE LINHAN
              <br />
              (2) Apian, aujourd’hui Lepian1, commune du canton de Saint-Macaire
            </small>
            <br />
            <br />
            <br />
            <br />
            Le scribe écrit « Sainte-Marie d’Apian » pour nommer l’église dans
            laquelle les renégats officiaient malgré leur excommunication. Le
            « A » ajouté à Pian, est la formulation pour exprimer le mouvement
            des moines qui se rendaient de Saint-Macaire à Pian (Aupian en
            gascon). S’il avait voulu dire que les protagonistes de son récit
            étaient venus de Pian, sans doute aurait il noté Dupian comme ce fut
            le cas du Pian-Médoc (Daupian<sup>2</sup>).
            <br />
            <br />
            Trois hypothèses différentes expliquent l’origine du nom de Pian :
            <br />
            <br />
            <br />
            <b>1)</b>Celle de Bénédicte Boyrie-Fénié<sup>3</sup> qui soutient
            avec Jacques Boisgontier<sup>4</sup> qu’un certain APPIUS aurait été
            le propriétaire romain d’un domaine (ou villa) auquel il aurait
            donné son nom. Apian serait pour ces auteurs, construit d’APPIUS +
            le suffixe latin <i>« anum »</i> qui veut dire « qui appartient à ».
            Le domaine se serait donc appelé Appius + <i>Anum</i> =
            <i>« Appianum »</i> (« domaine d’Appius »), donnant « Apian » en
            roman. Cette théorie n’est étayée par aucune preuve archéologique
            que messieurs Jean-Marie Billa et Joël Baudet ont vainement cherchée
            dans les années 80-90<sup>5</sup>. Le <i>gentilice</i> APPIUS n’est
            pas non plus commun dans la région<sup>6</sup>. En fait, les
            onomastiques d’aujourd’hui ont la fâcheuse tendance à coller
            systématiquement une étymologie romaine basée sur <i>anum</i> dès
            lors qu’ils trouvent un toponyme se terminant par « an ».
            <br />
            <br />
            <i>
              <small>
                1 Évolution du nom de Pian : Apian (XIIe siècle), À Pian → Pian
                (XIIIe), Le Pian (XVIIIe), Le Pian-sur-Garonne (XXe). Il est
                très probable que le nom d’origine était Pian dont les pianais
                ont conservé oralement l’usage, et non Apian. Le scribe a
                certainement maladroitement transcrit ce qu’on lui dictait ou ce
                qu’il en a compris.
                <br />
                2 Alexandre Nicolaï, Les noms de lieux de la Gironde, éditions
                Féret, Bordeaux 1938.
                <br />
                3 Bénédicte Boyrie-Fénié, Institut occitan – Dictionnaire
                toponymique des communes de la Gironde – Pau, Cairn oct. 2008.
                <br />
                4 Jacques Boisgontier, Mises à jour des manuels d’onomastique.
                In : Nouvelle revue d’onomastique, n°21-22, 1993, p. 194.
                <br />
                5 Étant donné l’étendue des propriétés gallo-romaines, le
                terroir de Pian devait plutôt faire partie du domaine de Ligéna
                (nom antique de Saint-Macaire), qui lui est archéologiquement
                attesté. Les traces des vestiges retrouvés à Pian lors de la
                prospection sus-citée ou à l’occasion de quelques défonçages du
                sol, montrent plutôt des constructions relevant d’une activité
                agricole.
                <br />6 Sur une pierre découverte lors de la mise au jour du
                rempart gallo-romain à Bordeaux entre 1865 et 1871 et datée du
                IIIe siècle, est gravée l’épitaphe de Q. APPIUS LELIANUS. Voici
                ce que Mr Camille Jullian en dit : « Tous les noms sont
                entièrement romains, et particulièrement rares (surtout le
                gentilice Appius) dans la Gaule du Sud-Ouest » ; Appius
                gentilice n’est effectivement bien attesté qu’en Péninsule
                Ibérique et en Belgique (cf. Lörincz et Redö, Onomasticon
                Provinciarum Europae Latinarum, 1994, vol. 1 p. 149).
              </small>
            </i>
            <br />
            <br />
            <br />
            <b>2)</b>Nous trouvons ensuite celle de Joël BAUDET<sup>7</sup> qui,
            par jeu de mots, mettait en lien le nom de Pian avec celui d’une
            maladie de peau exotique ressemblant à la lèpre :
            <br />
            <br />
            <a
              target="_blank"
              href="https://www.lepiansurgaronne.fr/historique-du-pian-sur-garonne/"
              rel="noreferrer"
            >
              lien de l'article
            </a>
            <ArticleImgWrapper>
              <ArticleImg
                src={require("../../../images/histoire/pian/PianHistoireSiteMairie.png")}
              />
            </ArticleImgWrapper>
            Joël Baudet étaye son idée sur le fait qu’une léproserie a
            effectivement existé à Pian, existence établie par le toponyme de la
            Croix-des-gahets située au bas-Pian en haut du chemin de Gabot.
            Gahet et gabot voulaient dire lépreux en gascon<sup>9</sup>. Mais
            cette histoire est un conte à la Perrault ; un récit essentiellement
            destiné à frapper l’imagination sans souci de réalité historique.
            Car la maladie du pian, dont les symptômes et stigmates ressemblent
            en effet à ceux de la lèpre, nous vient d’Amérique du sud que les
            équipages de Christophe COLOMB rapportèrent au retour de leur
            découverte en 1492. Arrivé sous notre latitude, le pian muta en
            syphilis qui, de 1494 jusqu’à la découverte de la pénicilline en
            1928, causa la mort de plusieurs millions d’individus.
            <br />
            <br />
            Il se trouve aussi que le mot pians désignant cette maladie est un
            mot tupi guarani<sup>10</sup> que les indiens galibis d’Amérique
            donnaient eux-mêmes à leur mal endémique<sup>11</sup>.
            <br />
            <br />
            La maladie du pian n’est donc connue sous ce vocable qu’à partir du
            XVIe siècle, soit plus de 300 ans après la lettre de l’abbé de
            LIGNAN rédigée en 1165. Le nom de Pian ne peut par conséquent pas
            avoir de lien avec un mot amérindien totalement inconnu au XIIe
            siècle. Et si publiquement Joël Baudet ne disait pas ouvertement que
            le nom de Pian venait d’une maladie, Serge Bancheraud a franchi le
            pas pour le site www.catholangonpodensac.fr où il y note : « Origine
            du nom de Pian : du gascon pian, maladie de peau proche de la
            lèpre ». Or il n’y a aucun moyen philologique de rattacher au gascon
            le terme pian en association de près ou de loin avec une quelconque
            pathologie<sup>12</sup>, encore moins avec la lèpre<sup>13</sup>. Du
            reste, pour le cas du pian, aucun dictionnaire au monde n’en donne
            d’autre étymologie qu’amérindienne<sup>14</sup>. Bref, le nom de
            Pian n’a rien à voir avec le pian, la syphilis ou la lèpre.
            L’homonymie n’est que fortuite et a seulement été habilement
            exploitée par Joël Baudet<sup>15</sup>.
            <br />
            <br />
            Notons que la présence d’une léproserie près de Saint-Macaire n’a
            rien d’étonnant, puisque presque toutes les villes de quelque
            importance du royaume, s’en étaient doté au XIVe siècle<sup>16</sup>
            . La léproserie aurait été fondée à Pian en 1319<sup>17</sup> et
            démantelée avant 1562<sup>18</sup>.
            <br />
            <br />
            <i>
              <small>
                7 Joël Baudet (°1949 +2016), viticulteur érudit, guide du pays
                de Saint-Macaire, gabeur émérite et conteur facétieux, était,
                avec quelques amis du bas-Pian du même acabit, tout à fait
                conforme à l’esprit local que relevait déjà Virac en son temps :
                « Or, on ne saurait le contester, les habitants du faubourg de
                Haut [nom donné par les macariens à la partie annexée de Pian,
                ndla] furent toujours pourvus d’un certain esprit sarcastique et
                d’un goût très prononcé pour la poésie ; les Girardeau et les
                Boirac nous l’ont surabondamment prouvé. » Cf. D. A. VIRAC,
                Recherches historiques sur la ville de St Macaire, une des
                filleules de Bordeaux ; Féret & fils, Bordeaux 1890, p. 537.
                <br />
                8 Ce résumé est inspiré d’un texte de Joël Baudet daté d’octobre
                2001 que la mairie conserve encadré dans ses archives.
                <br />
                9 « Dans un acte d’Augier Delaur, notaire, daté de 1434, il est
                question de trois pièces de terre situées l’une à la Crotz-Sent
                Johan, l’autre à la Fon-deus-Gaffets et la troisième à Pian. …/…
                La Fon-deus-Gaffets était la Fontaine-de-Gabot (le mot gabot
                étant synonyme de gahet). » Cf. D. A. VIRAC, ibid., p. 480.
                <br />
                10 En tupi guarani le mot « pians » signifierait peau hérissée
                de tumeurs ou éruption boutonneuse.
                <br />
                11 André Thevet, Les Singularitez de la France antarctique :
                Description d’une maladie nommée Pians, Paris 1557, §45, pp.
                188- 191.
                <br />
                12 Aucun dictionnaire gascon ni aucune source occitane ne donne
                le sens de maladie au mot pian ; il n’y a pas moyen non plus
                d’en trouver trace dans les anciennes langues à l’origine du
                gascon. Au mieux, Frédéric Mistral l’évoque en terme de
                cauchemar, sens que l’on retrouve en gaélique irlandais.
                <br />
                13 Dans sa thèse de doctorat : « Lèpre et société en Aquitaine,
                XIIIe-XVIe siècles » – Bordeaux 1983, Françoise Bériac cite la
                Croix-des-Gahets qu’elle situe à Saint-Macaire. Or, cette
                éminente spécialiste, qui a passé plus de 30 ans a étudier son
                sujet et développe très largement les différents termes employés
                pour désigner la lèpre et les lépreux dans le Sud-Ouest de la
                France, jamais n’évoque le terme pian. Lire aussi Françoise
                Bériac, Le vocabulaire de la lèpre dans l'ouest des pays de
                langue d'Oc, in Annales du midi, année 1984, 96-168, pp.
                331-355.
                <br />
                14 Depuis son apparition et jusqu’à aujourd’hui, les origines de
                la syphilis et ses liens de parenté avec le pian d’Amérique a
                agité pléthore d’esprits savants impliqués dans d’innombrables
                controverses, produisant au moins autant d’ouvrages et
                d’articles sur le sujet. Et si le terme pian avait existé en
                association de près ou de loin avec une maladie du même genre
                antérieurement à 149 4, nul doute que quelques uns s’en seraient
                prestement saisis pour argumenter en faveur d’une origine plus
                ancienne du mal. Or ce n’est pas le cas. La question de
                l’étymologie du nom de la maladie du pian a d’ailleurs été
                précisément débattue dans ce cadre à l’académie de médecine par
                les professeurs Roulin et Levacher. Cf. Gazette médicale de
                Paris : journal de médecine et des sciences accessoires, série
                2, n° 07. Paris, 1839. p. 475.
              </small>
            </i>
            <br />
            <br />
            <br />
            <b>3)</b>Enfin la thèse d’Alexandre Nicolaï qui fait dériver le nom
            de Pian du latin Planum : plan, surface plane<sup>19</sup>. C’est à
            l’avis de cet érudit que nous nous rangeons. En effet, en Gironde,
            nous connaissons trois Pian :
            <br />
            <br />
            ⦁ Le Pian-Médoc dont le noyau originel semble être le lieu-dit de
            Camparian, un plateau surplombant le marais médocain sur lequel un
            camp wisigoth aurait été établi.
            <br />
            <br />⦁ Le château du Pian à Bouliac qui tire son nom du ruisseau du
            même nom qui l’arrose, et qui prend sa source sur un petit plateau
            en amont de l’édifice.
            <br />
            <br />⦁ Enfin notre Pian, dont le bourg était situé en bas du coteau
            avant son annexion par Saint-Macaire en 1861. Il suffit de se rendre
            au point de vue au bout du chemin de la Gravette à Pian, qui
            surplombe Saint-Macaire et la vallée, pour constater de visu qu’une
            vaste plaine s’étend en contre-bas. Situation que l’on retrouve dans
            l’appellation plaine des sports. La partie urbaine située entre la
            voie ferrée et la Garonne, allant de la place de la Liberté au bout
            des allées des tilleuls de Saint-Macaire jusqu’au chemin de Gabot
            (partie annexée) et s’étendant jusqu’au lieu-dit de Fonbonnet à la
            limite de Saint-Pierre d’Aurillac, était le chef lieu de la paroisse
            de Pian. Son église initiale, celle dont parle l’abbé de Lignan au
            Pape, se trouvait dans le cimetière où n’en subsiste plus qu’une
            aile servant de chapelle<sup>20</sup>.
            <br />
            <br />
            Ainsi, dans chacun de ces trois cas, on retrouve l’idée d’une
            surface plate qui marque le paysage<sup>21</sup>, et Notre Dame de
            Pian voulait tout simplement dire Notre Dame de la plaine.
            <br />
            <br />
            Après l’annexion du bourg de Pian par Saint-Macaire, il fallut aux
            pianais bâtir un nouveau bourg qu’ils installèrent sur le coteau, en
            haut de l’Ardilla. Ainsi, Pian ne fut plus géographiquement attaché
            à la plaine d’où il tirait son nom, et l’ajout en 1956 de « sur
            Garonne »<sup>22</sup>, évoquant un surplomb de l’un par rapport à
            l’autre, entérina le fait.
            <br />
            <Signature>Stéphane COCQUET/A2PMP, 16 décembre 2022</Signature>
            <br />
            <br />
            <i>
              <small>
                15 En faisant l’amalgame entre pianais et pianiques, Joël Baudet
                puisait dans la même veine que ses carnavals par lesquels il
                taquinait joyeusement la municipalité de Saint-Macaire et a
                vraisemblablement cette fois voulu s’amuser de celle de Pian.
                Mais cette farce a peut-être dépassé ses intentions, dans la
                mesure où la mairie de Pian, la prenant pour argent comptant,
                l’a reprise à son compte et continue, jusqu’à aujourd’hui
                encore, de la diffuser sur son site Internet. Voir Joël Baudet,
                Les jugements de Monsieur Carnaval sur le site de Francis
                LACROIX http://www.invideoveritas.com.
                <br />
                16 Françoise Bériac, Des lépreux aux cagots : Recherches sur les
                sociétés marginales en Aquitaine médiévale ; Fédération
                Historique du Sud-Ouest, Bordeaux 1990.
                <br />
                17 Sylvie Sireix, Zone de Protection du Patrimoine
                Architectural, Urbain et Paysager (ZPPAUP) de Saint-Macaire -
                Rapport de présentation ; Bordeaux, janvier 2008, p. 11.
                <br />
                18 Désiré Virac, Dégâts commis par les protestants en 1562 dans
                l’église de Saint-Sauveur de St-Macaire et dans quelques autres
                établissements de cette ville et de ses environs, Bordeaux 1867,
                p. 19. Dans le détail du saccage de la paroisse de Pian, la
                léproserie y brille par son absence, preuve indirecte qu’elle
                n’existe plus au moment de ces évènements.
                <br />
                19 Alexandre Nicolaï, ibid. Voir aussi : Jean-Marie Cassagne et
                Mariola Korsak, Origine des noms de villes et villages en
                Gironde, Éditions Bordessoules, 2001.
                <br />
                20 L’ancienne église a été détruite en 1897, d’une part pour
                cause de vétusté, et d’autre part pour transporter le lieu du
                culte dans le nouveau bourg sis aux Merles après l’annexion de
                1861. La vente des pierres servit au financement de la nouvelle
                église édifiée en 1901. Cf. Décision du conseil municipal du 31
                janvier 1897, Archives Municipales de Pian.
                <br />
                21 De même, les toponymes commençant par pian sont très nombreux
                en Italie et indiquent toujours un terrain morphologiquement
                plat.
                <br />
                22 Jusque là l’administration faisait souvent la confusion entre
                Le Pian dans le Médoc et Le Pian près de Saint-Macaire. Ainsi
                l’autel classé de l’église Notre-Dame de Pian fut attribué par
                la D.R.A.C. à l’église Saint-Serin du Pian-Médoc. De même, aux
                Archives Départementales de la Gironde, les recensements de
                population et les matrices cadastrales des deux Pian sont
                mélangés. C’est pour tenter de mettre un terme à ces problèmes
                que l’administration modifia leurs noms. Nos prochains articles
                seront consacrés au vignoble et à l’annexion de Pian par
                Saint-Macaire.
              </small>
            </i>
            <br />
            <br />
            <br />
            Nos prochains articles seront consacrés au vignoble et à l’annexion
            de Pian par Saint-Macaire.
            <br />
            <br />
          </ArticleTexte>
        </ArticleContainer>
      </ArticleWrapper>
    </>
  );
};

export default HistoirePianArticle;
