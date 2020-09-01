import styled from 'styled-components';
import { FaAngleLeft } from 'react-icons/fa';

export const Container = styled.div`
  background: var(--color-white);

  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  width: 650px;
  height: 408px;

  border: none;
  // border: 1px solid var(--color-black);
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  padding: 32px;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  color: #000000;
`;

export const BackIcon = styled(FaAngleLeft)`
  height: 40px;
  width: 12px;
  margin-right: 11px;

  transition: opacity 0.2s;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const Title = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  margin-left: 10px;

  display: flex;
  align-items: center;

  color: var(--color-black);
`;

export const Body = styled.form`
  margin-top: 35px;
`;

export const Row = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const InputContainer = styled.div`
  margin-top: -5px;

  > input {
    width: 280px;
    height: 40px;
    margin-top: 5px;
    margin-bottom: 25px;
    margin-right: 32px;

    background: var(--color-white);

    border: 1px solid #424242;
    box-sizing: border-box;
  }

  > label {
    width: 100%;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;

    display: flex;
    align-items: center;

    color: var(--color-black);
  }
`;

export const ButtonContainer = styled.div`
  width: 176px;
  height: 40px;
  margin-left: 416px;
`;

export const ButtonForm = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: var(--color-black);

  width: 100%;
  height: 40px;
  margin-top: 5px;
  margin-bottom: 25px;

  color: var(--color-white);
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  transition: opacity 0.2s;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
