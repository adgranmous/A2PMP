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
          <ChantiersIcon src={Icon1} />
          <ChantiersH2>le lavoir "de Jacques"</ChantiersH2>
          <ChantiersP>lieu-dit Valade</ChantiersP>
        </ChantiersCard>

        <ChantiersCard to="/chantiers/#bar">
          <ChantiersIcon src={Icon2} />
          <ChantiersH2>La créssonnière</ChantiersH2>
          <ChantiersP>de Lataste</ChantiersP>
        </ChantiersCard>

        <ChantiersCard to="/chantiers">
          <ChantiersIcon src={Icon3} />
          <ChantiersH2>Réouverture du bar</ChantiersH2>
          <ChantiersP>le bourg</ChantiersP>
        </ChantiersCard>
      </ChantiersWrapper>
    </ChantiersContainer>
  );
};

export default Chantiers;
