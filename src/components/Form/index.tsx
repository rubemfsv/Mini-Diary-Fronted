import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { FormProps } from '../../interfaces/index';

import {
  Container,
  Card,
  Header,
  BackIcon,
  Title,
  Body,
  Row,
  InputContainer,
  ButtonContainer,
  ButtonForm,
} from './styles';

type EventType = React.ChangeEvent<HTMLInputElement>;

const initialState = {
  text: '',
};

const Form: React.FC<FormProps> = ({ title, naverData, onSubmit }) => {
  const [naverInfo, setNaverInfo] = useState(initialState);

  const history = useHistory();

  function handleBack() {
    history.push('/');
    history.go(0);
  }

  function handleChange(event: EventType) {
    event.persist();
    console.log(event.target.value);
    setNaverInfo(() => ({
      ...naverInfo,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(naverInfo);
    onSubmit(naverInfo);
  }

  return (
    <Container>
      <Card>
        <Header>
          <BackIcon onClick={() => handleBack()} />
          <Title>{title}</Title>
        </Header>
        <Body onSubmit={handleSubmit}>
          <Row>
            <InputContainer>
              <label htmlFor="text">Texto</label>
              <input
                name="text"
                type="text"
                id="name"
                placeholder="Texto"
                defaultValue={naverData?.text}
                onChange={handleChange}
              />
            </InputContainer>
          </Row>
          <ButtonContainer>
            <ButtonForm type="submit">Salvar</ButtonForm>
          </ButtonContainer>
        </Body>
      </Card>
    </Container>
  );
};

export default Form;
