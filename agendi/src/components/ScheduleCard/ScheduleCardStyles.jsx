import styled from 'styled-components';

export const Card = styled.div`
  height: 200px;
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-shadow: 1px 10px 42px -15px rgba(0, 0, 0, 0.26);
  padding: 15px;
`;

export const IconDiv = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  border-radius: 20px 20px 0 0;
  margin-bottom: 10px;

  img {
    height: auto;
    width: 37px;
  }
`;

export const DateText = styled.div`
  color: #000;
  font-size: 24px;
  font-weight: 600;
`;

export const HourText = styled.div`
  color: #000;
  font-size: 28px;
  font-weight: 600;
`;

export const CancelButton = styled.button`
  background-color: #e40521;
  color: #fff;
  font-size: 18px;
  border-radius: 10px;
  border: none;
  height: 50px;
  width: 100%;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 1.5rem;

  &:hover {
    background-color: #ff0022;
  }
`;