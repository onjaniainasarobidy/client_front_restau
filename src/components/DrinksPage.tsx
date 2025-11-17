import { useState } from 'react';
import { ChevronLeft, ChevronRight, Wine, Beer, Coffee, Droplet } from 'lucide-react';
import { dishes as allDishes, categories as allCategories, Dish, Category } from '../data/staticData';

interface DrinksPageProps {
  onAddToCart: (dish: Dish) => void;
}

export default function DrinksPage({ onAddToCart }: DrinksPageProps) {
  const drinks = allDishes.filter(dish => ['6', '7', '8', '9'].includes(dish.category_id));
  const categories = allCategories.filter(cat => cat.type === 'drink');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const loading = false;
  const [currentIndex, setCurrentIndex] = useState(0);

  const getCategoryIcon = (name: string) => {
    const iconMap: Record<string, JSX.Element> = {
      'Wine': <Wine className="w-8 h-8" />,
      'Beer': <Beer className="w-8 h-8" />,
      'Cocktails': <Droplet className="w-8 h-8" />,
      'Soft Drinks': <Coffee className="w-8 h-8" />
    };
    return iconMap[name] || <Droplet className="w-8 h-8" />;
  };

  const visibleDrinks = drinks.slice(currentIndex, currentIndex + 2);

  const handlePrevious = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(Math.min(drinks.length - 2, currentIndex + 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent flex-1 max-w-xs"></div>
            <h1 className="text-4xl sm:text-5xl font-bold text-orange-400">MENU</h1>
            <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent flex-1 max-w-xs"></div>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex flex-col items-center gap-2 p-4 rounded-2xl transition-all ${
                  selectedCategory === category.id
                    ? 'bg-orange-500/20 text-orange-400'
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800'
                }`}
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <div className="text-gray-900">{getCategoryIcon(category.name)}</div>
                </div>
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            <div className="relative mb-16">
              <div className="flex items-center justify-center gap-8 min-h-[600px]">
                <button
                  onClick={handlePrevious}
                  disabled={currentIndex === 0}
                  className="absolute left-0 sm:left-8 p-3 bg-white rounded-full hover:bg-orange-500 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed z-10"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-900" />
                </button>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto px-12 sm:px-20">
                  {visibleDrinks.map((drink, index) => (
                    <div key={drink.id} className="relative">
                      <div className={`text-${index === 0 ? 'left' : 'right'} mb-6`}>
                        <h2 className="text-2xl sm:text-3xl font-bold text-orange-400 mb-2">
                          {drink.name}
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                          {drink.description}
                        </p>
                        <div className="mt-4">
                          <span className="text-2xl font-bold text-orange-400">
                            {drink.price.toFixed(2)} <span className="text-lg">BYN</span>
                          </span>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-2xl"></div>
                        <div className="relative bg-white rounded-full p-8 shadow-2xl aspect-square flex items-center justify-center">
                          <img
                            src={drink.image_url}
                            alt={drink.name}
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                      </div>

                      <button
                        onClick={() => onAddToCart(drink)}
                        className="mt-6 w-full py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all font-medium"
                      >
                        Add to Order
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  disabled={currentIndex >= drinks.length - 2}
                  className="absolute right-0 sm:right-8 p-3 bg-white rounded-full hover:bg-orange-500 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed z-10"
                >
                  <ChevronRight className="w-6 h-6 text-gray-900" />
                </button>
              </div>

              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: Math.max(1, drinks.length - 1) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentIndex === index ? 'bg-orange-500 w-8' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="border-t border-gray-800 pt-12">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent flex-1 max-w-xs"></div>
                <h2 className="text-3xl sm:text-4xl font-bold text-orange-400">BAR</h2>
                <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent flex-1 max-w-xs"></div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 mb-12">
                {['Wine', 'Beer', 'Cocktails', 'Soft Drinks', 'Coffee', 'Tea'].map((item) => (
                  <button
                    key={item}
                    className="flex flex-col items-center gap-3 p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800 transition-all group"
                  >
                    <img
                      src={`https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg`}
                      alt={item}
                      className="w-full h-24 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <span className="text-sm font-medium text-gray-300 group-hover:text-orange-400 transition-colors">
                      {item}
                    </span>
                  </button>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div className="relative">
                  <div className="text-left mb-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">MOJITO</h3>
                    <p className="text-gray-400 text-sm">
                      Rum, sprite, mint, lime slices, ice
                    </p>
                    <div className="mt-4">
                      <span className="text-2xl font-bold text-green-400">6.00 BYN</span>
                    </div>
                  </div>
                  <img
                    src="https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg"
                    alt="Mojito"
                    className="w-full h-96 object-contain"
                  />
                </div>

                <div className="relative">
                  <div className="text-right mb-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-orange-400 mb-2">LONG ISLAND ICE TEA</h3>
                    <p className="text-gray-400 text-sm">
                      Rum, tequila, gin, vodka, triple sec, lemon juice, coca-cola, ice
                    </p>
                    <div className="mt-4">
                      <span className="text-2xl font-bold text-orange-400">8.00 BYN</span>
                    </div>
                  </div>
                  <img
                    src="https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg"
                    alt="Long Island"
                    className="w-full h-96 object-contain"
                  />
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-12">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      num === 2
                        ? 'border-orange-500 bg-orange-500 text-white'
                        : 'border-gray-600 text-gray-400 hover:border-orange-500'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
