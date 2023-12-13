import video1 from '../../../assets/videos/Why employee motivation important.mp4'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const BannerVideo = () => {
    useEffect(() => {
        AOS.init({ duration: "1000" })
    }, [])
    return (
        <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500" className='relative border-b-8 border-green-500 w-full h-[80vh]'>
            <video className='w-full h-full object-cover' src={video1} autoPlay loop muted></video>
            <div className="text-center flex justify-center items-center text-green-600">
                <h2 className="text-2xl md:text-5xl absolute bottom-10 font-bold bg-gradient-to-r from-blue-500 via-green-600 to-purple-600 text-transparent bg-clip-text italic">NOW MANAGE EMPLOYEES EFFECTIVELY WITH EASE FROM ANYWHERE</h2>
            </div>
        </div>
    );
};

export default BannerVideo;