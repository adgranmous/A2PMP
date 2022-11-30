import styled from "styled-components";

export const TemoignageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const TemoignageContainer = styled.div`
  max-width: 1100px;
`;

export const TemoignageText = styled.p`
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
  width: 40%;
  height: 100%;

  @media screen and (max-width: 768px) {
    width: 250px;
  }
`;

export const ImgLegende = styled.p`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  font-style: italic;
`;
