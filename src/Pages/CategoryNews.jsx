import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";


const CategoryNews = () => {
    const {data}= useLoaderData()

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-2">Dragon News Home</h1>
            <div>
                {
                    data.map((singleNews) => (
                    <NewsCard key={singleNews._id} news={singleNews}></NewsCard>))
                }
            </div>
            
        </div>
    );
};

export default CategoryNews;