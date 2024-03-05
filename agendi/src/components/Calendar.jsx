import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';

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
      <div className="info">
        <h2>Agende seus compromissos de forma rápida e fácil.</h2>
      </div>
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