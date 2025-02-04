import React from 'react';

const Home8: React.FC = () => {
    const limitations = [
        {
            title: 'Lack of Skill Development',
            description: 'Existing approaches often focus on theoretical concepts without fostering real-world problem-solving skills essential for AI applications.',
            icon: '🛠️'
        },
        {
            title: 'Less Engaging',
            description: 'The lack of interactive and hands-on learning methods makes AI education less engaging and harder to relate to practical scenarios.',
            icon: '🧩'
        },
        {
            title: 'Interdisciplinary Connection Missing',
            description: 'Current curricula fail to emphasize the interdisciplinary nature of AI, limiting students\' understanding of its integration with fields like gaming, healthcare, economics, art, finance etc.',
            icon: '🔗'
        }
    ];

    return (
        <div id="limitations" className="min-h-screen bg-white text-black flex items-center justify-center p-4">
            <div className="w-full max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-12  border-black pb-4">
                    Limitations of Current Approach
                </h1>
                <div className="grid md:grid-cols-3 gap-8">
                    {limitations.map((limitation, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <div className="text-5xl mb-4 text-center">{limitation.icon}</div>
                            <h2 className="text-2xl font-semibold mb-4 text-center border-b border-gray-300 pb-2">
                                {limitation.title}
                            </h2>
                            <p className="text-gray-700 text-center">
                                {limitation.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home8;