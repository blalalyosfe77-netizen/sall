import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, User, Heart } from 'lucide-react';

interface HeaderProps {
  cartItems: number;
}

const Header: React.FC<HeaderProps> = ({ cartItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm text-gray-600 border-b border-gray-100">
          <div className="flex items-center gap-4">
            <span>📧 info@store.com</span>
            <span>📞 +966 50 123 4567</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:text-blue-600 transition-colors">تسجيل الدخول</button>
            <span>|</span>
            <button className="hover:text-blue-600 transition-colors">إنشاء حساب</button>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white text-sm">
                S
              </div>
              متجري
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">الرئيسية</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">المنتجات</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">الأقسام</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">العروض</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">اتصل بنا</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Search size={20} />
            </button>

            {/* Wishlist */}
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors hidden sm:block">
              <Heart size={20} />
            </button>

            {/* User Account */}
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors hidden sm:block">
              <User size={20} />
            </button>

            {/* Cart */}
            <button className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <ShoppingCart size={20} />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="ابحث عن المنتجات..."
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col gap-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">الرئيسية</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">المنتجات</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">الأقسام</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">العروض</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">اتصل بنا</a>
              <hr className="border-gray-200" />
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">تسجيل الدخول</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">إنشاء حساب</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;