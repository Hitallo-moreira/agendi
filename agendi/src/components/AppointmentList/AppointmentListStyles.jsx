import styled from "styled-components";

export const AppointmentsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;

    @media only screen and (max-width: 640px) {
        display: grid;
        grid-template-columns: 50% 50%;
    }
`;