/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { FormProps } from '../../interfaces/index';
import { getUserId } from '../../services/auth';

import {
  Container,
  Card,
  Header,
  BackIcon,
  Title,
  Body,
  InputContainer,
  ButtonContainer,
  ButtonForm,
} from './styles';

type EventType = React.ChangeEvent<HTMLTextAreaElement>;

const initialState = {
  user_id: getUserId(),
  text: '',
};

const Form: React.FC<FormProps> = ({
  title,
  userData,
  onSubmit,
}: FormProps) => {
  const [userInfo, setUserInfo] = useState(initialState);

  const history = useHistory();

  function handleBack() {
    history.push('/');
    history.go(0);
  }

  function handleChange(event: EventType) {
    event.persist();
    setUserInfo(() => ({
      ...userInfo,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(userInfo);
  }

  return (
    <Container>
      <Card>
        <Header>
          <BackIcon onClick={() => handleBack()} />
          <Title>{title}</Title>
        </Header>
        <Body onSubmit={handleSubmit}>
          <InputContainer>
            <label htmlFor="text">Anotação</label>
            <textarea
              name="text"
              id="name"
              placeholder="Escreva aqui um pensamento"
              defaultValue={userData?.text}
              onChange={handleChange}
            />
          </InputContainer>
          <ButtonContainer>
            <ButtonForm type="submit">Salvar</ButtonForm>
          </ButtonContainer>
        </Body>
      </Card>
    </Container>
  );
};

export default Form;
