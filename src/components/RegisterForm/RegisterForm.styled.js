import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FormLink = styled(Link)`
    font-family: 'Arial';
    text-decoration: none;
    color: ${p => p.theme.colors.blue};
    transition: ${p => p.theme.transition.color};

    :hover,
    focus {
    color: ${p => p.theme.colors.accent};
    }
`;