import styled from '@emotion/styled';

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const InputName = styled.p`
  margin-bottom: 4px;
`;

export const SubmitBtn = styled.button`
  margin-top: 20px;
  padding: 8px 16px;
  font-size: 14px;
  border-color: transparent;
  outline: none;
  border-radius: 5px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  cursor: pointer;

  &:hover {
    border-color: black;
  }
`;
