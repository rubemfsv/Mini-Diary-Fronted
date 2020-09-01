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
  handleDeleteNote,
}: DeleteProps) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(true);
  const [isModalDeleted, setIsModalDeleted] = useState(false);

  function handleDeleteModal() {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  }

  function handleDeleteConfirmation() {
    handleDeleteNote(id);
    setIsModalDeleted(!isModalDeleted);
    setIsDeleteModalOpen(!isDeleteModalOpen);
  }

  return (
    <>
      {isModalDeleted && (
        <NotificationModal
          title="Feito!"
          message="Anotação excluída com sucesso!"
        />
      )}

      {isDeleteModalOpen && (
        <Filter>
          <Container>
            <Header>
              <Title>Excluir Anotação</Title>
            </Header>
            <Warning>Tem certeza que deseja excluir esta anotação?</Warning>
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
