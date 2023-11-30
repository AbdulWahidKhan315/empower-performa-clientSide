

const FAQs = () => {
    return (
        <div className="container mx-auto my-10">
            <h2 className='text-center mb-10 text-4xl italic animate-pulse font-bold text-green-500'>FAQs</h2>
            <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" checked="checked" />
                    <div className="collapse-title text-xl font-bold text-green-700">
                        How can employees access the employee management system?
                    </div>
                    <div className="collapse-content">
                        <p>Answer: Employees can access the system by logging in through the designated portal using their unique username and password. The login credentials are typically provided by the HR department or system administrator.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-bold text-green-700">
                        What features are included in the employee management system?
                    </div>
                    <div className="collapse-content">
                        <p>Answer: Our employee management system encompasses a range of features, including but not limited to:
                            Time and attendance tracking,
                            Leave management,
                            Performance evaluations,
                            Employee self-service,
                            Payroll information,
                            Employee directory</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-bold text-green-700">
                    How does the system handle data security and privacy?
                    </div>
                    <div className="collapse-content">
                        <p>Answer: We prioritize the security and privacy of employee data. The system employs robust encryption measures to protect sensitive information. Access to data is restricted based on user roles, and regular security audits are conducted to ensure compliance with industry standards and regulations.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-bold text-green-700">
                    Can employees update their personal information in the system?
                    </div>
                    <div className="collapse-content">
                        <p>Answer: Yes, employees can use the employee self-service feature to update personal information such as contact details, emergency contacts, and other relevant details. However, certain sensitive information may require HR approval or verification.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQs;