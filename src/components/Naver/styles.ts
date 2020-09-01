import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaPen, FaTrash } from 'react-icons/fa';

export const Container = styled.div`
  margin-right: 22px;
`;

export const Card = styled.div`
  max-width: 281px;
  height: 420px;
  display: flex;
  flex-flow: column;
  line-height: 24px;
  margin-bottom: 32px;
`;

export const ClickArea = styled.div`
  transition: opacity 0.2s;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const Image = styled.img`
  width: 281px;
  height: 280px;
  filter: grayscale(100%);
`;

export const Name = styled.div`
  font-family: Montserrat;
  font-style: normal;

  margin-top: 10px;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;

  color: var(--color-black);
`;
export const Position = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  color: var(--color-black);
`;

export const ButtonsContainer = styled.div`
  margin-top: 12px;
`;

export const DeleteIcon = styled(FaTrash)`
  height: 18px;
  width: 18px;
  margin-right: 11px;

  transition: opacity 0.2s;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const StyledLink = styled(Link)`
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
