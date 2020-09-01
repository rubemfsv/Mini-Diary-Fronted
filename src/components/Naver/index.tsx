import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import NaverOpenedModal from '../Modals/NaverOpenedModal';
import DeleteOpenedModal from '../Modals/DeleteOpenedModal';

import { NaverProps } from '../../interfaces/index';
import fetch from '../../services/api';

import {
  Container,
  Card,
  ClickArea,
  Image,
  Name,
  Position,
  ButtonsContainer,
  DeleteIcon,
} from './styles';

const Naver: React.FC<NaverProps> = ({ id, user_id, text }) => {
  const [isNaverModalOpen, setIsNaverModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [navers, setNavers] = useState<NaverProps[]>([]);

  const baseUrl = 'http://localhost:3333/notes';
  const history = useHistory();

  const fetchNaver = async () => {
    try {
      const response = await fetch(`${baseUrl}`);
      const data = await response.json();

      return data;
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteNaver = async (id: string | number) => {
    try {
      await fetch(`${baseUrl}/${id}`, 'DELETE');
      setNavers(await fetchNaver());
    } catch (err) {
      console.error(err);
    }
  };

  function handleNaverModal() {
    setIsNaverModalOpen(!isNaverModalOpen);
  }

  function handleDeleteModal() {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  }

  return (
    <>
      {isNaverModalOpen && <NaverOpenedModal id={id} text={text} />}
      {isDeleteModalOpen && (
        <DeleteOpenedModal
          id={id as string}
          handleDeleteNaver={handleDeleteNaver}
        />
      )}

      <Container>
        <Card>
          <ClickArea onClick={() => handleNaverModal()}>
            <Name>{text}</Name>
          </ClickArea>
          <ButtonsContainer>
            <DeleteIcon onClick={() => handleDeleteModal()} />
          </ButtonsContainer>
        </Card>
      </Container>
    </>
  );
};

export default Naver;
