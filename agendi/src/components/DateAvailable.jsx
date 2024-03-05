import styled from "styled-components";

const Title = styled.h1`
  font-size: 22px;
  text-align: center;
  color: #8d8d8d;
  margin: 0 0 20px 0;
`;

const Schedules = styled.div`   
  width: 450px;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  padding: 20px;
`;

const DateGrid = styled.div`
    display: grid;
    grid-template-columns: 100px 100px 100px;
    justify-content: center;
    gap: 10px;
`;

const Date = styled.div`
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

function DateAvailable() {
  return (
    <Schedules>
        <Title>Selecione um horário</Title>
        <DateGrid>
            <Date>
                <span>03:00</span>
            </Date>
            <Date className="date2">
                <span>17:40</span>
            </Date>
            <Date className="date3">
                <span>15:00</span>
            </Date>
            <Date className="date4">
                <span>13:00</span>
            </Date>
            <Date className="date3">
                <span>15:00</span>
            </Date>
            <Date className="date4">
                <span>13:00</span>
            </Date>
        </DateGrid>
    </Schedules>
  );
}

export default DateAvailable;