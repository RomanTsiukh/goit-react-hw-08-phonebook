import styled from 'styled-components';

export const ButtonStyled = styled.button`
  width: 70px;
  cursor: pointer;
  border-radius: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[1]}px;
  box-shadow: -1px 1px 4px 0px rgba(140, 20, 170, 1);
  transition: background-color 250ms cubic-bezier(0.2, 0, 0, 0.7),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.hoverBgColor};
    color: ${p => p.theme.colors.thirdTextColor};
    transform: scale(1.1);
  }
`;
