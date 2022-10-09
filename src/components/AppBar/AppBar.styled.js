import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: ${p => p.theme.space[6]}px;
    padding-left: ${p => p.theme.space[6]}px;
    background-color: ${p => p.theme.colors.bgcolor};
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.4);
`;