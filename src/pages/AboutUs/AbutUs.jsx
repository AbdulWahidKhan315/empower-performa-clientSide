import Footer from "../../components/Footer/Footer";

const AbutUs = () => {
    return (
        <div className="container mx-auto bg-green-50 p-2">
            <h2 className="text-4xl text-center text-green-600 italic">Contact Us</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                <div>
                    <div className='space-y-2'>
                        <h1 className='text-4xl font-bold text-gray-600 border-b-4 border-green-400 w-3/4'>Dhaka Office</h1>
                        <p>Suvastu Madhobilota, Flat # 5B, House # 67, Road # 17, Bloack # C, Banani, Dhaka - 1213</p>
                        <p> +88 02 55035731-32</p>
                        <p> +88017 555 98 446-47, 88 01844 114 822</p>
                        <p> salesdhk@hotelthecoxtoday.com</p>
                    </div>
                </div>
                <div>
                    <div className='space-y-2'>
                        <h1 className='text-4xl font-bold text-gray-600 border-b-4 border-green-400 w-3/4'>Tangail Office</h1>
                        <p> Plot-7, Road-02, Tangail Motel Zone, Kolatoly Road, Nalua Bazar, Bangladesh</p>
                        <p> +88 02 55035731-32</p>
                        <p> +88017 555 98 446-47, 88 01844 114 822</p>
                        <p> salesdhk@hotelthecoxtoday.com</p>
                    </div>
                </div>
                <div>
                    <div className='space-y-2'>
                        <h1 className='text-4xl font-bold text-gray-600 border-b-4 border-green-400 w-3/4'>Rangpur Office</h1>
                        <p> 206/217, Jamal Khan Road, Pacific Tower (2nd Floor) Rangpur, Bangladesh.</p>
                        <p> +88 02 55035731-32</p>
                        <p> +88017 555 98 446-47, 88 01844 114 822</p>
                        <p> salesdhk@hotelthecoxtoday.com</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="w-full md:w-3/4 mx-auto bg-green-200 p-4 lg:p-40 rounded-lg my-16">
                    <h2 className="text-4xl text-center text-green-600 italic my-4">Send Us your opinion</h2>
                    <form>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email:</span>
                            </label>
                            <input type="text" placeholder="Your Email" className="input input-bordered input-primary w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Opinion:</span>
                            </label>
                            <textarea className="textarea textarea-bordered h-36 outline-none" placeholder="Write something...."></textarea>
                        </div>
                        <input type="submit" className="btn btn-success mt-5" value="Send Us" />
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AbutUs;