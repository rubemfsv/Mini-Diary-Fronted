import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

export const Filter = styled.div`
::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const Container = styled.div`
  position: absolute;
  width: 592px;
  height: 160px;
  left: 344px;
  top: 265px;
  z-index: 3;

  background: var(--color-white);
`;

export const Header = styled.div`
  margin-left: 32px;
  margin-top: 32px;
  display: flex;
`;

export const Title = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;

  display: flex;
  align-items: center;

  color: var(--color-black);
`;

export const Warning = styled.div`
  margin-left: 32px;
  margin-top: 20px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 36px;

  display: flex;
  align-items: center;

  color: var(--color-black);
`;

export const Close = styled(FaTimes)`
  display: flex;
  align-items: right;
  margin-left: 340px;
  height: 14px;
  width: 14px;

  transition: opacity 0.2s;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
