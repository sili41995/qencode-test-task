import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IProps } from './RedirectLink.types';
import { Text } from './RedirectLink.styled';

const RedirectLink: FC<IProps> = ({ title, pathLink, pathTitle }) => (
  <Text>
    {title} <Link to={pathLink}>{pathTitle}</Link>
  </Text>
);

export default RedirectLink;
