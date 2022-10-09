import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import AppBar from "components/AppBar";

const Layout = () => {
    return (
        <>
            <AppBar />
            <Suspense fallback="null">
                <Outlet />
            </Suspense>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                theme={'colored'}
                closeOnClick
            />
        </>
    );
};

export default Layout;