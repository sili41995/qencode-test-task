import { NavLinks } from '@/types/types';
import PagePaths from './pagePaths';

const restrictedNavLinks: NavLinks = [
  { title: 'Login', path: PagePaths.login },
  { title: 'Sign Up', path: PagePaths.signUp },
];

export default restrictedNavLinks;
