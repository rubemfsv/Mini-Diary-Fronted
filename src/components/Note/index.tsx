/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';

import NoteOpenedModal from '../Modals/NoteOpenedModal';
import DeleteOpenedModal from '../Modals/DeleteOpenedModal';

import { NoteProps } from '../../interfaces/index';
import fetch from '../../services/api';

import {
  Container,
  Card,
  ClickArea,
  Name,
  ButtonsContainer,
  DeleteIcon,
} from './styles';

const Note: React.FC<NoteProps> = ({ id, text }: NoteProps) => {
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
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

  const handleDeleteNote = async () => {
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
  }

  return (
    <>
      {isNoteModalOpen && <NoteOpenedModal id={id} text={text} />}
      {isDeleteModalOpen && (
        <DeleteOpenedModal
          id={id as string}
          handleDeleteNote={handleDeleteNote}
        />
      )}

      <Container>
        <Card>
          <ButtonsContainer>
            <DeleteIcon onClick={() => handleDeleteModal()} />
          </ButtonsContainer>
          <ClickArea onClick={() => handleNoteModal()}>
            <Name>{text}</Name>
          </ClickArea>
        </Card>
      </Container>
    </>
  );
};

export default Note;
