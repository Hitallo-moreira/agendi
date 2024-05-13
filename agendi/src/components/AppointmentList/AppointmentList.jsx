import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ScheduleCard from '../ScheduleCard/ScheduleCard';
import { AppointmentsWrapper, AppointmentsGrid } from "./AppointmentListStyles";

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:3000/schedules');
        const data = response.data;
        const appointmentsArray = Object.values(data);
        setAppointments(appointmentsArray);
      } catch (error) {
        alert('Erro ao buscar agendamentos:');
      }
    };
  
    fetchAppointments();
  }, []);
  
  return (
    <AppointmentsWrapper>
      <AppointmentsGrid>
          {appointments.map((appointment, index) => (
            <ScheduleCard
              key={index}
              id={appointment.id}
              selectedDateTime={appointment.selectedDateTime}
              selectedTime={appointment.selectedTime}
            />
          ))}
      </AppointmentsGrid>
    </AppointmentsWrapper>
  );
}

export default AppointmentList;
