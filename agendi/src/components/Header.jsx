import styled from "styled-components";

const HeaderInfo = styled.header`
    display: flex;
    align-items: center;
    background-color: #05B387;
    font-size: 26px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    height: 80px;
    width: 100%;
    position: sticky;
    margin-bottom: 2rem;
`;

const Logo = styled.div`
    margin-left: 40px;
`;


function Header() {
    return (
        <HeaderInfo>
            <Logo>
                AgendI
            </Logo>
        </HeaderInfo>
    );
}

export default Header;