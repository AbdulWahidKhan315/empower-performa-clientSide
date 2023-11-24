import img1 from '../../../assets/images/softwareDevelopment.jpg'
import img2 from '../../../assets/images/marketing.jpg'
import img3 from '../../../assets/images/productTesting.jpg'
import img4 from '../../../assets/images/deployment.jpg'
const Services = () => {
    return (
        <div className=' container mx-auto my-20'>
            <h1 className='text-center mb-10 text-4xl italic animate-pulse font-bold text-green-500'>Our Service</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                    {/*  <!--  Image --> */}
                    <figure>
                        <img
                            src={img1}
                            alt="card image"
                            className="aspect-video w-full"
                        />
                    </figure>
                    {/*  <!-- Body--> */}
                    <div className="p-6">
                        <header className="">
                            <h3 className="text-xl font-medium text-slate-700">
                                Software Development
                            </h3>
                            <p className="text-sm text-slate-400"> By George, jun 3 2023</p>
                        </header>
                    </div>
                </div>
                <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                    {/*  <!--  Image --> */}
                    <figure>
                        <img
                            src={img2}
                            alt="card image"
                            className="aspect-video w-full"
                        />
                    </figure>
                    {/*  <!-- Body--> */}
                    <div className="p-6">
                        <header className="">
                            <h3 className="text-xl font-medium text-slate-700">
                                Marketing
                            </h3>
                            <p className="text-sm text-slate-400"> By George, jun 3 2023</p>
                        </header>
                    </div>
                </div>
                <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                    {/*  <!--  Image --> */}
                    <figure>
                        <img
                            src={img3}
                            alt="card image"
                            className="aspect-video w-full"
                        />
                    </figure>
                    {/*  <!-- Body--> */}
                    <div className="p-6">
                        <header className="">
                            <h3 className="text-xl font-medium text-slate-700">
                                Product Testing
                            </h3>
                            <p className="text-sm text-slate-400"> By George, jun 3 2023</p>
                        </header>
                    </div>
                </div>
                <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                    {/*  <!--  Image --> */}
                    <figure>
                        <img
                            src={img4}
                            alt="card image"
                            className="aspect-video w-full"
                        />
                    </figure>
                    {/*  <!-- Body--> */}
                    <div className="p-6">
                        <header className="">
                            <h3 className="text-xl font-medium text-slate-700">
                                Deployment
                            </h3>
                            <p className="text-sm text-slate-400"> By George, jun 3 2023</p>
                        </header>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;