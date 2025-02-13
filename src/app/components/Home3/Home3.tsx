import React from 'react';
import Image from 'next/image';
import img from "@/Images/image1.png"
import img1 from "@/Images/image7.png"
import img2 from "@/Images/image10.png"

const Home3 = () => {
    const benefits = [
        {
            title: "AI for Juniors",
            description: "",
            image: img
        },
        {
            title: "AI for UG/PG",
            description: "Announce soon",
            image: img1
        },
        {
            title: "AI for Professionals",
            description: "Announce soon",
            image: img2
        }
    ];

    return (
        <div id="early" className="flex flex-col min-h-screen px-4 md:px-8 lg:px-16 py-16 justify-center items-center gap-8 md:gap-10">
            <div className="flex flex-col w-full max-w-4xl mx-auto text-center gap-4 md:gap-5">
                <p className="text-4xl md:text-5xl font-bold mb-4">
                    Our Course Offerings
                </p>
                <p className="text-base md:text-lg lg:text-xl max-w-6xl mx-auto">
                    AI and STEM education unlocks a world of possibilities, offering exciting career prospects, fostering
                    innovation, enhancing problem-solving skills, and deepening our understanding of the world. By
                    embracing these fields, you will be at the forefront of revolutionizing technology and shaping a brighter
                    future
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl">
                {benefits.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col bg-gray-200 p-6 md:p-8 lg:p-10 justify-center items-center rounded-lg text-center gap-4"
                    >
                        <div className="relative w-24 h-24 md:w-32 md:h-32">
                            <Image
                                src={item.image}
                                alt={`${item.title} Icon`}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-lg md:text-xl font-medium">
                            {item.title}
                        </p>
                        <p className="text-sm md:text-base text-gray-600">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home3;