import { useState, useRef, useEffect } from 'react';
import { Search, Star,AlertCircle,  Shield, Flame, Clock, ChevronLeft, ChevronRight, Utensils, Coffee, Pizza, Salad, Sparkles, ChefHat, Heart } from 'lucide-react';
import { dishes as allDishes, categories as allCategories, Dish, Category } from '../data/staticData';
  

interface MenuPageProps {
  onNavigate: (page: string, dishId?: string) => void;
  onAddToCart: (dish: Dish) => void;
}

// Icônes premium pour les catégories
const categoryIcons = {
  'all': <Sparkles className="w-7 h-7" />,
  'pizza': <Pizza className="w-7 h-7" />,
  'salad': <Salad className="w-7 h-7" />,
  'coffee': <Coffee className="w-7 h-7" />,
};

export default function MenuPage({ onNavigate, onAddToCart }: MenuPageProps) {
  const dishes = allDishes;
  const categories = allCategories.filter(cat => cat.type === 'food');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const loading = false;
  const carouselRef = useRef<HTMLDivElement>(null);

  // Mapping des icônes d'allergènes
const allergenIcons: { [key: string]: string } = {
  'gluten': '🌾',
  'lactose': '🥛',
  'nuts': '🥜',
  'fish': '🐟',
  'eggs': '🥚',
  'soja': '🫘',
  'shellfish': '🦐',
  'celery': '🥬',
  'mustard': '🟡',
  'sesame': '⚫',
};

// Noms complets des allergènes
const allergenNames: { [key: string]: string } = {
  'gluten': 'Gluten',
  'lactose': 'Lactose',
  'nuts': 'Fruits à coque',
  'fish': 'Poisson',
  'eggs': 'Œufs',
  'soja': 'Soja',
  'shellfish': 'Crustacés',
  'celery': 'Céleri',
  'mustard': 'Moutarde',
  'sesame': 'Sésame',
};
  // Catégories premium pour le carousel
  const carouselCategories = [
    { 
      id: 'all', 
      name: 'Notre Excellence', 
      description: 'La crème de la crème de notre carte',
      tagline: 'Sélection du Chef',
      bgGradient: 'bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50',
      textColor: 'text-gray-900',
      accentColor: 'from-amber-500 to-orange-500',
      dishCount: dishes.length
    },
    ...categories.map(cat => {
      const categoryDishes = dishes.filter(d => d.category_id === cat.id);
      return {
        id: cat.id,
        name: cat.name,
        description: `L'art de la perfection en ${cat.name.toLowerCase()}`,
        tagline: 'Signature',
        bgGradient: 'bg-gradient-to-br from-white via-amber-50 to-orange-50',
        textColor: 'text-gray-900',
        accentColor: 'from-orange-500 to-red-500',
        dishCount: categoryDishes.length
      }
    })
  ];

  const filteredDishes = dishes.filter(dish => {
    const matchesSearch = dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dish.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || dish.category_id === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Animation fluide du carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev + 1) % carouselCategories.length);
        setTimeout(() => setIsAnimating(false), 1000);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [carouselCategories.length, isAnimating]);

  const navigateSlide = (direction: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);
    if (direction === 'next') {
      setCurrentSlide((prev) => (prev + 1) % carouselCategories.length);
    } else {
      setCurrentSlide((prev) => (prev - 1 + carouselCategories.length) % carouselCategories.length);
    }
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setSelectedCategory(carouselCategories[index].id);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        
        {/* En-tête Premium */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-lg rounded-full px-6 py-3 shadow-lg border border-amber-200 mb-6">
            <ChefHat className="w-5 h-5 text-amber-600" />
            <span className="text-sm font-semibold text-amber-700">Menu Signature</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Une <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Expérience</span> Culinaire
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez l'art de la gastronomie à travers nos créations signature, 
            où chaque plat raconte une histoire de passion et d'authenticité
          </p>
        </div>

        {/* Carousel Premium */}
        <div className="mb-20 relative">
          <div className="relative h-[500px] rounded-4xl overflow-hidden shadow-2xl border border-white/20">
            
            {/* Navigation Élégante */}
            <button 
              onClick={() => navigateSlide('prev')}
              className="absolute left-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-gray-800 rounded-2xl p-4 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-3xl border border-amber-200 group"
              disabled={isAnimating}
            >
              <ChevronLeft className="w-6 h-6 group-hover:text-amber-600 transition-colors" />
            </button>
            <button 
              onClick={() => navigateSlide('next')}
              className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-gray-800 rounded-2xl p-4 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-3xl border border-amber-200 group"
              disabled={isAnimating}
            >
              <ChevronRight className="w-6 h-6 group-hover:text-amber-600 transition-colors" />
            </button>

            {/* Slides */}
            <div ref={carouselRef} className="relative h-full">
              {carouselCategories.map((category, index) => {
                const isActive = index === currentSlide;
                const categoryDishes = dishes.filter(dish => 
                  category.id === 'all' || dish.category_id === category.id
                ).slice(0, 6);
                
                return (
                  <div
                    key={category.id}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      isActive
                        ? 'opacity-100 scale-100 z-10'
                        : 'opacity-0 scale-105 z-0'
                    }`}
                  >
                    <div className={`h-full ${category.bgGradient} relative overflow-hidden`}>
                      
                      {/* Éléments de fond décoratifs */}
                      <div className="absolute inset-0">
                        <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-r from-amber-200 to-orange-200 rounded-full blur-3xl opacity-40"></div>
                        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-r from-rose-200 to-amber-200 rounded-full blur-3xl opacity-30"></div>
                      </div>

                      <div className="relative h-full flex items-center">
                        <div className="container mx-auto px-16">
                          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
                            
                            {/* Section Texte */}
                            <div className={`space-y-8 ${category.textColor}`}>
                              <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.accentColor} text-white shadow-2xl`}>
                                    {categoryIcons[category.id as keyof typeof categoryIcons] || <Sparkles className="w-7 h-7" />}
                                  </div>
                                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg">
                                    <span className="text-sm font-semibold text-amber-700">{category.tagline}</span>
                                  </div>
                                </div>
                                
                                <h2 className="text-5xl font-bold leading-tight">
                                  {category.name}
                                  <div className={`w-24 h-1 bg-gradient-to-r ${category.accentColor} rounded-full mt-4`}></div>
                                </h2>
                                
                                <p className="text-xl text-gray-600 leading-relaxed">
                                  {category.description}
                                </p>
                              </div>
                              
                              {/* Statistiques */}
                              <div className="flex items-center gap-6">
                                <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
                                  <div className="p-2 bg-amber-100 rounded-xl">
                                    <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                                  </div>
                                  <div>
                                    <p className="text-2xl font-bold text-gray-900">4.9</p>
                                    <p className="text-xs text-gray-500">Note moyenne</p>
                                  </div>
                                </div>
                                
                                <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
                                  <div className="p-2 bg-green-100 rounded-xl">
                                    <Utensils className="w-5 h-5 text-green-600" />
                                  </div>
                                  <div>
                                    <p className="text-2xl font-bold text-gray-900">{category.dishCount}</p>
                                    <p className="text-xs text-gray-500">Plats uniques</p>
                                  </div>
                                </div>
                              </div>

                              {/* CTA */}
                              <button
                                onClick={() => goToSlide(index)}
                                className={`group px-8 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-2xl bg-gradient-to-r ${category.accentColor} text-white shadow-lg flex items-center gap-3`}
                              >
                                <span>Explorer la Collection</span>
                                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                              </button>
                            </div>

                            {/* Gallery d'Images Premium */}
                            <div className="relative">
                              <div className="grid grid-cols-3 gap-4 relative">
                                
                                {/* Ligne du haut */}
                                <div className="col-span-2 flex gap-4 justify-end">
                                  {categoryDishes.slice(0, 2).map((dish, dishIndex) => (
                                    <div
                                      key={dish.id}
                                      className="relative group transform transition-all duration-700 hover:scale-105 hover:z-20"
                                      style={{
                                        animationDelay: `${dishIndex * 200}ms`,
                                        transform: `rotate(${dishIndex === 0 ? '-3deg' : '2deg'})`
                                      }}
                                    >
                                      <div className="relative">
                                        <img
                                          src={dish.image_url}
                                          alt={dish.name}
                                          className="w-48 h-36 object-cover rounded-2xl shadow-2xl border-4 border-white/80 group-hover:border-amber-200 transition-all duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                        <div className="absolute bottom-3 left-3 right-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                          <p className="text-white font-semibold text-sm truncate drop-shadow-lg">{dish.name}</p>
                                          <p className="text-amber-300 font-bold text-sm">${dish.price.toFixed(2)}</p>
                                        </div>
                                        <div className="absolute top-3 right-3 bg-white/95 rounded-full p-2 shadow-lg transform scale-0 group-hover:scale-100 transition-all duration-500">
                                          <Heart className="w-4 h-4 text-rose-500" />
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>

                                {/* Ligne du milieu */}
                                <div className="col-span-3 flex gap-4 justify-center -mt-4">
                                  {categoryDishes.slice(2, 4).map((dish, dishIndex) => (
                                    <div
                                      key={dish.id}
                                      className="relative group transform transition-all duration-700 hover:scale-110 hover:z-30"
                                      style={{
                                        animationDelay: `${(dishIndex + 2) * 200}ms`,
                                        transform: `rotate(${dishIndex === 0 ? '1deg' : '-1deg'})`
                                      }}
                                    >
                                      <div className="relative">
                                        <img
                                          src={dish.image_url}
                                          alt={dish.name}
                                          className="w-56 h-40 object-cover rounded-2xl shadow-2xl border-4 border-white/80 group-hover:border-amber-300 transition-all duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full px-3 py-1 text-xs font-bold shadow-lg">
                                          Populaire
                                        </div>
                                        <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                          <p className="text-white font-bold text-sm truncate drop-shadow-lg">{dish.name}</p>
                                          <p className="text-amber-300 font-bold">${dish.price.toFixed(2)}</p>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>

                                {/* Ligne du bas */}
                                <div className="col-span-2 flex gap-4 justify-start -mt-4">
                                  {categoryDishes.slice(4, 6).map((dish, dishIndex) => (
                                    <div
                                      key={dish.id}
                                      className="relative group transform transition-all duration-700 hover:scale-105 hover:z-20"
                                      style={{
                                        animationDelay: `${(dishIndex + 4) * 200}ms`,
                                        transform: `rotate(${dishIndex === 0 ? '2deg' : '-3deg'})`
                                      }}
                                    >
                                      <div className="relative">
                                        <img
                                          src={dish.image_url}
                                          alt={dish.name}
                                          className="w-48 h-36 object-cover rounded-2xl shadow-2xl border-4 border-white/80 group-hover:border-amber-200 transition-all duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                        <div className="absolute bottom-3 left-3 right-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                          <p className="text-white font-semibold text-sm truncate drop-shadow-lg">{dish.name}</p>
                                          <p className="text-amber-300 font-bold text-sm">${dish.price.toFixed(2)}</p>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>

                              </div>
                              
                              {/* Effets de lumière */}
                              <div className="absolute -top-20 -right-20 w-60 h-60 bg-amber-300/20 rounded-full blur-3xl"></div>
                              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Indicateurs de Progression Premium */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
              {carouselCategories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-500 backdrop-blur-sm border-2 ${
                    index === currentSlide
                      ? 'bg-white border-white scale-125 shadow-glow'
                      : 'bg-white/30 border-white/50 hover:bg-white/60 hover:scale-110'
                  }`}
                />
              ))}
            </div>

            {/* Compteur Élégant */}
            <div className="absolute top-8 right-8 z-30 bg-white/90 backdrop-blur-lg rounded-2xl px-4 py-3 shadow-2xl border border-amber-200">
              <span className="text-sm font-semibold text-gray-700">
                <span className="text-amber-600">{currentSlide + 1}</span>
                <span className="text-gray-400"> / {carouselCategories.length}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Barre de Recherche Premium */}
        <div className="mb-16">
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur-lg opacity-20"></div>
            <div className="relative">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-amber-600 w-6 h-6" />
              <input
                type="text"
                placeholder="Rechercher une œuvre culinaire..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-16 pr-6 py-5 bg-white/90 backdrop-blur-lg rounded-2xl focus:outline-none focus:ring-4 focus:ring-amber-500/30 border border-amber-200 text-lg shadow-2xl placeholder-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Filtres Rapides - Version Luxe */}
        <div className="mb-20">
          <div className="flex flex-wrap justify-center gap-4">
            {carouselCategories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setCurrentSlide(index);
                }}
                className={`group px-8 py-4 rounded-2xl font-medium transition-all duration-500 flex items-center gap-4 border-2 backdrop-blur-lg shadow-lg ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.accentColor} text-white border-transparent shadow-2xl transform scale-105`
                    : 'bg-white/80 text-gray-700 border-amber-200 hover:border-amber-400 hover:shadow-xl hover:scale-105'
                }`}
              >
                <div className={`p-3 rounded-xl transition-all ${
                  selectedCategory === category.id
                    ? 'bg-white/20'
                    : 'bg-amber-100 group-hover:bg-amber-200'
                }`}>
                  {categoryIcons[category.id as keyof typeof categoryIcons] || <Sparkles className="w-5 h-5" />}
                </div>
                <span className="font-semibold text-lg">{category.name}</span>
                <span className={`text-sm px-2 py-1 rounded-full ${
                  selectedCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-amber-100 text-amber-700'
                }`}>
                  {category.dishCount}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Reste du code inchangé */}
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600">Chargement des plats...</p>
          </div>
        ) : (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
  {filteredDishes.map((dish) => (
    <div
      key={dish.id}
      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group"
    >
      <div className="relative">
        <img
          src={dish.image_url}
          alt={dish.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          onClick={() => onNavigate('detail', dish.id)}
        />
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
          <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
          <span className="text-sm font-semibold">{dish.rating}</span>
        </div>
        
        {/* Badge d'allergènes */}
        {dish.allergens && dish.allergens.length > 0 && (
          <div className="absolute top-4 left-4">
            <div className="relative group/allergen">
              <div className="bg-amber-500 text-white rounded-full p-2 shadow-lg hover:bg-amber-600 transition-colors">
                <Shield className="w-4 h-4" />
              </div>
              
              {/* Tooltip des allergènes */}
              <div className="absolute left-0 top-full mt-2 hidden group-hover/allergen:block z-10">
                <div className="bg-white rounded-2xl p-4 shadow-2xl border border-amber-200 min-w-48">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle className="w-4 h-4 text-amber-600" />
                    <span className="font-semibold text-gray-900 text-sm">Allergènes</span>
                  </div>
                  <div className="space-y-2">
                    {dish.allergens.map((allergen, index) => (
                      <div key={index} className="flex items-center gap-3 text-sm">
                        <span className="text-gray-700">{allergenNames[allergen] || allergen}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="font-bold text-xl text-gray-900 mb-3 line-clamp-1">{dish.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{dish.description}</p>

        <div className="flex items-center justify-between mb-5 text-sm text-gray-500">
          {/* Allergènes visibles */}
          <div className="flex-1">
            {dish.allergens && dish.allergens.length > 0 ? (
              <div className="space-y-2">
                <div className="flex items-center gap-1 text-amber-600 font-medium">
                  <Shield className="w-3 h-3" />
                  <span className="text-xs">Contient:</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {dish.allergens.slice(0, 2).map((allergen, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full font-medium"
                    >
                      {allergenNames[allergen] || allergen}
                    </span>
                  ))}
                  {dish.allergens.length > 2 && (
                    <span 
                      className="text-xs text-amber-600 bg-amber-50 rounded-full px-2 py-1 border border-amber-200"
                      title={dish.allergens.slice(2).map(a => allergenNames[a] || a).join(', ')}
                    >
                      +{dish.allergens.length - 2}
                    </span>
                  )}
                </div>
              </div>
            ) : (
              <span className="flex items-center gap-2 text-green-600 font-medium text-xs">
                <Shield className="w-3 h-3" />
                Sans allergènes
              </span>
            )}
          </div>
          
          <span className="flex items-center gap-2 shrink-0">
            <Clock className="w-4 h-4 text-orange-500" />
            {dish.prep_time} min
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-orange-500">${dish.price.toFixed(2)}</span>
          <button
            onClick={() => onAddToCart(dish)}
            className="px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-all font-semibold text-sm hover:shadow-lg transform hover:scale-105"
          >
            Commander
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
        )}

        {!loading && filteredDishes.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🍽️</div>
            <p className="text-gray-500 text-xl">Aucun plat ne correspond à votre recherche</p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setCurrentSlide(0);
              }}
              className="mt-4 px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-all"
            >
              Voir tous les plats
            </button>
          </div>
        )}
      </div>
    </div>
  );
}