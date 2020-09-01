import React from 'react';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import NoteList from '../../components/NoteList';

import GlobalStyles from '../../styles/GlobalStyles';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Header />
      <NoteList />
      <GlobalStyles />
    </Container>
  );
};

export default Home;
