import React from 'react';

const Categories: React.FC = () => {
  const categories = [
    { name: 'الملابس الرجالية', icon: '👔', color: 'from-blue-400 to-blue-600' },
    { name: 'الملابس النسائية', icon: '👗', color: 'from-pink-400 to-pink-600' },
    { name: 'الإلكترونيات', icon: '📱', color: 'from-purple-400 to-purple-600' },
    { name: 'المنزل والحديقة', icon: '🏡', color: 'from-green-400 to-green-600' },
    { name: 'الرياضة واللياقة', icon: '⚽', color: 'from-orange-400 to-orange-600' },
    { name: 'الجمال والعناية', icon: '💄', color: 'from-red-400 to-red-600' },
    { name: 'الأطفال والألعاب', icon: '🧸', color: 'from-yellow-400 to-yellow-600' },
    { name: 'الكتب والقرطاسية', icon: '📚', color: 'from-indigo-400 to-indigo-600' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">تسوق حسب الفئة</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            استعرض مجموعتنا الواسعة من الفئات المختلفة
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className={`bg-gradient-to-br ${category.color} rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-white font-medium text-sm leading-tight">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;