import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const AuthNavigation = styled.div`
    display: flex;
    gap: ${p => p.theme.space[4]}px;
`;

export const Link = styled(NavLink)`
    padding-top: ${p => p.theme.space[4]}px;
    padding-bottom: ${p => p.theme.space[4]}px;
    text-decoration: none;
    font-weight: ${p => p.theme.fontWeights.bold};
    color: ${p => p.theme.colors.black};
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1), 
        color 250ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover:not(.active),
    :focus-visible:not(.active) {
        color: ${p => p.theme.colors.accent};
        opacity: 0.7;
    }
    &.active {
        color: ${p => p.theme.colors.accent};
        transform: scale(1.1);
    }
`;