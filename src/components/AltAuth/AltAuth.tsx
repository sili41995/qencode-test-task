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

const AltAuth: FC = () => {
  return (
    <Container>
      <List>
        <ListItem>
          <Button type='button'>
            <FcGoogle />
            <Title>Google</Title>
          </Button>
        </ListItem>
        <ListItem>
          <Button type='button'>
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
