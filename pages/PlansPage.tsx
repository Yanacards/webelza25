import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

// FIX: Define props with an interface and type the component as React.FC to ensure TS recognizes it as a React component, which allows the 'key' prop.
interface PlanCardProps {
    plan: string;
    price: string;
    features: string[];
    popular?: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, price, features, popular }) => {
    const { t } = useTranslation();
    return (
        <div className={`border rounded-lg p-8 flex flex-col ${popular ? 'border-teal-500 relative shadow-2xl' : 'border-gray-200'}`}>
            {popular && <div className="absolute top-0 -translate-y-1/2 bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>}
            <h3 className="text-2xl font-bold mb-2">{plan}</h3>
            <p className="text-4xl font-bold mb-6">{price}<span className="text-lg font-normal text-gray-500">/mo</span></p>
            <ul className="space-y-4 mb-8 flex-grow">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                    </li>
                ))}
            </ul>
            <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${popular ? 'bg-teal-600 text-white hover:bg-teal-700' : 'bg-teal-100 text-teal-700 hover:bg-teal-200'}`}>
                {t('plans.getStarted')}
            </button>
        </div>
    );
};

const PlansPage: React.FC = () => {
    const [isYearly, setIsYearly] = useState(false);
    const { t } = useTranslation();

    const plans = {
        monthly: [
            { name: t('plans.basic'), price: '$49', features: ['1 Branch', 'Basic Analytics', 'Mystery Shopper Module', 'Email Support'] },
            { name: t('plans.professional'), price: '$99', popular: true, features: ['Up to 5 Branches', 'Advanced AI Analytics', 'Certification Manager', 'Priority Support', 'Task Tracking'] },
            { name: t('plans.enterprise'), price: 'Custom', features: ['Unlimited Branches', 'Full API Access', 'White Labeling', 'Dedicated Account Manager', 'On-site Training'] },
        ],
        yearly: [
            { name: t('plans.basic'), price: '$40', features: ['1 Branch', 'Basic Analytics', 'Mystery Shopper Module', 'Email Support'] },
            { name: t('plans.professional'), price: '$82', popular: true, features: ['Up to 5 Branches', 'Advanced AI Analytics', 'Certification Manager', 'Priority Support', 'Task Tracking'] },
            { name: t('plans.enterprise'), price: 'Custom', features: ['Unlimited Branches', 'Full API Access', 'White Labeling', 'Dedicated Account Manager', 'On-site Training'] },
        ]
    };

    return (
        <div className="bg-white py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">{t('plans.title')}</h1>
                    <p className="text-lg text-gray-600">{t('plans.subtitle')}</p>
                    <div className="mt-8 flex justify-center items-center space-x-4">
                        <span>{t('plans.monthly')}</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" checked={isYearly} onChange={() => setIsYearly(!isYearly)} className="sr-only peer" />
                            <div className="w-14 h-7 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                        </label>
                        <span>{t('plans.yearly')} <span className="text-green-500 font-semibold">(Save 20%)</span></span>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {(isYearly ? plans.yearly : plans.monthly).map(plan => (
                        <PlanCard key={plan.name} plan={plan.name} price={plan.price} features={plan.features} popular={plan.popular} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlansPage;
