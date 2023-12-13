import { useContext } from "react";
import Footer from "../../components/Footer/Footer";
import Services from "./Home/Services";
// import AutoPlay from "./Home/SliderSlik";
import PauseOnHover from "./Home/Testimonials";
import Welcome from "./Home/Welcome";
import { AuthContext } from "../../providers/AuthProvider";
import Loader from "../../components/Loader/Loader";
import FAQs from "./Home/FAQs";
import BannerVideo from "./Home/BannerVideo";


const Home = () => {
    const { loading } = useContext(AuthContext)
    return (
        loading ? <Loader></Loader>
            :
            <div>
                <BannerVideo></BannerVideo>
                {/* <AutoPlay></AutoPlay> */}
                <Welcome></Welcome>
                <Services></Services>
                <div className="w-[85%] mx-auto lg:container lg:mx-auto">
                    <PauseOnHover></PauseOnHover>
                </div>
                <FAQs></FAQs>
                <Footer></Footer>
            </div>
    );
};

export default Home;