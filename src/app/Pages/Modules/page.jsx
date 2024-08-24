import React from "react";
import Image from "next/image";
import Link from "next/link";

const Modules = () => {
    const modules = [
        {
            id: 1,
            title: "Module 1:",
            description: "Introduction to Digital Marketing (3 hours)",
            link: "/",
            details: [
                "Overview of digital marketing and its importance.",
                "Key concepts and terminology.",
                "Comparison with traditional marketing.",
            ],
            imageSrc: "/module-1.png",
            borderColor: "border-orange-500",
        },
        {
            id: 2,
            title: "Module 2:",
            description: "Social Media Marketing (9 hours)",
            link: "/",
            details: [
                "Overview of major platforms: Facebook, Instagram, Twitter, LinkedIn, TikTok.",
                "Social media strategy and content planning.",
                "Paid social media advertising (Facebook Ads, Instagram Ads).",
                "Social media analytics and tools (Hootsuite, Buffer).",
            ],
            imageSrc: "/module-2.png",
            borderColor: "border-green-500",
        },
        {
            id: 3,
            title: "Module 3:",
            description: " Search Engine Marketing (SEM) Google (6 hours)",
            link: "/",
            details: [
                "Introduction to PPC and search engine marketing.",
                "Google Ads: campaign setup, keyword research, ad creation.",
                "Display advertising and remarketing.",
                "Mobile applications and videos Ads that run on YouTube and mobile apps developed for Android.",
                "PPC analytics and optimization.",
            ],
            imageSrc: "/module-3.png",
            borderColor: "border-purple-500",
        },
        {
            id: 4,
            title: "Module 4:",
            description: "Engine Optimization (6 hours)",
            link: "/",
            details: [
                "On-page SEO: keywords, meta tags, content optimization.",
                "Off-page SEO: backlinks, domain authority.",
                "Technical SEO: site speed, mobile-friendliness, crawlability.",
                "SEO tools and analytics (Google Search Console, SEMrush).",
            ],
            imageSrc: "/module-4.png",
            borderColor: "border-yellow-500",
        },
        {
            id: 5,
            title: "Module 5:",
            description: "Web Development using WordPress (9 hours)",
            link: "/",
            details: [
                "Website design and development basics.",
                "Importance of UX and UI.",
                "Mobile responsiveness.",
                "Domain and Website Hosting",
            ],
            imageSrc: "/module-5.png",
            borderColor: "border-blue-500",
        },
        {
            id: 6,
            title: "Module 6:",
            description: "Email Marketing (6 hours)",
            link: "/",
            details: [
                "Introduction to Email Marketing",
                "Building and Managing Email Lists",
                "Crafting Effective Emails",
                "Email Marketing Platforms and Tools",
            ],
            imageSrc: "/module-6.png",
            borderColor: "border-red-500",
        },
        {
            id: 7,
            title: "Module 7:",
            description: "Affiliate & Ecommerce (9 hours)",
            link: "/",
            details: [
                "Affiliate Marketing Training",
                "Dropshipping Training",
                "Ecommerce Marketing Training",
            ],
            imageSrc: "/module-2.png",
            borderColor: "border-black-500",
        },
    ];

    return (
        <>
            <div className="max-w-6xl py-12 mx-auto px-4">
                <div className="text-center space-y-4 mb-12">
                    <h3 className="text-green-color text-md tracking-wide font-extrabold flex items-center justify-center before:content-[''] before:h-3px before:w-10 before:bg-green-color before:mr-2 after:content-[''] after:h-3px after:w-10 after:bg-green-color after:ml-2">
                        Our Modules
                    </h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Here’s a comprehensive list of Full Stack Digital Marketing modules
                        that form a robust training curriculum
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {modules.map((module) => (
                        <Link key={module.id} href={module.link} className="group">
                            <div
                                className={`relative overflow-hidden text-center border-2 border-dashed ${module.borderColor} rounded-md space-y-6 py-14`}
                            >
                                <div>
                                    <Image
                                        width={150}
                                        height={150}
                                        src={module.imageSrc}
                                        alt={`${module.title} illustration`}
                                        className="mb-2 mx-auto"
                                    />
                                    <h3 className="text-md font-extrabold">{module.title}</h3>
                                    <p className="text-sm">{module.description}</p>
                                </div>
                                <div className="absolute h-full w-full bg-white rounded-md flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <div className="px-10 text-start">
                                        <ul className="text-text-color text-sm font-normal list-disc space-y-3">
                                            {module.details.map((detail, index) => (
                                                <li key={index}>{detail}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Modules;
