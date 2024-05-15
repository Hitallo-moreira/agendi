import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderInfo = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #05B387;
    color: #fff;
    font-weight: 600;
    height: 80px;
    width: 100%;
    margin-bottom: 2rem;

    @media only screen and (max-width: 480px) {
        display: flex;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
`;

export const Logo = styled.div`
    margin-left: 4rem;
    font-size: 26px;    
    color: #fff;

    @media only screen and (max-width: 480px) {
        margin: 0 0 0 2rem;
    }
`;

export const LinkOption = styled.div`
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: 8px;
`;

export const Image = styled.img`
    display: none;
    height: auto;
    width: 27px;

    @media only screen and (max-width: 480px) {
        display: block;
        width: 30px;
    }
`;

export const ScheduleText = styled.span`
    margin-top: 5px;
    transition: all ease .2s;

    &:hover {
        color: #d9d9d9;
    }

    @media only screen and (max-width: 480px) {
        display: none;
    }
`;