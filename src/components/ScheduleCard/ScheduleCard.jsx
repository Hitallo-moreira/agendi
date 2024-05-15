import { Card, IconDiv, DateText, HourText, CancelButton } from './ScheduleCardStyles';
import clock from '../../assets/clock.svg';
import axios from 'axios';

function ScheduleCard({ id, selectedDateTime, selectedTime }) {
  const handleCancelAppointment = async () => {
    try {
      await axios.delete(`https://agendi.vercel.app/db.json/${id}`);
      window.location.reload();
    } catch (error) {
      console.error('Erro ao cancelar o agendamento:', error);
    }
  };


  return (
    <Card>
      <IconDiv>
        <img src={clock} alt="Relógio" />
      </IconDiv>
      <DateText>{selectedDateTime}</DateText>
      <HourText>{selectedTime}</HourText>
      <div className="cancel">
        <CancelButton onClick={handleCancelAppointment}>Cancelar</CancelButton>
      </div>
    </Card>
  );
}

export default ScheduleCard;
