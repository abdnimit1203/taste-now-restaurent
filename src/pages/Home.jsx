import Banner from "../components/Banner/Banner";
import KnowUs from "../components/KnowUs/KnowUs";
import PopularCategory from "../components/PopularCategory/PopularCategory";

const Home = () => {
    return (
        <div>
            <Banner/>
            <PopularCategory/>
            <KnowUs/>
        </div>
    );
};

export default Home;