import React from 'react';
import { Truck, Shield, RefreshCw, Headphones } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Truck size={32} />,
      title: 'شحن مجاني',
      description: 'شحن مجاني للطلبات أكثر من 100 ريال',
      color: 'text-blue-600'
    },
    {
      icon: <Shield size={32} />,
      title: 'ضمان الجودة',
      description: 'ضمان استرداد المال خلال 30 يوم',
      color: 'text-green-600'
    },
    {
      icon: <RefreshCw size={32} />,
      title: 'إرجاع سهل',
      description: 'عملية إرجاع بسيطة وسريعة',
      color: 'text-purple-600'
    },
    {
      icon: <Headphones size={32} />,
      title: 'دعم 24/7',
      description: 'خدمة عملاء متاحة على مدار الساعة',
      color: 'text-orange-600'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2">
                <div className={`${feature.color} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;