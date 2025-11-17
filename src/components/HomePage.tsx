import { ChevronLeft, ChevronRight, Clock, Star, Plus, Leaf } from 'lucide-react';
import { dishes as allDishes, Dish } from '../data/staticData';

interface HomePageProps {
  onNavigate: (page: string, dishId?: string) => void;
  onAddToCart: (dish: Dish) => void;
}

export default function HomePage({ onNavigate, onAddToCart }: HomePageProps) {
  const popularDishes = allDishes.filter(dish => dish.is_popular).slice(0, 4);
  const loading = false;

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full">
              <Leaf className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-gray-700">Welcome to</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Click&Eat Restaurant<br />
              and Enjoy <span className="text-orange-500">The Food</span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg max-w-lg">
              Discover delicious meals crafted with passion. From appetizers to desserts, every dish tells a story of flavor and quality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('menu')}
                className="px-8 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all font-medium hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Reserve a Table
              </button>
              <button className="px-8 py-3 border-2 border-orange-500 text-orange-500 rounded-full hover:bg-orange-50 transition-all font-medium">
                Online Order
              </button>
            </div>

            <div className="flex items-center gap-2 text-orange-500">
              <Clock className="w-5 h-5" />
              <span className="text-sm font-medium">Open: 11:00am - 11:00pm</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-8 -right-8 w-64 h-64 sm:w-96 sm:h-96 bg-orange-200 rounded-full opacity-30 blur-3xl"></div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 z-10">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg"
                    alt="Salmon Salad"
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-sm">Salmon Salad</h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-orange-400 text-orange-400" />
                      <span className="text-xs text-gray-600">5.0</span>
                    </div>
                    <p className="text-orange-500 font-bold text-sm">$12.50</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-32 -left-6 bg-orange-500 text-white rounded-2xl shadow-lg p-4 z-10">
                <p className="font-bold text-2xl">Best Food 🎯</p>
              </div>

              <div className="relative bg-white rounded-full p-4 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg"
                  alt="Hero Dish"
                  className="w-full h-auto rounded-full object-cover"
                />
              </div>

              <div className="absolute inset-0 border-4 border-dashed border-orange-300 rounded-full animate-spin-slow"></div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Our Popular <span className="text-orange-500">Dishes</span>
            </h2>
            <div className="flex gap-2">
              <button className="p-2 border border-gray-300 rounded-full hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="p-2 border border-gray-300 rounded-full hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularDishes.map((dish) => (
                <div
                  key={dish.id}
                  className="bg-orange-50 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                >
                  <div className="relative mb-4">
                    <div className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full p-1 shadow-lg z-10">
                      <span className="text-xs font-bold px-2">{dish.rating} ⭐</span>
                    </div>
                    <img
                      src={dish.image_url}
                      alt={dish.name}
                      className="w-full h-48 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                      onClick={() => onNavigate('detail', dish.id)}
                    />
                  </div>

                  <h3 className="font-bold text-lg mb-2 text-gray-900">{dish.name}</h3>
                  <p className="text-orange-500 font-bold text-xl mb-3">${dish.price.toFixed(2)}</p>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{dish.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        🔥 {dish.calories} Calories
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {dish.prep_time} min
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onAddToCart(dish)}
                    className="w-full mt-4 py-2.5 border-2 border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-all font-medium flex items-center justify-center gap-2 group-hover:shadow-lg"
                  >
                    <Plus className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-24 -mb-24"></div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Order Your Favorite Food?</h2>
            <p className="text-orange-100 mb-6">Browse our full menu and discover amazing dishes crafted with love</p>
            <button
              onClick={() => onNavigate('menu')}
              className="px-8 py-3 bg-white text-orange-500 rounded-full hover:bg-orange-50 transition-all font-medium hover:shadow-lg transform hover:-translate-y-0.5"
            >
              View Full Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
