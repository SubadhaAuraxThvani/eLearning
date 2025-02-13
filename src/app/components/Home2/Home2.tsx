import Image from "next/image";
import img from "@/Images/image.png";

export default function Home2() {
    return (
        <div id="about" className="flex flex-col md:flex-row container mx-auto px-4 sm:px-6 lg:px-[10vw] py-6 md:py-12">
            <div className="w-full md:w-1/2 flex sm:text-left text-center flex-col justify-center gap-3 md:gap-4 md:pr-8 lg:pr-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    About Us
                </h1>
                <p className="text-md md:text-lg lg:text-xl sm:text-left text-center sm:pr-10">
                    [Company Name] is a dynamic technology company that empowers
                    businesses to unlock actionable insights through our full custom AI/ML
                    solutions in Signal, Image, and Video processing analytics. Our platform also
                    provides an immersive learning experience, equipping school students,
                    undergraduate and graduate students, and working professionals with the
                    latest skills in STEM fields, AI/ML, and emerging technologies.

                </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center mb-4 md:mb-0 md:pl-8 lg:pl-12">
                <div className="relative w-full h-48 md:h-[50vh]">
                    <Image
                        src={img}
                        alt="AI Learning Illustration"
                        className="object-contain"
                        fill
                        priority
                    />
                </div>
            </div>
        </div>
    );
}