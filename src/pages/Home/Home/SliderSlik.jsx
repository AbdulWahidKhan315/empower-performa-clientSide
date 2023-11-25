
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Component } from 'react'
import slider1 from '../../../assets/images/employee1.jpg'
import slider2 from '../../../assets/images/employee2.jpg'
import slider3 from '../../../assets/images/employee3.jpg'
import slider4 from '../../../assets/images/employee4.jpg'
import slider5 from '../../../assets/images/employee5.jpg'
import slider6 from '../../../assets/images/employee6.jpg'
import Slider from 'react-slick'

export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            speed: 8000,
            autoplaySpeed: 50,
            cssEase: "linear"
        };
        return (
            <div className="">
                <div className="relative lg:container mx-auto w-[80%]">
                    <Slider {...settings}>
                        <div className="">
                            <img src={slider1} className="w-full lg:w-[95%] h-[160px] md:h-[350px] lg:h-[500px]" alt="" />
                        </div>
                        <div>
                            <img src={slider2} className="w-full lg:w-[95%] h-[160px] md:h-[350px] lg:h-[500px]" alt="" />
                        </div>
                        <div>
                            <img src={slider3} className="w-full lg:w-[95%] h-[160px] md:h-[350px] lg:h-[500px]" alt="" />
                        </div>
                        <div>
                            <img src={slider4} className="w-full lg:w-[95%] h-[160px] md:h-[350px] lg:h-[500px]" alt="" />
                        </div>
                        <div>
                            <img src={slider5} className="w-full lg:w-[95%] h-[160px] md:h-[350px] lg:h-[500px]" alt="" />
                        </div>
                        <div>
                            <img src={slider6} className="w-full lg:w-[95%] h-[160px] md:h-[350px] lg:h-[500px]" alt="" />
                        </div>
                    </Slider>
                    <div className="text-center flex justify-center items-center text-green-600">
                        <h2 className="text-2xl md:text-5xl absolute top-10 font-bold italic">NOW MANAGE EMPLOYEES EFFECTIVELY WITH EASE FROM ANYWHERE</h2>
                    </div>
                </div>
            </div>
        );
    }
}