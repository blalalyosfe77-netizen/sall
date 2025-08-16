import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';
import Features from './components/Features';
import Footer from './components/Footer';
import { featuredProducts, newArrivals } from './data/products';

function App() {
  const [cartItems, setCartItems] = useState(0);

  const handleAddToCart = (productId: number) => {
    setCartItems(prev => prev + 1);
    // يمكنك إضافة منطق إضافي هنا مثل إظهار إشعار أو حفظ في localStorage
    console.log(`تم إضافة المنتج ${productId} للسلة`);
  };

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header cartItems={cartItems} />
      <Hero />
      <Categories />
      <ProductGrid 
        title="المنتجات المميزة" 
        products={featuredProducts} 
        onAddToCart={handleAddToCart}
      />
      <Features />
      <ProductGrid 
        title="وصل حديثاً" 
        products={newArrivals} 
        onAddToCart={handleAddToCart}
      />
      <Footer />
    </div>
  );
}

export default App;