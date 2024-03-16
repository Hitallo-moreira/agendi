import styled from "styled-components";

const Title = styled.h1`
  font-size: 22px;
  text-align: center;
  color: #8d8d8d;
  margin: 0 0 20px 0;
`;

const Schedules = styled.div`   
  width: 17%;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  padding: 25px;
`;

const DateGrid = styled.div`
    display: grid;
    grid-template-columns: 100px 100px 100px;
    justify-content: center;
    gap: 10px;
`;

const DateItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 27px;
    border: 1px solid #05B387;
    border-radius: 8px;
    padding: 5px;
    cursor: pointer;
    background-color: #D7FEF4;
    color: #05B387;
    font-weight: 600;
    transition: ease-in .2s;

    &:hover {
        background: #05B387;
        color: #fff;
    }
`;

function DateAvailable({ availableTimes }) {
  return (
    <Schedules>
        <Title>Selecione um horário</Title>
        <DateGrid>
            {availableTimes.map((time, index) => (
              <DateItem key={index}>
                <span>{time}</span>
              </DateItem>
            ))}
        </DateGrid>
    </Schedules>
  );
}

export default DateAvailable;
