import styled from 'styled-components';

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
  height: 233px;
  left: 344px;
  top: 244px;
  z-index: 3;

  background: var(--color-white);
`;

export const Header = styled.div`
  margin-left: 32px;
  margin-top: 32px;
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

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 30px;
  margin-left: 184px;
`;

export const CancelButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #212121;
  background-color: var(--color-white);

  width: 176px;
  height: 40px;
  margin-top: 5px;
  margin-bottom: 25px;
  margin-right: 24px;

  color: var(--color-black);
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  transition: opacity 0.2s;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: var(--color-black);

  width: 176px;
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
