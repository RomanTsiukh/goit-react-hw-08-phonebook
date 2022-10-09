import { AuthNavigation, Link } from "./AuthNav.styled";

const AuthNav = () => {
    return (
        <AuthNavigation>
            <Link to="/register">Register</Link>
            <Link to="/login">Log In</Link>
        </AuthNavigation>
    );
};

export default AuthNav;