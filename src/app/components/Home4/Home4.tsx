import { Button } from "@/components/ui/button";

export default function Home4() {
    return (
        <div className=" justify-center items-center py-8 px-4 md:py-16 md:px-8 lg:px-16">
            <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
                <div className="flex flex-col w-full lg:w-1/2 gap-5">
                    <p className="text-lg md:text-xl">BENEFITS</p>
                    <p className="text-3xl md:text-4xl font-semibold">Why AI + Quantum</p>
                    <p className="lg:pr-20">
                        AI and quantum computing offer exciting opportunities for jobs, innovation,
                        problem-solving, and understanding the world. Its a chance to be at the
                        forefront of developing new technologies and shaping the future.
                    </p>
                    <Button className="w-full md:w-64">Enquire to know the price</Button>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-5 text-base md:text-lg bg-gray-200 p-6 md:p-8 rounded-lg">
                            <p className="font-medium">1:1 Mentorship Session</p>
                            <p>Get personalized guidance and accelerate your learning journey with a 1:1 mentorship from our expert team.</p>
                        </div>
                        <div className="flex flex-col gap-5 text-base md:text-lg bg-gray-200 p-6 md:p-8 rounded-lg">
                            <p className="font-medium">1:1 Mentorship Session</p>
                            <p>Get personalized guidance and accelerate your learning journey with a 1:1 mentorship from our expert team.</p>
                        </div>
                        <div className="flex flex-col gap-5 text-base md:text-lg bg-gray-200 p-6 md:p-8 rounded-lg">
                            <p className="font-medium">1:1 Mentorship Session</p>
                            <p>Get personalized guidance and accelerate your learning journey with a 1:1 mentorship from our expert team.</p>
                        </div>
                        <div className="flex flex-col gap-5 text-base md:text-lg bg-gray-200 p-6 md:p-8 rounded-lg">
                            <p className="font-medium">1:1 Mentorship Session</p>
                            <p>Get personalized guidance and accelerate your learning journey with a 1:1 mentorship from our expert team.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}