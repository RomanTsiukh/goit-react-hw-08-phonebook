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
  justify-content: space-between;
  padding: ${p => p.theme.space[2]}px 0;
`;
