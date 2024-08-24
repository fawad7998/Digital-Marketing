
import Link from "next/link";
import { FaChalkboardTeacher, FaVideo, FaUsers, FaBook } from "react-icons/fa";

export default function LearningMethodologies() {
    const methodologies = [
        {
            title: "Live Sessions",
            description:
                "Live Sessions enhance the effectiveness of the learning process by combining instruction, interaction, and application.",
            icon: <FaChalkboardTeacher className="text-orange-color text-5xl" />,
        },
        {
            title: "Recorded Classes (On Demand)",
            description:
                "Specially designed for different lifestyles and commitments to attend according to your needs.",
            icon: <FaVideo className="text-orange-color text-5xl" />,
        },
        {
            title: "Collaborative Learning",
            description:
                "Empower students to develop essential skills and knowledge needed to succeed in the ever-evolving world of digital marketing.",
            icon: <FaUsers className="text-orange-color text-5xl" />,
        },
        {
            title: "Practical Application & Case Studies",
            description:
                "The practical application of the learned data helps you mold a better, more efficient, and results-driven digital marketer.",
            icon: <FaBook className="text-orange-color text-5xl" />,
        },
    ];

    return (
        <div className="bg-lighter-gray py-5">
            <section className="mx-auto max-w-6xl py-12 px-4 md:px-8">
                <div className="text-center space-y-4 mb-12">
                    <h3 className="text-green-color text-md tracking-wide font-extrabold flex items-center justify-center before:content-[''] before:h-3px before:w-10 before:bg-green-color before:mr-2 after:content-[''] after:h-3px after:w-10 after:bg-green-color after:ml-2">
                        Methodologies
                    </h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Learning Methodologies for Online Live Full Stack Digital Marketing
                        Training In UAE
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {methodologies.map((item, index) => (
                        <Link
                            href="#"
                            key={index}
                            className="flex items-start gap-4 p-6 bg-white hover:bg-blue-hover-color hover:text-white transition-all rounded-lg shadow-md"
                        >
                            <div className="bg-white p-3 rounded-sm">{item.icon}</div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-900">
                                    {item.title}
                                </h4>
                                <p className="text-gray-600 mt-2">{item.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
