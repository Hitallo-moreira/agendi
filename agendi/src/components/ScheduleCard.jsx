import styled from "styled-components";

const Card = styled.div`
   height: 200px;
   width: 250px;
   border: 1px solid #ccc;
   border-radius: 20px;
   -webkit-box-shadow: 1px 10px 42px -15px rgba(0,0,0,0.26);
   -moz-box-shadow: 1px 10px 42px -15px rgba(0,0,0,0.26);
   box-shadow: 1px 10px 42px -15px rgba(0,0,0,0.26);
`;

const Date = styled.div`
   color: #000;
   font-size: 24px;
   font-weight: 600;
`;

const Hour = styled.div`
   color: #000;
   font-size: 24px;
   font-weight: 600;
`;

const CancelButton = styled.button`
   background-color: #e40521;
   color: #fff;
   font-size: 18px;
   border-radius: 10px;
   border: none;
   height: 50px;
   width: 100%;
   cursor: pointer;
   transition: .3s;

   &:hover {
    background-color: #ff0022;
   }
`;

function ScheduleCard() {
    return (
        <Card>
            <IconDiv>
                <img src={clock} alt="Relógio" />
            </IconDiv>
            <Date>
                05/03/2024
            </Date>
            <Hour>
                09:30
            </Hour>
            <div className="cancel">
                <CancelButton>Cancelar</CancelButton>
            </div>
        </Card>
    )
}

export default ScheduleCard;