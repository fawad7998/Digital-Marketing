import React from 'react'

function TransformativeOutcomes() {
    const outcomes = [
        {
            title: "What you will be able to achieve after course completion?",
            description: "Building a successful online store in Pakistan requires proficient knowledge in 2 things: 1) generating traffic, 2) converting that traffic into sales. In this eight months digital marketing course, you will MASTER all traffic sources and also learn how to convert that traffic into sales.",
            icon: "/a.webp",
            borderColor: "border-orange-400"
        },
        {
            title: "Make Money Online with Freelancing",
            description: "Digital marketing skills are the most sought after skills in 2019. Every company, big or small, needs a digital marketing expert to grow their business online. Guess what? If you are an expert digital marketer, you can charge anywhere between $100-$2000 per month from your clients for providing digital marketing services. And not to mention the freelancing marketplaces where you will be able to kick start your freelancing career like Upwork or Fiverr.",
            icon: "/b.webp",
            borderColor: "border-blue-400"
        },
        {
            title: "Become expert in Generating Traffic online from Facebook, Youtube & Google",
            description: "Digital marketing revolves around Facebook, Youtube & Google. There are other platforms like LinkedIn and Instagram but the importance of the Big-3 is undeniable. After completing this course, you will be able to advertise in all these platforms and generate targeted traffic that converts into sales. That means, you now have the skill to MAKE-MONEY on Demand.",
            icon: "/c.webp",
            borderColor: "border-green-400"
        },
        {
            title: "Become a Master at Creating Professional Websites",
            description: "Creating websites should not be as difficult as it’s the first step towards your online success. Our course starts with 'Website Planning & Creation' module that enables you to master the website creation. You will be able to create any professional website in under 7 hours. Imagine having this skill in your backpack.",
            icon: "/d.webp",
            borderColor: "border-red-400"
        },
        {
            title: "Have the Midas Touch for growing any business",
            description: "Every business needs growth in sales and you will become a master at it! In the course itself you will be given plenty of projects to work that will give you the hands-on experience for growing any business. Be it a real-estate business or a transportation services business, you will be able to transform that business’s sales like a Midas Touch.",
            icon: "/e.webp",
            borderColor: "border-yellow-400"
        }
    ];

    return (
        <div className="max-w-6xl py-12 mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-green-color text-lg tracking-wide font-extrabold flex items-center justify-center before:content-[''] before:h-3px before:w-10 before:bg-green-color before:mr-2 after:content-[''] after:h-3px after:w-10 after:bg-green-color after:ml-2">
                    Transformative Outcomes
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    What you will be able to achieve after course completion?
                </h2>
                <h2 className="text-lg text-gray-900">
                    Knowledge is half the power. You will win the battle when you implement what you learned in our 8 to 10 months digital marketing course. Following are some of the things you can achieve after course completion.
                </h2>
            </div>
            {outcomes.map((outcome, index) => (
                <div key={index} className={`flex flex-wrap  lg:flex-nowrap md:flex-nowrap items-start space-x-4 p-6 mb-4 border-2 border-dashed ${outcome.borderColor} rounded-lg bg-white shadow hover:shadow-slate-500 hover:shadow-lg transition-all`}>
                    <img src={outcome.icon} alt="" className="w-32 h-32 object-contain items-center" />
                    <div>
                        <h3 className="text-3xl text-[#1D1B4C] font-bold text-gray-900 mb-2">{outcome.title}</h3>
                        <p className="text-gray-700 text-sm">{outcome.description}</p>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default TransformativeOutcomes
