import Footer from "../../components/Footer/Footer";
import Services from "./Home/Services";
import AutoPlay from "./Home/SliderSlik";
import PauseOnHover from "./Home/Testimonials";


const Home = () => {
    return (
        <div>
            <AutoPlay></AutoPlay>
            <Services></Services>
            <div className="container mx-auto">
                <PauseOnHover></PauseOnHover>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;