import Banner from "../components/Banner/Banner";
import KnowUs from "../components/KnowUs/KnowUs";
import Nav from "../components/NewNav/Nav";
import PopularCategory from "../components/PopularCategory/PopularCategory";

const Home = () => {
    return (
        <div>
            {/* <Nav/> */}
            <Banner/>
            <div className="layout">

            <PopularCategory/>
            <KnowUs/>
            </div>
        </div>
    );
};

export default Home;