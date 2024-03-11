import { Link } from 'react-router-dom';
import styled from "styled-components";

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const LinkOption = styled.div`
    text-decoration: none;
    color: #fff;
    margin-right: 4rem;
    
    @media only screen and (max-width: 480px) {
        margin-right: 2rem;
    }
`;

function HeaderLink({url, children}) {
    return (
        <StyledLink to={url}>
            <LinkOption>{children}</LinkOption>
        </StyledLink>
    )
}

export default HeaderLink;