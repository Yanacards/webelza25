
import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { BarChart2, Zap, ShieldCheck, ShoppingCart, Award, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const sliderContent = [
  { id: 1, key: 'slide1', image: 'https://picsum.photos/1200/600?random=1' },
  { id: 2, key: 'slide2', image: 'https://picsum.photos/1200/600?random=2' },
  { id: 3, key: 'slide3', image: 'https://picsum.photos/1200/600?random=3' },
  { id: 4, key: 'slide4', image: 'https://picsum.photos/1200/600?random=4' },
];

const HeroSlider: React.FC = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % sliderContent.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + sliderContent.length) % sliderContent.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[60vh] overflow-hidden">
      {sliderContent.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={slide.image} alt={t(`home.slider.${slide.key}.title`)} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white p-4">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">{t(`home.slider.${slide.key}.title`)}</h2>
              <p className="text-lg md:text-xl max-w-2xl mx-auto">{t(`home.slider.${slide.key}.desc`)}</p>
            </div>
          </div>
        </div>
      ))}
      <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white transition">
        <ChevronLeft className="h-6 w-6 text-gray-800" />
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white transition">
        <ChevronRight className="h-6 w-6 text-gray-800" />
      </button>
    </div>
  );
};

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  const aiFeatures = [
    { icon: <BarChart2 className="w-12 h-12 text-teal-500" />, title: "Predictive Analytics", desc: "Forecast trends and optimize inventory with AI." },
    { icon: <Zap className="w-12 h-12 text-teal-500" />, title: "Automated Operations", desc: "Streamline daily tasks and reduce manual work." },
    { icon: <ShieldCheck className="w-12 h-12 text-teal-500" />, title: "Compliance Monitoring", desc: "Ensure your business meets all regulations effortlessly." },
    { icon: <ShoppingCart className="w-12 h-12 text-teal-500" />, title: "Smart Procurement", desc: "AI-driven suggestions for cost-effective purchasing." },
  ];

  const services = [
    { icon: <ShoppingCart className="w-10 h-10 mx-auto text-white" />, title: t('home.mysteryShopping'), bg: 'bg-teal-600' },
    { icon: <BarChart2 className="w-10 h-10 mx-auto text-white" />, title: t('home.analytics'), bg: 'bg-cyan-600' },
    { icon: <Award className="w-10 h-10 mx-auto text-white" />, title: t('home.certification'), bg: 'bg-emerald-600' },
  ];

  const stats = [
    { value: t('home.stats.accuracy') },
    { value: t('home.stats.operations') },
    { value: t('home.stats.agents') },
    { value: t('home.stats.evaluations') },
  ];

  const testimonials = [
    { name: "Ahmed Saleh", role: "Restaurant Owner", text: "Belza transformed our operations. The AI insights are a game-changer.", rating: 5 },
    { name: "Fatima Al-Ali", role: "Cafe Manager", text: "The mystery shopper program provided invaluable feedback for our staff.", rating: 5 },
    { name: "Yusuf Khan", role: "Franchise Director", text: "Managing multiple locations has never been easier. Highly recommended!", rating: 4 },
  ];
  
  return (
    <div>
      <HeroSlider />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">{t('home.aiFeaturesTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiFeatures.map(feature => (
              <div key={feature.title} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                {feature.icon}
                <h3 className="text-xl font-bold mt-4 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">{t('home.servicesTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map(service => (
              <div key={service.title} className={`p-8 rounded-lg text-white ${service.bg}`}>
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-teal-700 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map(stat => (
              <div key={stat.value}>
                <p className="text-4xl font-bold">{stat.value.split(" ")[0]}</p>
                <p className="text-teal-200">{stat.value.split(" ").slice(1).join(" ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">{t('home.testimonialsTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(t => (
              <div key={t.name} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < t.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{t.text}"</p>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
