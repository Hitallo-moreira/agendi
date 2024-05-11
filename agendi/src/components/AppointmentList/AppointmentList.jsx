import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ScheduleCard from '../ScheduleCard/ScheduleCard';

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:3000/schedules');
        const data = response.data;
        console.log("Dados recebidos:", data);
        const appointmentsArray = Object.values(data);
        console.log("Array de agendamentos:", appointmentsArray);
        setAppointments(appointmentsArray);
      } catch (error) {
        console.error('Erro ao buscar agendamentos:', error);
      }
    };
  
    fetchAppointments();
  }, []);
  
  return (
    <div>
      {appointments.map((appointment) => (
        <ScheduleCard
          key={appointment.id}
          selectedDateTime={appointment.selectedDateTime}
          selectedTime={appointment.selectedTime}
        />
      ))}
    </div>
  );
}

export default AppointmentList;
