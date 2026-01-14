
import React from 'react';
import { Layers, Box, Users } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: <Box className="w-6 h-6" />,
      title: 'Tailored Design Solutions',
      description: 'We provide personalized interior design services that reflect your unique vision and lifestyle.'
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'Seamless Project Management',
      description: 'We handle the entire design process, from concept to completion, with flawless execution.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Client-Centered Collaboration',
      description: 'Your input is valued throughout the entire process, ensuring your vision is fully realized.'
    }
  ];

  return (
    <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="order-2 lg:order-1">
        <span className="text-pink-600 font-semibold tracking-widest uppercase text-sm mb-4 block">Why Choose Us</span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
          Transforming spaces with creativity and <span className="text-pink-500">precision</span>
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed mb-12">
          From concept to completion, discover how we bring your vision to life with innovation, collaboration, and expert craftsmanship.
        </p>

        <div className="space-y-10">
          {points.map((point, i) => (
            <div key={i} className="flex space-x-6">
              <div className="flex-shrink-0 w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center text-pink-600">
                {point.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{point.title}</h4>
                <p className="text-slate-600">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <img src="https://picsum.photos/id/111/400/500" alt="Work 1" className="rounded-2xl w-full shadow-xl" />
          <img src="https://picsum.photos/id/112/400/300" alt="Work 2" className="rounded-2xl w-full shadow-xl" />
        </div>
        <div className="space-y-4 pt-12">
          <img src="https://picsum.photos/id/113/400/300" alt="Work 3" className="rounded-2xl w-full shadow-xl" />
          <img src="https://picsum.photos/id/114/400/500" alt="Work 4" className="rounded-2xl w-full shadow-xl" />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
