import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import styled from "styled-components";
import data from "../db/db.json";

const Title = styled.h1`
  font-size: 28px;
  color: #05B387;

  @media only screen and (max-width: 480px) {
    font-size: 24px;
    margin: 0 2rem 1rem 2rem;
  }
`;


function Calendar() {
  const minDate = dayjs('2024-03-04');
  const maxDate = dayjs('2024-03-29');

  const isWeekend = (date) => {
    const dayOfWeek = date.day();
    return dayOfWeek === 0 || dayOfWeek === 6;
  }

  const shouldDisableDate = (date) => {
    return isWeekend(date);
  }

  return (
    <div className='calendar-wrapper'>
      <Title>Agende seus compromissos de forma rápida e fácil.</Title>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar 
          minDate={minDate}
          maxDate={maxDate}
          shouldDisableDate={shouldDisableDate}
        />
      </LocalizationProvider>
    </div>
  );
}

export default Calendar;