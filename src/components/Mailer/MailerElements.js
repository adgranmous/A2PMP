import styled from "styled-components";

export const MailerContainer = styled.div``;
export const MailerWrapper = styled.div`
  width: 80%;
  margin: 80px;
  background-color: #fff;
  padding-top: 80px;
`;

export const MailerRow = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Column1 = styled.div`
  width: 100%;
  justify-content: center;
  margin-right: 20px;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const Column2 = styled.div`
  display: flex;
  justify-content: center;
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 65%;
`;

export const MailerH2 = styled.h2`
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
`;

export const MailerForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const MailerInput = styled.input`
  width: 30vw;
  border: 2px solid #fff;
  padding: 10px;
  margin-bottom: 25px;
  border-radius: 10px;

  :focus {
    border: 2px solid #01bf71;
    outline: none;
  }
`;

export const MailerTextArea = styled.textarea`
  width: 100%;
  max-width: 450px;
  resize: none;
  height: 150px;
  border-radius: 10px;
  padding: 10px;
  border: 2px solid #fff;

  :focus {
    border: 2px solid #01bf71;
    outline: none;
  }
`;

export const MailerButton = styled.input`
  width: 120px;
  margin-top: 20px;

  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#01BF71" : "#010606")};
  white-space: nozwrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "15px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
  }
`;
