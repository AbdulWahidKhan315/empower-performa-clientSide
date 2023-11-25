import img from '../../../assets/images/welcome.jpg'
const Welcome = () => {
    return (
        <div className='container mx-auto mt-10'>
            <h1 className='text-center mb-10 text-4xl italic animate-pulse font-bold text-green-500'>Stay With Us</h1>
            <div className="flex flex-col lg:flex-row gap-10">
                <div className='flex-1 bg-green-100 p-4 space-y-6 rounded-r-3xl'>
                    <h1 className='text-4xl text-green-600'>Welcome to Empower Performa</h1>
                    <p>Where efficiency meets simplicity in workforce management. Our comprehensive platform is designed to streamline every aspect of employee administration, providing a seamless experience for both HR professionals and employees alike.</p>
                    <p>Say goodbye to cumbersome paperwork and embrace a digital solution that empowers your organization. Our Employee Management System offers a user-friendly interface that simplifies tasks such as attendance tracking, leave management, and payroll processing. With just a few clicks, HR managers can effortlessly navigate through an array of features, ensuring accurate and timely data management.</p>
                    <button className='btn bg-green-700 px-4 py-2 rounded-lg text-white font-bold animate-bounce hover:animate-none'>Get Started</button>
                </div>
                <div className=''>
                    <img className='lg:w-[500px] rounded-l-3xl' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Welcome;