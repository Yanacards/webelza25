
import React from 'react';
import { Eye, Rocket, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
    const teamMembers = [
        { name: "Abdullah Al-Malki", role: "Founder & CEO", image: "https://picsum.photos/200/200?random=10" },
        { name: "Sara Ibrahim", role: "Head of AI Development", image: "https://picsum.photos/200/200?random=11" },
        { name: "Omar Hassan", role: "Director of Operations", image: "https://picsum.photos/200/200?random=12" },
        { name: "Layla Ahmed", role: "Client Success Manager", image: "https://picsum.photos/200/200?random=13" },
    ];
    return (
        <div className="bg-white">
            <div className="container mx-auto px-6 py-20">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Empowering the Future of Hospitality</h1>
                    <p className="text-lg text-gray-600">
                        Belza was born from a passion for food and technology. We believe that every restaurant and cafe, regardless of size, deserves access to the tools and insights needed to thrive in a competitive market.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 my-20">
                    <div className="bg-gray-50 p-8 rounded-lg">
                        <div className="flex items-center text-teal-600 mb-4">
                            <Eye className="w-8 h-8 mr-3" />
                            <h2 className="text-2xl font-bold">Our Vision</h2>
                        </div>
                        <p className="text-gray-600">To be the leading global platform for restaurant intelligence, setting new standards for quality, efficiency, and growth in the hospitality industry.</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-lg">
                        <div className="flex items-center text-teal-600 mb-4">
                            <Rocket className="w-8 h-8 mr-3" />
                            <h2 className="text-2xl font-bold">Our Mission</h2>
                        </div>
                        <p className="text-gray-600">To provide restaurant and cafe owners with a comprehensive, AI-driven toolkit that simplifies operations, enhances customer experience, and fuels sustainable expansion.</p>
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-12">Meet Our Team</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {teamMembers.map(member => (
                            <div key={member.name}>
                                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                                <h3 className="font-bold text-lg">{member.name}</h3>
                                <p className="text-gray-500">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
