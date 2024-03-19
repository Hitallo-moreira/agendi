import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import styled from "styled-components";

const Title = styled.h1`
  font-size: 22px;
  text-align: center;
  color: #8d8d8d;
  margin: 0 0 20px 0;
`;

const Schedules = styled.div`   
  height: 200px;
  width: 50%;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  padding: 25px;
  margin-top: 16px;

  @media only screen and (max-width: 480px) {
    height: auto;
    width: 80%;
    margin-top: 0;
  }
`;

const DateGrid = styled.div`
    display: grid;
    grid-template-columns: 100px 100px 100px;
    justify-content: center;
    gap: 10px;
`;

const DateItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 27px;
    border: 1px solid #05B387;
    border-radius: 8px;
    padding: 5px;
    cursor: pointer;
    background-color: #D7FEF4;
    color: #05B387;
    font-weight: 600;
    transition: ease-in .2s;

    &:hover {
        background: #05B387;
        color: #fff;
    }
`;

const ModalTitle = styled(DialogTitle)`
  @media only screen and (max-width: 480px) {
    font-size: 1.15rem !important;
  }
`;

const StyledButton = styled(Button)`
  color: #05B387 !important;
`;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function DateAvailable({ availableTimes, selectedDateTime }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
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
              <DateItem key={index} onClick={handleClickOpen}>
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
          {selectedDateTime ? `Deseja confirmar seu agendamento no dia ${selectedDateTime.format('DD/MM/YYYY')} às ${selectedDateTime.format('HH:mm')} ?` : 'Deseja confirmar seu agendamento no dia'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <StyledButton onClick={handleClose}>Cancelar</StyledButton>
          <StyledButton onClick={handleClose}>Confirmar</StyledButton>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default DateAvailable;