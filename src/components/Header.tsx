import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Heart, ShoppingBag, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isShopByOpen, setIsShopByOpen] = useState(false);

  return (
    <>
      {/* Top banner */}
      <div className="bg-amber-900 text-white text-center py-2 text-sm">
        GET YOUR JEWELRY FASTER THAN EVER! 
        <button className="underline ml-2 hover:text-amber-200 transition-colors">
          Shop now
        </button>
      </div>
      
      {/* Main header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Search */}
            <div className="flex items-center">
              <Search className="h-5 w-5 text-gray-600 hover:text-amber-900 cursor-pointer transition-colors" />
            </div>

            {/* Logo */}
            <Link to="/" className="text-center">
              <div className="flex items-center justify-center mb-1">
                <img 
                  src="/Your paragraph text.png" 
                  alt="Radiant Reflection Logo" 
                  className="h-8 w-8 mr-2"
                />
                <div className="text-xl font-light tracking-wide text-gray-900">
                  <span className="font-serif">RADIANT REFLECTION</span>
                </div>
              </div>
              <div className="text-xs text-gray-600 italic font-light">
                jewelry
              </div>
            </Link>

            {/* User actions */}
            <div className="flex items-center space-x-4">
              <User className="h-5 w-5 text-gray-600 hover:text-amber-900 cursor-pointer transition-colors" />
              <div className="relative">
                <Heart className="h-5 w-5 text-gray-600 hover:text-amber-900 cursor-pointer transition-colors" />
                <span className="absolute -top-2 -right-2 bg-amber-900 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </div>
              <div className="relative">
                <ShoppingBag className="h-5 w-5 text-gray-600 hover:text-amber-900 cursor-pointer transition-colors" />
                <span className="absolute -top-2 -right-2 bg-amber-900 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="border-t border-gray-200">
            <div className="flex items-center justify-center space-x-8 py-4">
              <Link 
                to="/" 
                className="text-gray-900 font-medium hover:text-amber-900 transition-colors border-b-2 border-transparent hover:border-amber-900 pb-1"
              >
                HOME
              </Link>
              
              <div className="relative">
                <button
                  onClick={() => setIsShopByOpen(!isShopByOpen)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-amber-900 cursor-pointer transition-colors font-medium"
                >
                  <span>SHOP BY</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                {isShopByOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border z-50">
                    <Link
                      to="/earrings"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-amber-900 transition-colors"
                      onClick={() => setIsShopByOpen(false)}
                    >
                      Earrings
                    </Link>
                    <Link
                      to="/bracelets"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-amber-900 transition-colors"
                      onClick={() => setIsShopByOpen(false)}
                    >
                      Bracelets
                    </Link>
                    <Link
                      to="/necklaces"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-amber-900 transition-colors"
                      onClick={() => setIsShopByOpen(false)}
                    >
                      Necklaces
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                to="/products" 
                className="text-gray-700 font-medium hover:text-amber-900 transition-colors"
              >
                ALL PRODUCTS
              </Link>
              
              <Link 
                to="/track-order" 
                className="text-gray-700 font-medium hover:text-amber-900 transition-colors"
              >
                TRACK ORDER
              </Link>
              
              <Link 
                to="/our-story" 
                className="text-gray-700 font-medium hover:text-amber-900 transition-colors"
              >
                OUR STORY
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;