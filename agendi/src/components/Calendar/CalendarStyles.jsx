import styled from "styled-components";

export const CalendarWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  @media only screen and (max-width: 480px) {
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  color: #05B387;

  @media only screen and (max-width: 480px) {
    font-size: 24px;
    margin: 0 2rem 1rem 2rem; 
  }
`;

export const DateWrapper = styled.div`
  display: flex;
  gap: 20px;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;