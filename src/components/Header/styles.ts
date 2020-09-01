import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 125px;
  display: flex;

  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font-family: Montserrat;
  font-style: normal;

  font-weight: 600;
  font-size: 40px;
  line-height: 48px;

  display: flex;
  align-items: center;

  color: var(--color-black);
`;

export const ButtonContainer = styled.div`
  width: 176px;
  color: #000;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: #000;
    text-decoration: none;
  }
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
