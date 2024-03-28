import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div>
            <div className="container mx-auto">
            <Header></Header>
            <Outlet></Outlet>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Root;