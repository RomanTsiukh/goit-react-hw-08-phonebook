import styled from "styled-components";

export const MenuBox = styled.div`
    display: flex;
    align-items: center;
    gap: ${p => p.theme.space[4]}px;
`;

export const MenuText = styled.p`
    font-weight: ${p => p.theme.fontWeights.bold};
`;

export const MenuButton = styled.button`
    width: 80px;
    height: 30px;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${p => p.theme.borders.none};
    border-radius: ${p => p.theme.radii.normal};
    font-weight: ${p => p.theme.fontWeights.bold};
    background-color: ${p => p.theme.colors.bgcStat};
    cursor: pointer;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1), 
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover, :focus {
        background-color: ${p => p.theme.colors.accent};
        color: ${p => p.theme.colors.white};
        transform: scale(1.1);
    }
`;