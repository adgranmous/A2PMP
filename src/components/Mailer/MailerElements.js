import styled from "styled-components";

export const MailerContainer = styled.div`
  min-height: calc(100vh - 60px);
`;
export const MailerWrapper = styled.div`
  background-color: #fff;
  padding: 150px 100px;
  display: flex;
  justify-content: center;
`;

export const MailerRow = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  max-width: 1100px;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Column1 = styled.div`
  justify-content: center;
  padding-right: 20px;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const Column2 = styled.div`
  display: flex;
  justify-content: center;
  max-width: 500px;
`;

export const Img = styled.img`
  min-width: 300px;
  max-width: 50vw;
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
