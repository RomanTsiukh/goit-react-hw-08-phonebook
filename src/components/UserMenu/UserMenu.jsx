import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/authOperations";
import { useAuth } from "hooks";
import { MenuBox, MenuText, MenuButton } from "./UserMenu.styled";


const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <MenuBox>
            <MenuText>Welcome, {user.name}</MenuText>
            <MenuButton type="button" onClick={()=> dispatch(logOut())}>Log Out</MenuButton>
        </MenuBox>
    );
};

export default UserMenu;