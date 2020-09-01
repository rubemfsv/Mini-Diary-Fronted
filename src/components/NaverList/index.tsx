import React, { useEffect, useState } from 'react';

import Naver from '../Naver';

import fetch from '../../services/api';
import { NaverProps } from '../../interfaces/index';

import { Container } from './styles';

const NaverList: React.FC = () => {
  const [navers, setNavers] = useState<NaverProps[]>([]);
  const [hasNaver, setHasNaver] = useState(false);

  const baseUrl = 'http://localhost:3333/notes';

  const fetchNavers = async () => {
    try {
      setHasNaver(true);
      const response = await fetch(`${baseUrl}`);
      const data = await response.json();
      setHasNaver(false);
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    (async () => {
      setNavers(await fetchNavers());
    })();
  }, []);

  return (
    <Container>
      {!hasNaver ? (
        <>
          {navers?.map((user) => (
            <Naver key={user.id} id={user.id} text={user.text} />
          ))}
        </>
      ) : (
        <div />
      )}
    </Container>
  );
};

export default NaverList;
