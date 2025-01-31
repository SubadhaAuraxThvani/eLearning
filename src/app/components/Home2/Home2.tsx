import Image from "next/image";
import img from "@/Images/image.png";

export default function Home2() {
    return (
        <div className="flex flex-col md:flex-row container mx-auto px-4 sm:px-6 lg:px-[10vw] py-6 md:py-12">
            <div className="w-full md:w-1/2 flex sm:text-left text-center flex-col justify-center gap-3 md:gap-4 md:pr-8 lg:pr-12">
                <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">
                    Dive into AI Learning with QpiAI Explorer, an IISc certified course
                </h1>
                <p className="text-sm md:text-lg lg:text-xl sm:text-left text-center">
                    QpiAI Explorer is the fastest way to Learn and Build AI models. Start
                    from the foundations of AI and leap into Expert level real-world
                    applications with hands-on learning.
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