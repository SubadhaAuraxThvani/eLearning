import React from 'react';
import { CalendarIcon, ClockIcon, ComputerIcon, UsersIcon, MapPinIcon, DollarSignIcon } from 'lucide-react';

const Home10: React.FC = () => {
    const iconClass = "w-6 h-6 mr-3 text-blue-600";

    return (
        <div id="action" className="min-h-screen  flex items-center justify-center p-4">
            <div className="w-full max-w-4xl bg-white  rounded-2xl overflow-hidden">
                {/* Header Section */}
                <div className=" p-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Plan of Action</h1>
                    <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
                        We plan to launch a summer program for gated communities, offering both online and offline
                        learning options to provide students with a flexible, engaging, and collaborative environment
                        for exploring AI, fostering curiosity and innovation within their residential spaces
                    </p>
                </div>

                {/* Program Details Grid */}
                <div className="grid md:grid-cols-2 gap-8 p-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <div className="flex items-center bg-blue-50 p-4 rounded-lg">
                            <UsersIcon className={iconClass} />
                            <div>
                                <h3 className="font-semibold">Target Audience</h3>
                                <p className="text-gray-600">8th, 9th & 10th Class Students</p>
                            </div>
                        </div>

                        <div className="flex items-center bg-green-50 p-4 rounded-lg">
                            <CalendarIcon className={iconClass} />
                            <div>
                                <h3 className="font-semibold">Program Schedule</h3>
                                <p className="text-gray-600">April - May (Fri, Sat & Sun)</p>
                            </div>
                        </div>

                        <div className="flex items-center bg-purple-50 p-4 rounded-lg">
                            <ClockIcon className={iconClass} />
                            <div>
                                <h3 className="font-semibold">Total Learning Hours</h3>
                                <p className="text-gray-600">
                                    Online: 48 hrs<br />
                                    Offline: 24 hrs
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        <div className="flex items-center bg-yellow-50 p-4 rounded-lg">
                            <ComputerIcon className={iconClass} />
                            <div>
                                <h3 className="font-semibold">Learning Modes</h3>
                                <p className="text-gray-600">Hybrid (Online & Offline)</p>
                            </div>
                        </div>

                        <div className="flex items-center bg-red-50 p-4 rounded-lg">
                            <MapPinIcon className={iconClass} />
                            <div>
                                <h3 className="font-semibold">Location</h3>
                                <p className="text-gray-600">Gated Community Spaces</p>
                            </div>
                        </div>

                        <div className="flex items-center bg-indigo-50 p-4 rounded-lg">
                            <DollarSignIcon className={iconClass} />
                            <div>
                                <h3 className="font-semibold">Program Cost</h3>
                                <p className="text-gray-600">6,000 INR</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home10;