import { FC } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import {
  Button,
  Container,
  Delimiter,
  List,
  ListItem,
  Title,
} from './AltAuth.styled';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';

const AltAuth: FC = () => {
  const onAuthBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);
  };

  return (
    <Container>
      <List>
        <ListItem>
          <Button type='button' onClick={onAuthBtnClick}>
            <FcGoogle />
            <Title>Google</Title>
          </Button>
        </ListItem>
        <ListItem>
          <Button type='button' onClick={onAuthBtnClick}>
            <FaGithub />
            <Title>Github</Title>
          </Button>
        </ListItem>
      </List>
      <Delimiter>or</Delimiter>
    </Container>
  );
};

export default AltAuth;
