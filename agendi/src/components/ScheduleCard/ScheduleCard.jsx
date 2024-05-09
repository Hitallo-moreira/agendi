import React from 'react';
import { Card, IconDiv, DateText, HourText, CancelButton } from './ScheduleCardStyles';
import { useDateTimeContext } from '../../context/DateTimeContext';
import clock from '../../assets/clock.svg';

function ScheduleCard() {
  const { selectedDateTime, selectedTime } = useDateTimeContext();
  const formattedDateTime = selectedDateTime? selectedDateTime.format('DD-MM-YYYY') : '';

  return (
    <Card>
      <IconDiv>
        <img src={clock} alt="Relógio" />
      </IconDiv>
      <DateText>{formattedDateTime}</DateText>
      <HourText>{selectedTime? selectedTime : 'Horário não selecionado'}</HourText>
      <div className="cancel">
        <CancelButton>Cancelar</CancelButton>
      </div>
    </Card>
  );
}


export default ScheduleCard;
