import { useEffect, useState } from 'react';
import { ArrowLeft, Heart, Share2, Star, Minus, Plus } from 'lucide-react';
import { dishes as allDishes, ingredients as allIngredients, Dish, Ingredient } from '../data/staticData';

interface DishDetailPageProps {
  dishId: string;
  onNavigate: (page: string) => void;
  onAddToCart: (dish: Dish, size?: string, ingredients?: string[]) => void;
}

export default function DishDetailPage({ dishId, onNavigate, onAddToCart }: DishDetailPageProps) {
  const [dish, setDish] = useState<Dish | null>(null);
  const ingredients = allIngredients;
  const [selectedSize, setSelectedSize] = useState<string>('medium');
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  const sizes = [
    { name: 'small', value: '6"', price: 8.99 },
    { name: 'medium', value: '8"', price: 10.99 },
    { name: 'large', value: '10"', price: 12.99 }
  ];

  useEffect(() => {
    const foundDish = allDishes.find(d => d.id === dishId);
    if (foundDish) {
      setDish(foundDish);
    } else {
      onNavigate('home');
    }
    setLoading(false);
  }, [dishId, onNavigate]);

  const toggleIngredient = (ingredientId: string) => {
    setSelectedIngredients(prev =>
      prev.includes(ingredientId)
        ? prev.filter(id => id !== ingredientId)
        : [...prev, ingredientId]
    );
  };

  const getCurrentPrice = () => {
    const sizePrice = sizes.find(s => s.name === selectedSize)?.price || 10.99;
    const ingredientsPrice = selectedIngredients.reduce((sum, id) => {
      const ingredient = ingredients.find(i => i.id === id);
      return sum + (ingredient?.price || 0);
    }, 0);
    return (sizePrice + ingredientsPrice) * quantity;
  };

  const handleAddToCart = () => {
    if (dish) {
      onAddToCart(dish, selectedSize, selectedIngredients);
      onNavigate('cart');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20">
        <div className="inline-block w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!dish) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative bg-gradient-to-br from-orange-50 to-orange-100 p-8 flex items-center justify-center">
              <button
                onClick={() => onNavigate('menu')}
                className="absolute top-6 left-6 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all"
              >
                <ArrowLeft className="w-5 h-5 text-gray-700" />
              </button>

              <div className="absolute top-6 right-6 flex gap-2">
                <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all">
                  <Heart className="w-5 h-5 text-gray-700" />
                </button>
                <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all">
                  <Share2 className="w-5 h-5 text-gray-700" />
                </button>
              </div>

              <img
                src={dish.image_url}
                alt={dish.name}
                className="w-full max-w-md h-auto object-contain drop-shadow-2xl"
              />
            </div>

            <div className="p-8 lg:p-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{dish.name}</h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-orange-400 text-orange-400" />
                  <span className="font-semibold text-gray-900">{dish.rating}</span>
                  <span className="text-gray-500">({dish.review_count.toLocaleString()})</span>
                </div>
                <span className="text-gray-300">•</span>
                <span className="text-gray-600">Pizza Italiano</span>
              </div>

              <p className="text-gray-600 mb-8">{dish.description}</p>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Size</h3>
                <div className="grid grid-cols-3 gap-4">
                  {sizes.map((size) => (
                    <button
                      key={size.name}
                      onClick={() => setSelectedSize(size.name)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        selectedSize === size.name
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-sm text-gray-600 mb-1">{size.value} - {size.name}</div>
                        <div className="font-bold text-gray-900">{size.price.toFixed(2)}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Add Ingredients</h3>
                <div className="space-y-3">
                  {ingredients.map((ingredient) => (
                    <label
                      key={ingredient.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={ingredient.image_url}
                          alt={ingredient.name}
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                        <div>
                          <div className="font-medium text-gray-900">{ingredient.name}</div>
                          <div className="text-sm text-gray-500">{ingredient.quantity} +${ingredient.price.toFixed(2)}</div>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={selectedIngredients.includes(ingredient.id)}
                        onChange={() => toggleIngredient(ingredient.id)}
                        className="w-5 h-5 rounded border-gray-300 text-green-500 focus:ring-green-500"
                      />
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-all"
                  >
                    <Minus className="w-4 h-4 text-gray-700" />
                  </button>
                  <span className="text-xl font-semibold text-gray-900 w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-all"
                  >
                    <Plus className="w-4 h-4 text-gray-700" />
                  </button>
                </div>

                <div className="text-right">
                  <div className="text-sm text-gray-500 mb-1">Total Price</div>
                  <div className="text-2xl font-bold text-gray-900">${getCurrentPrice().toFixed(2)}</div>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full py-4 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Add to Cart · ${getCurrentPrice().toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
