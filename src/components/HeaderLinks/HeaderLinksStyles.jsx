import styled from "styled-components";
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    text-decoration: none;
`;

export const LinkOption = styled.div`
    text-decoration: none;
    color: #fff;
    margin-right: 4rem;
    
    @media only screen and (max-width: 480px) {
        margin-right: 2rem;
    }
`;