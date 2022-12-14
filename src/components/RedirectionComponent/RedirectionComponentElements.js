import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const RedirectContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #010101;
`;
export const RedirectWrapper = styled.div`
  display: flex;
  color: #01bf71;
  font-size: 1.5rem;
  :hover {
    color: #fff;
  }
`;
export const RedirectLine = styled.p`
  color: #fff;
  font-weight: bold;
`;
export const RedirectLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  color: #01bf71;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  padding-right: 5px;
  :hover {
    color: #fff;
  }
`;
