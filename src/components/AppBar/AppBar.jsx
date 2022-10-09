import AppNavigation from "components/AppNavigation";
import UserMenu from "components/UserMenu";
import AuthNav from "components/AuthNav";
import { useAuth } from "hooks";
import { Header } from "./AppBar.styled";

const AppBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Header>
            <AppNavigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Header>
    );
};

export default AppBar;