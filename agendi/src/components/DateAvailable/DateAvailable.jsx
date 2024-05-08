import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import { Title, Schedules, DateGrid, DateItem, ModalTitle, StyledButton } from "./DateAvailableStyles";
import { Link } from 'react-router-dom';
import { useDateTimeContext } from '../../context/DateTimeContext';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function DateAvailable({ availableTimes, selectedDateTime }) {
  const [open, setOpen] = useState(false);
  const { selectedTime, setSelectedTime } = useDateTimeContext();

  const handleClickOpen = (time) => {
    setOpen(true);
    setSelectedTime(time);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Schedules>
        <Title>Selecione um horário</Title>
        <DateGrid>
          {availableTimes.map((time, index) => (
            <DateItem key={index} onClick={() => handleClickOpen(time)}>
              <span>{time}</span>
            </DateItem>
          ))}
        </DateGrid>
      </Schedules>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <ModalTitle>{"Confirmação de agendamento"}</ModalTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {selectedDateTime? `Deseja confirmar seu agendamento no dia ${selectedDateTime.format('DD/MM/YYYY')} | ${selectedTime}?` : 'Deseja confirmar seu agendamento no dia'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <StyledButton onClick={handleClose}>Cancelar</StyledButton>
          <Link to="/agendamentos">
            <StyledButton onClick={handleClose}>Confirmar</StyledButton>
          </Link>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default DateAvailable;
