import styled from "styled-components";

export const ArticleContainer = styled.div`
  /* background-color: #000; */
`;
export const ArticleTexte = styled.p`
  color: #000;
  padding: 50px 150px 20px;
  text-align: justify;
  line-height: 1.3em;
  @media screen and (max-width: 768px) {
    padding: 30px 30px;
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
