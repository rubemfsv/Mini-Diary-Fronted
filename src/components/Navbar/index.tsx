import React from 'react';

import { useAuth } from '../../contexts/auth';

import logo from '../../assets/logo.png';
import { Container, Logo, LogoutButton } from './styles';

const Navbar: React.FC = () => {
  const { handleAuth } = useAuth();

  return (
    <Container>
      <Logo src={logo} />
      <LogoutButton onClick={() => handleAuth(false)}>Sair</LogoutButton>
    </Container>
  );
};

export default Navbar;
