import { Box } from 'components/Box';
import { Link, Container, HomeTitle } from 'pages/HomePage/HomePage.styled';
import { useAuth } from 'hooks';

const HomePage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box
      as="main"
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={200}
      color="text"
    >
      <Container>
        {isLoggedIn ? (
          <HomeTitle>
            Thank you for being with us! Now you can use{' '}
            <Link to="contacts"> Phonebook </Link> completely!
          </HomeTitle>
        ) : (
          <HomeTitle>
            <p>Welcome to Phonebook!</p>
            <p>If you want to proceed, please,</p>
            <Link to="login"> Log in </Link> to your account or
            <Link to="register"> Register </Link>
          </HomeTitle>
        )}
      </Container>
    </Box>
  );
};

export default HomePage;
