import styled from "styled-components";

export const ArticleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ArticleContainer = styled.div`
  max-width: 1100px;
`;
export const ArticleTexte = styled.p`
  color: #000;
  padding: 50px 150px 20px;
  text-align: justify;
  line-height: 1.3em;
  @media screen and (max-width: 768px) {
    padding: 30px 18px;
  }
`;
export const ArticleImg = styled.img`
  width: 30vw;
  padding: 5px 5px 100px;
`;

export const ArticleImgWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
