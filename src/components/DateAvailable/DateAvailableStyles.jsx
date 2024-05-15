import styled from "styled-components";
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';

export const Title = styled.h1`
  font-size: 22px;
  text-align: center;
  color: #8d8d8d;
  margin: 0 0 20px 0;
`;

export const Schedules = styled.div`   
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

export const DateGrid = styled.div`
    display: grid;
    grid-template-columns: 100px 100px 100px;
    justify-content: center;
    gap: 10px;
`;

export const DateItem = styled.div`
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

export const ModalTitle = styled(DialogTitle)`
  @media only screen and (max-width: 480px) {
    font-size: 1.15rem !important;
  }
`;

export const StyledButton = styled(Button)`
  color: #05B387 !important;
`;