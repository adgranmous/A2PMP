import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #101522;
  left: 0;
  bottom: 0;
  right: 0;
  height: 60px;
  padding: 0;
  margin: 0;
  position: initial;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export const FooterWrap = styled.div`
  padding: 9px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterLinksWrapper = styled.div``;

export const FooterLinkItems = styled.div`
  color: #fff;
  border-left: solid 1px;
  border-right: solid 1px;

  @media screen and (max-width: 768px) {
    margin: 0;
    padding: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    border: none;
  }
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0px 10px;
  font-size: 12px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }

  @media screen and (max-width: 768px) {
    padding-top: 10px;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  font-size: x-small;
`;

export const DevBy = styled.div`
  display: flex;
  justify-content: flex-end;
  color: #3a4656;
  padding: 0 30px;

  @media screen and (max-width: 768px) {
    padding-bottom: 2px;
  }
`;
export const DevP = styled.p`
  padding-right: 6px;
  font-weight: bold;
  font-size: 12px;
`;
export const DevLogo = styled.a`
  font-size: 12px;
  transform: rotate(-0.15turn);

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #01bf71;
    transform: scale(1.15);
  }
`;
