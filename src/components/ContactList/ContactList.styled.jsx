import styled from '@emotion/styled';

export const ContactBox = styled.ul`
  width: 330px;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const DeleteBtn = styled.button`
  margin-left: auto;
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

export const ContactNameTel = styled.span`
  font-size: 16px;
  font-weight: 500;
`;
