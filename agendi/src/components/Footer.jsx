import styled from "styled-components";

const FooterElement = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    height: 60px;
    width: 100%;
    background-color: #05B387;
    margin-top: 2rem;
    position: fixed;
    bottom: 0;
`;

function Footer() {
    return (
        <FooterElement>
            <p>Coded by Hitallo</p>
        </FooterElement>
    );
}

export default Footer;