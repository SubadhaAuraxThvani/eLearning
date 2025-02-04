import { Button } from "@/components/ui/button";

export default function Home4() {
    return (
        <div id="motivation" className=" justify-center items-center py-8 px-4 md:py-16 md:px-8 lg:px-16">
            <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
                <div className="flex flex-col w-full lg:w-1/2 gap-5">
                    <p className="text-4xl md:text-5xl font-bold mb-4 sm:text-left text-center">Motivation</p>
                    <p className="lg:pr-20 sm:text-left text-center">
                        AI and quantum computing offer exciting opportunities for jobs, innovation,
                        problem-solving, and understanding the world. Its a chance to be at the
                        forefront of developing new technologies and shaping the future.
                    </p>
                    <Button className="w-full md:w-64">Enquire to know the price</Button>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-5 text-base md:text-lg bg-gray-200 p-6 md:p-8 rounded-lg">
                            <p className="font-medium">AI Everywhere</p>
                            <p>AI is influencing every field, yet its foundational concepts remain inaccessible to many.</p>
                        </div>
                        <div className="flex flex-col gap-5 text-base md:text-lg bg-gray-200 p-6 md:p-8 rounded-lg">
                            <p className="font-medium">Simplifying Complexity</p>
                            <p>Available methods are often too technical and intimidating, discouraging young learners.</p>
                        </div>
                        <div className="flex flex-col gap-5 text-base md:text-lg bg-gray-200 p-6 md:p-8 rounded-lg">
                            <p className="font-medium">Bridging the Learning Gap</p>
                            <p>Current education systems fail to offer practical and application-driven AI learning experiences.</p>
                        </div>
                        <div className="flex flex-col gap-5 text-base md:text-lg bg-gray-200 p-6 md:p-8 rounded-lg">
                            <p className="font-medium">Early Exposure</p>
                            <p>Introducing AI concepts at the right age can spark innovation and prepare students for future challenges.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}