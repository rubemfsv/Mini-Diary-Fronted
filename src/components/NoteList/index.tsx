import React, { useEffect, useState } from 'react';

import Note from '../Note';

import fetch from '../../services/api';
import { NoteProps } from '../../interfaces/index';

import { Container } from './styles';

const NoteList: React.FC = () => {
  const [notes, setNotes] = useState<NoteProps[]>([]);
  const [hasNote, setHasNote] = useState(false);

  const baseUrl = 'https://minidiaryback.herokuapp.com/notes';

  const fetchNotes = async () => {
    try {
      setHasNote(true);
      const response = await fetch(`${baseUrl}`);
      const data = await response.json();
      setHasNote(false);
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    (async () => {
      setNotes(await fetchNotes());
    })();
  }, []);

  return (
    <Container>
      {!hasNote ? (
        <>
          {notes?.map((note) => (
            <Note key={note.id} id={note.id} text={note.text} />
          ))}
        </>
      ) : (
        <div />
      )}
    </Container>
  );
};

export default NoteList;
