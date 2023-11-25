
const Loader = () => {
    return (
        <div className='flex justify-center items-center h-screen gap-8'>
            <div className="h-32 w-32 rounded-3xl bg-gradient-to-r from-[#D9A05A] to-pink-500 animate-spin flex justify-center items-center">
                <div className="h-20 w-20 rounded-full bg-gradient-to-r from-[#D9A05A] to-pink-500 animate-spin flex justify-center items-center">
                    <h1 className='h-20 w-20 rounded-full bg-black animate-ping'></h1>
                </div>
            </div>
            <h1 className='text-5xl'>Loading....</h1>
        </div>
    );
};

export default Loader;