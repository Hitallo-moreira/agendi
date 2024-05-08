import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import styled from "styled-components";
import data from "../db/db.json";
import DateAvailable from './DateAvailable';
import { useDateTimeContext } from '../context/DateTimeContext';

const CalendarWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  @media only screen and (max-width: 480px) {
  }
`;

const Title = styled.h1`
  font-size: 28px;
  color: #05B387;

  @media only screen and (max-width: 480px) {
    font-size: 24px;
    margin: 0 2rem 1rem 2rem; 
  }
`;

const DateWrapper = styled.div`
  display: flex;
  gap: 20px;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

function Calendar() {
  const minDate = dayjs('2024-03-04');
  const maxDate = dayjs('2024-03-29');
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);

  const {setSelectedDateTime} = useDateTimeContext();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  
    const formattedDate = date.format('YYYY-MM-DD');

    if (data[formattedDate]) {
      setAvailableTimes(data[formattedDate]);
    } else {
      console.log('Sem horários disponíveis para esta data.');
      setAvailableTimes([]);
    }
  };

  const shouldDisableDate = (date) => {
    return date.day() === 6 || date.day() === 0;
  };

  return (
    <CalendarWrapper>
      <Title>Agende seus compromissos de forma rápida e fácil.</Title>
      <DateWrapper>      
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar 
            minDate={minDate}
            maxDate={maxDate}
            value={selectedDate}
            onChange={handleDateChange}
            shouldDisableDate={shouldDisableDate}
          />
        </LocalizationProvider>
        <DateAvailable availableTimes={availableTimes} selectedDateTime={selectedDate} />
      </DateWrapper>
    </CalendarWrapper>
  );
}

export default Calendar;
