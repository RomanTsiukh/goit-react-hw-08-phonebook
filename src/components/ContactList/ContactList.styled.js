import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};
`;

export const EmptyList = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.accent};
  text-align: center;
`;

export const List = styled.ul`
  margin-top: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[0]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const ListItem = styled.li`
  display: flex;
  font-size: ${p => p.theme.space[4]}px;
  justify-content: space-between;
`;
