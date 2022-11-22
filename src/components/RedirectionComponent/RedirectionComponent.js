import React from "react";
import {
  RedirectContainer,
  RedirectWrapper,
  RedirectLine,
  RedirectLink,
} from "./RedirectionComponentElements";

const RedirectionComponent = () => {
  return (
    <>
      <RedirectContainer>
        <RedirectWrapper>
          <RedirectLine></RedirectLine>
          <RedirectLink to="/">Retourner à la page d'acceuil</RedirectLink>
        </RedirectWrapper>
      </RedirectContainer>
    </>
  );
};

export default RedirectionComponent;
