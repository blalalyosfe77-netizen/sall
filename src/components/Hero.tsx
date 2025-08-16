import React from 'react';
import { ArrowLeft, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-right">
            <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <Star className="text-yellow-300" size={16} fill="currentColor" />
              <span className="text-sm">العروض الحصرية لفترة محدودة</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              اكتشف عالم
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                التسوق المثالي
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl mb-8 text-gray-100 max-w-lg mx-auto lg:mx-0">
              منتجات عالية الجودة بأسعار منافسة. اكتشف مجموعتنا المتميزة من أحدث المنتجات
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 group">
                تسوق الآن
                <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={18} />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-all duration-300">
                استعراض الأقسام
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl mb-4 flex items-center justify-center text-2xl">
                    👔
                  </div>
                  <h3 className="font-semibold mb-2">أزياء رجالية</h3>
                  <p className="text-sm text-gray-200">أحدث صيحات الموضة</p>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="w-12 h-12 bg-pink-400 rounded-xl mb-4 flex items-center justify-center text-2xl">
                    👗
                  </div>
                  <h3 className="font-semibold mb-2">أزياء نسائية</h3>
                  <p className="text-sm text-gray-200">تشكيلة أنيقة ومتنوعة</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="w-12 h-12 bg-green-400 rounded-xl mb-4 flex items-center justify-center text-2xl">
                    📱
                  </div>
                  <h3 className="font-semibold mb-2">إلكترونيات</h3>
                  <p className="text-sm text-gray-200">أحدث التقنيات</p>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="w-12 h-12 bg-blue-400 rounded-xl mb-4 flex items-center justify-center text-2xl">
                    🎁
                  </div>
                  <h3 className="font-semibold mb-2">هدايا</h3>
                  <p className="text-sm text-gray-200">لكل المناسبات</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white bg-opacity-5 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white bg-opacity-5 rounded-full animate-pulse"></div>
    </section>
  );
};

export default Hero;