import Footer from "../../components/Footer/Footer";
import Services from "./Home/Services";
import AutoPlay from "./Home/SliderSlik";
import PauseOnHover from "./Home/Testimonials";
import Welcome from "./Home/Welcome";


const Home = () => {
    return (
        <div>
            <AutoPlay></AutoPlay>
            <Welcome></Welcome>
            <Services></Services>
            <div className="container mx-auto">
                <PauseOnHover></PauseOnHover>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;