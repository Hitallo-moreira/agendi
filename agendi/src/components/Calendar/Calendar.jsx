import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import { CalendarWrapper, Title, DateWrapper } from "./CalendarStyles";
import data from "../../db/date.json";
import DateAvailable from '../DateAvailable/DateAvailable';
import { useDateTimeContext } from '../../context/DateTimeContext';

function Calendar() {
  const minDate = dayjs('2024-03-04');
  const maxDate = dayjs('2024-03-29');
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);
  const { setSelectedDateTime } = useDateTimeContext();

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedDateTime(date);

    const formattedDate = date.format('YYYY-MM-DD');

    if (data[formattedDate]) {
      setAvailableTimes(data[formattedDate]);
    } else {
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
