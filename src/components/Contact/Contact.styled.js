import styled from 'styled-components';

export const Text = styled.p`
  display: flex;
  align-items: flex-start;
  gap: 5px;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[2]}px 0;
`;

export const ButtonDelet = styled.button`
  display: flex;
  margin-left: auto;
  width: 120px;
  justify-content: center;
  cursor: pointer;
  border-radius: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[1]}px;
  box-shadow: -1px 1px 4px 0px rgba(140, 14, 170, 1);
  transition: background-color 250ms cubic-bezier(0.2, 0, 0, 0.7),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: ${p => p.theme.colors.hoverBgColor};
    color: ${p => p.theme.colors.thirdTextColor};
    transform: scale(1.1);
  }
`;
