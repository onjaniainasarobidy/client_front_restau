import { Search, ShoppingCart, Heart, Menu, User } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  cartItemsCount?: number;
}

export default function Header({ onNavigate, currentPage, cartItemsCount = 0 }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl sm:text-2xl">C</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-gray-900">Click&Eat</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => onNavigate('home')}
              className={`text-sm font-medium transition-colors ${currentPage === 'home' ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'}`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('menu')}
              className={`text-sm font-medium transition-colors ${currentPage === 'menu' ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'}`}
            >
              Menu
            </button>
            <button
              onClick={() => onNavigate('drinks')}
              className={`text-sm font-medium transition-colors ${currentPage === 'drinks' ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'}`}
            >
              Drinks
            </button>
            <button className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">
              Reservation
            </button>
            <button className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">
              Contact
            </button>
            <button className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">
              About Us
            </button>
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-5 h-5 text-gray-700" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative" onClick={() => onNavigate('cart')}>
              <ShoppingCart className="w-5 h-5 text-gray-700" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                  {cartItemsCount}
                </span>
              )}
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:block">
              <Heart className="w-5 h-5 text-gray-700" />
            </button>
            <button className="hidden sm:block px-4 sm:px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors font-medium text-sm">
              Log In
            </button>
            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <button onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }} className="text-left text-sm font-medium text-gray-700 hover:text-orange-500">
                Home
              </button>
              <button onClick={() => { onNavigate('menu'); setMobileMenuOpen(false); }} className="text-left text-sm font-medium text-gray-700 hover:text-orange-500">
                Menu
              </button>
              <button onClick={() => { onNavigate('drinks'); setMobileMenuOpen(false); }} className="text-left text-sm font-medium text-gray-700 hover:text-orange-500">
                Drinks
              </button>
              <button className="text-left text-sm font-medium text-gray-700 hover:text-orange-500">
                Reservation
              </button>
              <button className="text-left text-sm font-medium text-gray-700 hover:text-orange-500">
                Contact
              </button>
              <button className="text-left text-sm font-medium text-gray-700 hover:text-orange-500">
                About Us
              </button>
              <button className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors font-medium text-sm text-center">
                Log In
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
