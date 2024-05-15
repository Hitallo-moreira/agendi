import styled from "styled-components";

export const FooterElement = styled.footer`
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

    @media only screen and (max-width: 640px) {
        position: relative;
    }
`;
