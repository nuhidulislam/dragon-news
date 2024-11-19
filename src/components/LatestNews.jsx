import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="w-11/12 mx-auto  flex items-center gap-2 bg-gray-200 p-2">
            <div ClassName="w-[200px]">
                <h1 className="bg-red-500  text-white p-2">Latest News</h1>
                </div>
          <div className=" ">
          <Marquee pauseOnHover={true} speed={100} className="space-x-2">
                <Link to='/news'>
                Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, nesciunt. consecis.</Link>
                <Link to='/news'>
                Lorem ipsum dolor sit ame Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quis!t consectdis.</Link>
                <Link to='/news'>
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, magni. consectetuendis.</Link>
            </Marquee>
          </div>

        </div>
    );
};

export default LatestNews;