import React from 'react';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import NaverList from '../../components/NaverList';

import GlobalStyles from '../../styles/GlobalStyles';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Header />
      <NaverList />
      <GlobalStyles />
    </Container>
  );
};

export default Home;
