import styled from "styled-components";

export const AppointmentsWrapper = styled.div`
    display: grid;
    justify-content: center;
`;

export const AppointmentsGrid = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    
    @media only screen and (min-width: 640px) and (max-width: 1024px) {
        grid-template-columns: 50% 50%;
        margin: 0 4rem;
        gap: 20px;
    }

    @media only screen and (max-width: 640px) {
        grid-template-columns: 100%;
        justify-content: center;
    }
`;