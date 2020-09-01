import React, { useState } from 'react';

import NotificationModal from '../NotificationModal';

import { DeleteProps } from '../../../interfaces/index';

import {
  Container,
  Filter,
  Header,
  Warning,
  Title,
  ButtonsContainer,
  CancelButton,
  DeleteButton,
} from './styles';

const DeleteOpenedModal: React.FC<DeleteProps> = ({
  id,
  handleDeleteNaver,
}) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(true);
  const [isModalDeleted, setIsModalDeleted] = useState(false);

  function handleDeleteModal() {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  }

  function handleDeleteConfirmation() {
    handleDeleteNaver(id);
    setIsModalDeleted(!isModalDeleted);
    setIsDeleteModalOpen(!isDeleteModalOpen);
  }

  return (
    <>
      {isModalDeleted && (
        <NotificationModal
          title="Naver excluído"
          message="Naver excluído com sucesso!"
        />
      )}

      {isDeleteModalOpen && (
        <Filter>
          <Container>
            <Header>
              <Title>Excluir Naver</Title>
            </Header>
            <Warning>Tem certeza que deseja excluir este Naver?</Warning>
            <ButtonsContainer>
              <CancelButton onClick={() => handleDeleteModal()}>
                Cancelar
              </CancelButton>
              <DeleteButton onClick={() => handleDeleteConfirmation()}>
                Excluir
              </DeleteButton>
            </ButtonsContainer>
          </Container>
        </Filter>
      )}
    </>
  );
};

export default DeleteOpenedModal;
