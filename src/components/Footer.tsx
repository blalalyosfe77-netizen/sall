import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                S
              </div>
              <span className="text-2xl font-bold">متجري</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              متجر إلكتروني رائد يقدم أفضل المنتجات بأسعار منافسة وجودة عالية. نسعى لتوفير تجربة تسوق مميزة لعملائنا الكرام.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">من نحن</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">اتصل بنا</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">المدونة</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">الشروط والأحكام</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-6">الأقسام</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">الملابس الرجالية</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">الملابس النسائية</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">الإلكترونيات</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">المنزل والحديقة</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">الرياضة</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">الجمال والعناية</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">معلومات التواصل</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-500 mt-1" size={20} />
                <div>
                  <p className="text-gray-400">الرياض، المملكة العربية السعودية</p>
                  <p className="text-gray-400">شارع الملك فهد، الحي التجاري</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-green-500" size={20} />
                <span className="text-gray-400">+966 50 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-red-500" size={20} />
                <span className="text-gray-400">info@store.com</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="font-semibold mb-3">اشترك في النشرة الإخبارية</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="بريدك الإلكتروني"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
                  اشترك
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-center md:text-right">
            © 2024 متجري. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4">
            <img src="https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=100&h=60" alt="Visa" className="h-8 rounded" />
            <img src="https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=100&h=60" alt="Mastercard" className="h-8 rounded" />
            <img src="https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=100&h=60" alt="PayPal" className="h-8 rounded" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;