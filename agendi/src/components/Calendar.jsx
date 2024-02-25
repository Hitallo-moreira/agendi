import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';

function Calendar() {
  const minDate = dayjs('2024-01-01');
  const maxDate = dayjs('2024-12-31');

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar 
        minDate={minDate}
        maxDate={maxDate}
      />
    </LocalizationProvider>
  );
}

export default Calendar;