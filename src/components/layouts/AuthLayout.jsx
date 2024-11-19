import { Outlet } from "react-router-dom";
import Navber from "../Navber";


const AuthLayout = () => {
    return (
        <div>
            <nav className="w-11/12 mx-auto py-2">
                <Navber></Navber>

            </nav>

            <Outlet></Outlet>
            
        </div>
    );
};

export default AuthLayout;