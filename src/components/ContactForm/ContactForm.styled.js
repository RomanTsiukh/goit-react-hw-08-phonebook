import styled from 'styled-components';

export const Error = styled.div`
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.accent};
`;

export const ButtonAddContact = styled.button`
  display: flex;
  margin-left: auto;
  width: 100px;
  justify-content: center;
  cursor: pointer;
  margin-top: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[1]}px;
  box-shadow: -1px 1px 4px 0px rgba(140, 14, 170, 1);
  transition: background-color 250ms cubic-bezier(0.2, 0, 0, 0.7),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: ${p => p.theme.colors.hoverBgColor};
    transform: scale(1.1);
  }
`;
