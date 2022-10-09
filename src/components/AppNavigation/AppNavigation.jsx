import { useAuth } from 'hooks';
import { Navigation, Link } from './AppNavigation.styled';

const AppNavigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Navigation>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </Navigation>
  );
};

export default AppNavigation;
