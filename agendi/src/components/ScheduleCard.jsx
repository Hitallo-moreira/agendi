import React from 'react';
import styled from 'styled-components';
import { useDateTimeContext } from '../context/DateTimeContext';
import clock from '../assets/clock.svg';

const Card = styled.div`
  height: 200px;
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-shadow: 1px 10px 42px -15px rgba(0, 0, 0, 0.26);
  padding: 15px;
`;

const IconDiv = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  border-radius: 20px 20px 0 0;
  margin-bottom: 10px;

  img {
    height: auto;
    width: 37px;
  }
`;

const DateText = styled.div`
  color: #000;
  font-size: 24px;
  font-weight: 600;
`;

const HourText = styled.div`
  color: #000;
  font-size: 28px;
  font-weight: 600;
`;

const CancelButton = styled.button`
  background-color: #e40521;
  color: #fff;
  font-size: 18px;
  border-radius: 10px;
  border: none;
  height: 50px;
  width: 100%;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 1.5rem;

  &:hover {
    background-color: #ff0022;
  }
`;

function ScheduleCard() {
  const { selectedDateTime, selectedTime } = useDateTimeContext();

  return (
    <Card>
      <IconDiv>
        <img src={clock} alt="Relógio" />
      </IconDiv>
      <DateText>{selectedDateTime ? selectedDateTime : 'Data não selecionada'}</DateText>
      <HourText>{selectedTime ? selectedTime : 'Horário não selecionado'}</HourText>
      <div className="cancel">
        <CancelButton>Cancelar</CancelButton>
      </div>
    </Card>
  );
}

export default ScheduleCard;
