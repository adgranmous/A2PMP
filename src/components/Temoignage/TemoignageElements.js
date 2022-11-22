import styled from "styled-components";

export const TemoignageContainer = styled.p`
  padding: 40px 150px;
  text-align: justify;
  line-height: 1.3em;
  font-style: italic;

  @media screen and (max-width: 768px) {
    padding: 30px 30px;
  }
`;

export const Signature = styled.p`
  font-size: small;
  display: flex;
  justify-content: end;
  padding: 0 50px 10px;
`;

export const ImgWrapper = styled.div`
  height: 30vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const TemoignageImg = styled.img`
  width: 45%;

  @media screen and (max-width: 768px) {
    width: 250px;
  }
`;
