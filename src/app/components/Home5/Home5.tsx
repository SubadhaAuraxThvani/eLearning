const Home5 = () => {
    type Feature = string | { text: string; highlight: string };

    const pricingPlans: {
        name: string;
        description: string;
        price?: number;
        features: Feature[];
    }[] = [
            {
                name: "AI Foundation",
                description: "28 hours of learning material",
                features: [
                    "Prerequisites for AI & ML",
                    "Artificial Intelligence",
                    "Machine Learning",
                    "Deep Learning",
                    "Foundation AI Projects"
                ]
            },
            {
                name: "AI Expert",
                description: "44 hours of learning material",
                price: 99,
                features: [
                    "Advanced Machine Learning",
                    "Practical Machine Learning",
                    "Advanced Topics in Deep Learning",
                    "Expert AI Projects"
                ]
            }
        ];

    return (
        <section className="bg-white dark:bg-gray-900 min-h-screen w-full px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
                        Artificial Intelligence Courses
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        Start from scratch with the AI prerequisites or expand your knowledge in the field of AI/ML with our AI courses. Learn Artificial Intelligence online and build an immersive AI skillset that businesses want to hire.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className="flex flex-col h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 transition-transform duration-300 hover:scale-105"
                        >
                            <div className="p-6 sm:p-8 flex flex-col h-full">
                                <div className="">
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                        {plan.name}
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400 mb-6">
                                        {plan.description}
                                    </p>
                                </div>

                                <ul className="space-y-3 mb-8 flex-grow">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li
                                            key={featureIndex}
                                            className="flex items-start text-gray-800 dark:text-gray-200"
                                        >
                                            <span className="text-sm sm:text-base">
                                                {typeof feature === 'string' ? feature : (
                                                    <>
                                                        {feature.text} <span className="font-semibold">{feature.highlight}</span>
                                                    </>
                                                )}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#"
                                    className="mt-auto inline-flex justify-center items-center px-6 py-3 text-base font-medium rounded-lg text-white bg-black hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full sm:w-auto sm:text-sm"
                                >
                                    Enquiry Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Home5;