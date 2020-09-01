import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Title, ButtonContainer, ButtonForm } from './styles';

const Header: React.FC = () => {
  const history = useHistory();

  function handleNew() {
    history.push('/new');
    history.go(0);
  }
  return (
    <Container>
      <Title>Mini Diário</Title>
      <ButtonContainer onClick={() => handleNew()}>
        <ButtonForm>Adicionar anotação</ButtonForm>
      </ButtonContainer>
    </Container>
  );
};

export default Header;
