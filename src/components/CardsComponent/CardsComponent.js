import React from "react";
import Icon1 from "../../images/LDJ/LDJ10.jpg";
import Icon2 from "../../images/Cress/cress2.JPG";
import Icon3 from "../../images/Bar/bar5.JPG";
import {
  ChantiersContainer,
  ChantiersH1,
  ChantiersH2,
  ChantiersWrapper,
  ChantiersCard,
  ChantiersIcon,
  ChantiersP,
} from "./CardsComponentElements";

const Chantiers = () => {
  return (
    <ChantiersContainer id="chantiers/#LDJ">
      <ChantiersH1>Nos Chantiers effectués</ChantiersH1>
      <ChantiersWrapper>
        <ChantiersCard to="/chantiers/#cress">
          <ChantiersIcon alt="ldjIcon" src={Icon1} loading="lazy" />
          <ChantiersH2>le lavoir "de Jacques"</ChantiersH2>
          <ChantiersP>lieu-dit Valade</ChantiersP>
        </ChantiersCard>

        <ChantiersCard to="/chantiers/#bar">
          <ChantiersIcon alt="cressIcon" src={Icon2} loading="lazy" />
          <ChantiersH2>La créssonnière</ChantiersH2>
          <ChantiersP>de Lataste</ChantiersP>
        </ChantiersCard>

        <ChantiersCard to="/chantiers">
          <ChantiersIcon alt="barIcon" src={Icon3} loading="lazy" />
          <ChantiersH2>Réouverture du bar</ChantiersH2>
          <ChantiersP>le bourg</ChantiersP>
        </ChantiersCard>
      </ChantiersWrapper>
    </ChantiersContainer>
  );
};

export default Chantiers;
