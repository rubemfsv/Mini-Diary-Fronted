import styled from 'styled-components';

export const Container = styled.div`
  background: var(--color-white);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  position: relative;
  width: 448px;
  height: 408px;
  top: 156px;

  border: 1px solid var(--color-black);
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 32px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 60px;
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
`;

export const CardBody = styled.div`
  width: 100%;
  margin-top: 30px;
  margin-left: 30px;
  margin-right: 30px;
`;

export const ButtonContainer = styled.div`
  width: 384px;
  height: 40px;
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

export const InputContainer = styled.div`
  > input {
    width: 384px;
    height: 40px;
    margin-top: 5px;
    margin-bottom: 25px;

    background: var(--color-white);

    border: 1px solid #424242;
    box-sizing: border-box;
  }

  > label {
    width: 60.34px;
    height: 18px;
    left: 448px;
    top: 296px;

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
