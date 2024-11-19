import { Outlet } from "react-router-dom";
import Header from "../Header";
import LatestNews from "../LatestNews";
import LeftNavber from "../Layout-component/LeftNavber";
import RightNav from "../Layout-component/RightNav";
import Navber from "../Navber";


const HomeLayouts = () => {
    return (
        <div  className="font-poppins">
            <header>
                <Header></Header>
            </header>
            <LatestNews></LatestNews>
            <nav className="w-11/12 mx-auto py-2">
                <Navber></Navber>

            </nav>
            <main className="w-11/12 mx-auto pt-5 grid grid-cols-12">
            <aside className="col-span-3">
                <LeftNavber></LeftNavber>
            </aside>
            <section className="col-span-6">News section
                <Outlet></Outlet>
            </section>
            <aside className="col-span-3">
<RightNav></RightNav>

            </aside>


                      </main>
            
        </div>
    );
};

export default HomeLayouts;