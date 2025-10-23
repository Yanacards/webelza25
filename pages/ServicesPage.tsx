import React from 'react';
import { ShoppingCart, BarChart2, Award } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

// FIX: Define props with an interface and type the component as React.FC to ensure TS recognizes it as a React component, which allows the 'key' prop.
interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-100 text-teal-600 mb-6">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const ServicesPage: React.FC = () => {
    const { t } = useTranslation();
    const services = [
        {
            icon: <ShoppingCart className="w-8 h-8" />,
            title: t('home.mysteryShopping'),
            description: "Gain unbiased customer-centric feedback to improve service quality, employee performance, and overall customer experience across all your branches."
        },
        {
            icon: <BarChart2 className="w-8 h-8" />,
            title: t('home.analytics'),
            description: "Leverage AI-powered analytics to turn raw data into actionable insights. Track KPIs, compare branch performance, and make data-driven decisions for growth."
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: t('home.certification'),
            description: "Achieve industry-recognized certifications for quality, hygiene, and service excellence. Boost your brand's reputation and build customer trust."
        }
    ];

    return (
        <div className="bg-gray-50 py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Comprehensive Services</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We provide a full suite of AI-powered tools to elevate every aspect of your restaurant or cafe.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
