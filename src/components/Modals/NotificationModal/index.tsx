import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { NotificationProps } from '../../../interfaces/index';

import { Container, Filter, Header, Title, Warning, Close } from './styles';

const NotificationModal: React.FC<NotificationProps> = ({ title, message }) => {
  const [isModalDeleted, setIsModalDeleted] = useState(true);

  const history = useHistory();

  function handleDeleteConfirmation() {
    history.push('/');
    history.go(0);
  }

  return (
    <>
      {isModalDeleted && (
        <Filter>
          <Container>
            <Header>
              <Title>{title}</Title>
              <Close onClick={() => handleDeleteConfirmation()} />
            </Header>
            <Warning>{message}</Warning>
          </Container>
        </Filter>
      )}
    </>
  );
};

export default NotificationModal;
