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
                            className="aspect-video w-full border-x-8 border-b-8 border-green-400 rounded-t-3xl"
                        />
                    </figure>
                    {/*  <!-- Body--> */}
                    <div className="p-6 border-2 border-green-300">
                        <header className="">
                            <h3 className="text-xl font-medium text-slate-700">
                                Software Development
                            </h3>
                            <p className="text-sm text-slate-400"> Software development is the process of designing, creating, testing, and maintaining different software applications.</p>
                        </header>
                    </div>
                </div>
                <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                    {/*  <!--  Image --> */}
                    <figure>
                        <img
                            src={img2}
                            alt="card image"
                            className="aspect-video w-full border-x-8 border-b-8 border-green-400 rounded-t-3xl"
                        />
                    </figure>
                    {/*  <!-- Body--> */}
                    <div className="p-6 border-2 border-green-300">
                        <header className="">
                            <h3 className="text-xl font-medium text-slate-700">
                                Marketing
                            </h3>
                            <p className="text-sm text-slate-400">  Marketing refers to activities a company undertakes to promote the buying or selling of a product or service.</p>
                        </header>
                    </div>
                </div>
                <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                    {/*  <!--  Image --> */}
                    <figure>
                        <img
                            src={img3}
                            alt="card image"
                            className="aspect-video w-full border-x-8 border-b-8 border-green-400 rounded-t-3xl"
                        />
                    </figure>
                    {/*  <!-- Body--> */}
                    <div className="p-6 border-2 border-green-300">
                        <header className="">
                            <h3 className="text-xl font-medium text-slate-700">
                                Product Testing
                            </h3>
                            <p className="text-sm text-slate-400">Product testing is a method of analyzing a product concept, feature or functionality to determine how potential customers may use or react to the product.</p>
                        </header>
                    </div>
                </div>
                <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                    {/*  <!--  Image --> */}
                    <figure>
                        <img
                            src={img4}
                            alt="card image"
                            className="aspect-video w-full border-x-8 border-b-8 border-green-400 rounded-t-3xl"
                        />
                    </figure>
                    {/*  <!-- Body--> */}
                    <div className="p-6 border-2 border-green-300">
                        <header className="">
                            <h3 className="text-xl font-medium text-slate-700">
                                Deployment
                            </h3>
                            <p className="text-sm text-slate-400">the act or movement of deploying or the state of being deployed: such as. a. : placement or arrangement (as of military personnel or equipment) in position for a particular use or purpose.</p>
                        </header>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;