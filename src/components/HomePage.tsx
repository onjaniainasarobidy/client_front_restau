import { ChevronLeft, ChevronRight, Clock, Star, Plus, Leaf } from 'lucide-react';
import { dishes as allDishes, Dish } from '../data/staticData';
import { StaggerContainer } from '../annimations/StaggerContainer';
import { FadeUpItem } from '../annimations/fadeUpItem';
import { PopInRight } from '../annimations/popInRight';

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

        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE - TEXTS WITH ANIMATION */}
          <StaggerContainer className="space-y-6">

            <FadeUpItem>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full">
                <Leaf className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Bienvenue chez</span>
              </div>
            </FadeUpItem>

            <FadeUpItem>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Click&Eat Restaurant<br />
                et profiter de <span className="text-orange-500">Nos plats</span>
              </h1>
            </FadeUpItem>

            <FadeUpItem>
              <p className="text-gray-600 text-base sm:text-lg max-w-lg">
                Découvrez des plats délicieux préparés avec passion. Des entrées aux desserts,
                chaque plat raconte une histoire de saveurs et de qualité.
              </p>
            </FadeUpItem>

            <FadeUpItem>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('menu')}
                  className="px-8 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all font-medium hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Reserver une table
                </button>

                <button className="px-8 py-3 border-2 border-orange-500 text-orange-500 rounded-full hover:bg-orange-50 transition-all font-medium">
                  Commande en ligne
                </button>
              </div>
            </FadeUpItem>

            <FadeUpItem>
              <div className="flex items-center gap-2 text-orange-500">
                <Clock className="w-5 h-5" />
                <span className="text-sm font-medium">Ouvert : 11h00 - 23h00</span>
              </div>
            </FadeUpItem>

          </StaggerContainer>

          {/* RIGHT SIDE - IMAGE */}
        <PopInRight delay={0.2}>
          <div className="relative"> 
            {/* Glow Circle */}
            <div className="absolute -top-8 -right-8 w-64 h-64 sm:w-96 sm:h-96 bg-orange-200 rounded-full opacity-30 blur-3xl"></div>

            {/* Content container */}
            <div className="relative">

              {/* Small floating card */}
              <PopInRight delay={0.4}>
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
              </PopInRight>

              {/* Orange label */}
              <PopInRight delay={0.55}>
                <div className="absolute top-32 -left-6 bg-orange-500 text-white rounded-2xl shadow-lg p-4 z-10">
                  <p className="font-bold text-2xl">Meilleure cuisine 🎯</p>
                </div>
              </PopInRight>

              {/* Main dish image */}
              <PopInRight delay={0.7}>
                <div className="relative bg-white rounded-full p-4 shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg"
                    alt="Hero Dish"
                    className="w-full h-auto rounded-full object-cover"
                  />
                </div>
              </PopInRight>

              {/* Spinning ring */}
              <PopInRight delay={0.9}>
                <div className="absolute inset-0 border-4 border-dashed border-orange-300 rounded-full animate-spin-slow"></div>
              </PopInRight>

            </div>
          </div>
        </PopInRight>

      </div>
    </div>

      {/* POPULAR DISHES SECTION */}
      <StaggerContainer className="mb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Header de la section */}
        <FadeUpItem>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Nos Plats <span className="text-orange-500">Populaires</span>
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
        </FadeUpItem>

        {/* Loader */}
        {loading ? (
          <FadeUpItem>
            <div className="text-center py-12">
              <div className="inline-block w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          </FadeUpItem>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDishes.map((dish, index) => (
              <FadeUpItem key={dish.id} delay={index * 0.1}>
                <div className="bg-orange-100 rounded-3xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group relative">

                  {/* Badge qui dépasse */}
                  <div className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full p-1 shadow-lg z-10">
                    <span className="text-xs font-bold px-2">{dish.rating} ⭐</span>
                  </div>

                  {/* Image avec overflow-hidden pour le zoom */}
                  <div className="relative mb-4 overflow-hidden rounded-t-2xl">
                    <img
                      src={dish.image_url}
                      alt={dish.name}
                      className="w-full h-48 object-cover transition-transform duration-300 transform group-hover:scale-110"
                      onClick={() => onNavigate('detail', dish.id)}
                    />
                  </div>

                  <h3 className="font-bold text-lg mb-2 ml-3 mr-3 text-gray-900">{dish.name}</h3>
                  <p className="text-orange-500 font-bold ml-3 mr-3 text-xl mb-3">${dish.price.toFixed(2)}</p>
                  <p className="text-gray-600 text-sm mb-4 ml-3 mr-3 line-clamp-2">{dish.description}</p>

                  <div className="flex items-center justify-between ml-3 mr-3">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">🔥 {dish.calories} Calories</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {dish.prep_time} min
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onAddToCart(dish)}
                    className="w-full mt-4 py-2.5 border-2 border-orange-500 mb-4 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-all font-medium flex items-center justify-center gap-2 group-hover:shadow-lg"
                  >
                    <Plus className="w-4 h-4" />
                    Ajouter au panier
                  </button>
                </div>
              </FadeUpItem>
            ))}
          </div>

        )}
      </StaggerContainer>



      {/* CTA */}
      <StaggerContainer
        className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden max-w-7xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Glow circles */}
        <FadeUpItem>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
        </FadeUpItem>

        <FadeUpItem>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-24 -mb-24"></div>
        </FadeUpItem>

        {/* Content */}
        <FadeUpItem>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Prêt à commander vos plats préférés?
            </h2>
            <p className="text-orange-100 mb-6">
              Parcourez notre menu complet et découvrez des plats incroyables préparés avec amour.
            </p>
            <button
              onClick={() => onNavigate('menu')}
              className="px-8 py-3 bg-white text-orange-500 rounded-full hover:bg-orange-50 transition-all font-medium hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Voir le menu complet
            </button>
          </div>
        </FadeUpItem>
      </StaggerContainer>

    </div>
  );
}
