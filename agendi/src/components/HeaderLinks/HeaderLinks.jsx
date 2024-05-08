import { StyledLink, LinkOption } from "./HeaderLinksStyles";

function HeaderLink({url, children}) {
    return (
        <StyledLink to={url}>
            <LinkOption>{children}</LinkOption>
        </StyledLink>
    )
}

export default HeaderLink;