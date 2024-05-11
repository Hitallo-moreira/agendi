import { Card, IconDiv, DateText, HourText, CancelButton } from './ScheduleCardStyles';
import clock from '../../assets/clock.svg';

function ScheduleCard({ selectedDateTime, selectedTime }) {
  return (
    <Card>
      <IconDiv>
        <img src={clock} alt="Relógio" />
      </IconDiv>
      <DateText>{selectedDateTime}</DateText>
      <HourText>{selectedTime}</HourText>
      <div className="cancel">
        <CancelButton>Cancelar</CancelButton>
      </div>
    </Card>
  );
}

export default ScheduleCard;
