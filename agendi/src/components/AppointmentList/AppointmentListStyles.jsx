import styled from "styled-components";

export const AppointmentsWrapper = styled.div`
    display: grid;
    /* grid-template-columns: 20% 20% 20% 20%; */
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    @media only screen and (min-width: 640px) and (max-width: 768px) {
        
    }

    @media only screen and (max-width: 640px) {
        
    }
`;

export const AppointmentsGrid = styled.div`
    display: grid;
    grid-template-columns: 20% 20% 20% 20%;
    align-items: center;
    justify-content: center;

    @media only screen and (min-width: 640px) and (max-width: 768px) {
        grid-template-columns: 20% 20% 20%;
    }

    @media only screen and (max-width: 640px) {
        grid-template-columns: 50% 50%;
        gap: 20px;
    }
`;