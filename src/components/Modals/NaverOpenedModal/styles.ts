import styled from 'styled-components';
import { FaPen, FaTrash, FaTimes } from 'react-icons/fa';

export const Filter = styled.div`
::after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const Container = styled.div`
  position: fixed;
  width: 1006px;
  height: 503px;
  left: 138px;
  top: 109px;
  z-index: 3;
  display: flex;

  background: var(--color-white);
}
`;

export const Image = styled.img`
  width: 503px;
  height: 503px;
  filter: grayscale(100%);
`;

export const CardInfo = styled.div`
  padding: 32px;
`;

export const Name = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;

  display: flex;
  align-items: center;

  color: #000000;
`;

export const Position = styled.div`
  margin-top: 20px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  color: #212121;
`;

export const InfoTitle = styled.div`
  margin-top: 20px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  color: #212121;
`;

export const InfoContent = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  color: #212121;
`;

export const Close = styled(FaTimes)`
  display: flex;
  align-items: right;
  margin-left: 420px;

  transition: opacity 0.2s;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 130px;
  display: flex;
`;

export const DeleteIcon = styled(FaTrash)`
  height: 18px;
  width: 18px;
  margin-right: 10px;

  transition: opacity 0.2s;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
