import Banner from "../components/Banner/Banner";
import KnowUs from "../components/KnowUs/KnowUs";
import PopularCategory from "../components/PopularCategory/PopularCategory";

const Home = () => {
    return (
        <div>
            <Banner/>
            <div className="layout">

            <PopularCategory/>
            <KnowUs/>
            </div>
        </div>
    );
};

export default Home;