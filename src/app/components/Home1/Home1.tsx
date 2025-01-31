import { Button } from "@/components/ui/button";
import Image from "next/image";
import img from "@/Images/image2.png";

export default function Home1() {
    return (
        <div className="flex flex-col md:flex-row px-4 md:px-8 lg:px-[10vw] gap-8  md:h-[80vh] items-center  md:py-0">
            <div className="w-full md:w-1/2 flex flex-col gap-6">
                <div className="flex flex-col text-3xl md:text-4xl lg:text-5xl font-bold">
                    <p>Play. Learn.</p>
                    <p>Explore.</p>
                </div>

                <div className="flex flex-col text-base md:text-lg lg:text-xl">
                    <p>Master Quantum and AI skills with</p>
                    <p>IISC and QpiAI Joint Courses.</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="w-full sm:w-auto">
                        Explore Quantum Courses
                    </Button>
                    <Button className="w-full sm:w-auto">
                        Explore AI Courses
                    </Button>
                </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
                <div className="relative w-full aspect-square md:aspect-auto md:h-[80%]">
                    <Image
                        src={img}
                        alt="Hero Image"
                    />
                </div>
            </div>
        </div>
    );
}