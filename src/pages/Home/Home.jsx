import { useContext } from "react";
import Footer from "../../components/Footer/Footer";
import Services from "./Home/Services";
import AutoPlay from "./Home/SliderSlik";
import PauseOnHover from "./Home/Testimonials";
import Welcome from "./Home/Welcome";
import { AuthContext } from "../../providers/AuthProvider";
import Loader from "../../components/Loader/Loader";


const Home = () => {
    const { loading } = useContext(AuthContext)
    return (
        loading ? <Loader></Loader>
            :
            <div>
                <AutoPlay></AutoPlay>
                <Welcome></Welcome>
                <Services></Services>
                <div className="w-[85%] mx-auto lg:container lg:mx-auto">
                    <PauseOnHover></PauseOnHover>
                </div>
                <Footer></Footer>
            </div>
    );
};

export default Home;