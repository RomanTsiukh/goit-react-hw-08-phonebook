import { Navigate } from "react-router-dom";
import { useAuth } from "hooks";

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const { isLoggedIn, isFetchingCurrentUser } = useAuth();
    const shouldRedirect = !isLoggedIn && !isFetchingCurrentUser;
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};