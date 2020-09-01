import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import DeleteOpenedModal from '../DeleteOpenedModal';
import fetch from '../../../services/api';
import { NaverProps } from '../../../interfaces/index';

import {
  Container,
  CardInfo,
  Position,
  Close,
  ButtonsContainer,
  DeleteIcon,
  Filter,
} from './styles';

const NaverOpenedModal: React.FC<NaverProps> = ({ id, user_id, text }) => {
  const [isNaverModalOpen, setIsNaverModalOpen] = useState(true);
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
    handleNaverModal();
  }

  return (
    <>
      {isDeleteModalOpen && (
        <DeleteOpenedModal
          id={id as string}
          handleDeleteNaver={handleDeleteNaver}
        />
      )}

      {isNaverModalOpen && (
        <Filter>
          <Container>
            <CardInfo>
              <Close onClick={() => handleNaverModal()} />
              <Position>{text}</Position>
              <ButtonsContainer>
                <DeleteIcon onClick={() => handleDeleteModal()} />
              </ButtonsContainer>
            </CardInfo>
          </Container>
        </Filter>
      )}
    </>
  );
};

export default NaverOpenedModal;
