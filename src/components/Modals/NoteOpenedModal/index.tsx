import React, { useState } from 'react';

import DeleteOpenedModal from '../DeleteOpenedModal';
import fetch from '../../../services/api';
import { NoteProps } from '../../../interfaces/index';

import {
  Container,
  CardInfo,
  Position,
  Close,
  ButtonsContainer,
  DeleteIcon,
  Filter,
} from './styles';

const NoteOpenedModal: React.FC<NoteProps> = ({
  id,
  text,
}: NoteProps) => {
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(true);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [, setNotes] = useState<NoteProps[]>([]);

  const baseUrl = 'https://minidiaryback.herokuapp.com/notes';

  const fetchNote = async () => {
    try {
      const response = await fetch(`${baseUrl}`);
      const data = await response.json();
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteNote = async (id: string | number) => {
    try {
      await fetch(`${baseUrl}/${id}`, 'DELETE');
      setNotes(await fetchNote());
    } catch (err) {
      console.error(err);
    }
  };

  function handleNoteModal() {
    setIsNoteModalOpen(!isNoteModalOpen);
  }

  function handleDeleteModal() {
    setIsDeleteModalOpen(!isDeleteModalOpen);
    handleNoteModal();
  }

  return (
    <>
      {isDeleteModalOpen && (
        <DeleteOpenedModal
          id={id as string}
          handleDeleteNote={handleDeleteNote}
        />
      )}

      {isNoteModalOpen && (
        <Filter>
          <Container>
            <CardInfo>
              <ButtonsContainer>
                <DeleteIcon onClick={() => handleDeleteModal()} />
                <Close onClick={() => handleNoteModal()} />
              </ButtonsContainer>

              <Position>{text}</Position>
            </CardInfo>
          </Container>
        </Filter>
      )}
    </>
  );
};

export default NoteOpenedModal;
