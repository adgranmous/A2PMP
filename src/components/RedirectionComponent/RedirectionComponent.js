import React from "react";
import {
  RedirectContainer,
  RedirectWrapper,
  RedirectLine,
  RedirectLink,
} from "./RedirectionComponentElements";
import { FaArrowRight } from "react-icons/fa";

const RedirectionComponent = () => {
  return (
    <>
      <RedirectContainer>
        <RedirectWrapper>
          <RedirectLine></RedirectLine>
          <RedirectLink to="/">Retourner à la page d'acceuil</RedirectLink>
          <FaArrowRight />
        </RedirectWrapper>
      </RedirectContainer>
    </>
  );
};

export default RedirectionComponent;
