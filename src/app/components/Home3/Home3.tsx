import img from "@/Images/image1.png";
import Image from "next/image";

export default function Home3() {
    return (
        <div className="flex flex-col min-h-screen px-4 md:px-8 lg:px-16 py-16 justify-center items-center gap-8 md:gap-10">
            <div className="flex flex-col w-full max-w-4xl mx-auto text-center gap-4 md:gap-5">
                <p className="text-3xl md:text-4xl font-medium">
                    Our Course Offerings
                </p>
                <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
                    AI and quantum computing offer exciting opportunities for jobs, innovation,
                    problem-solving, and understanding the world. Its a chance to be at the
                    forefront of developing new technologies and shaping the future.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl">
                {[1, 2, 3].map((item) => (
                    <div
                        key={item}
                        className="flex flex-col bg-gray-200 p-6 md:p-8 lg:p-10 justify-center items-center rounded-lg text-center"
                    >
                        <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4">
                            <Image
                                src={img}
                                alt="Course Icon"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-lg md:text-xl">
                            AI Courses with IISc and QpiAI Certification
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}