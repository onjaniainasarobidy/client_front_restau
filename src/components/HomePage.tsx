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
    <div className="min-h-screen bg-white">
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
      <StaggerContainer className="mb-12 mt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Header de la section */}


        <FadeUpItem>
          <div className="flex items-center justify-between mb-4">
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

          {/* Texte d'introduction */}
          <p className="text-gray-600 max-w-3xl mb-8">
            Découvrez une sélection de nos plats les plus appréciés, préparés avec soin et des ingrédients frais.
            Que vous soyez amateur de saveurs authentiques ou de nouvelles découvertes culinaires, ces incontournables
            vont sûrement vous séduire.
          </p>
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
                        <div
                          className="bg-orange-50 rounded-3xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                        >
                          <div className="relative mb-4">
                            <div className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full p-1 shadow-lg z-10">
                              <span className="text-xs font-bold px-2">{dish.rating} ⭐</span>
                            </div>

                            <img
                              src={dish.image_url}
                              alt={dish.name}
                              className="w-full h-48 object-cover  rounded-2xl group-hover:scale-105 transition-transform duration-300"
                              onClick={() => onNavigate('detail', dish.id)}
                            />
                          </div>

                          <h3 className="font-bold text-lg mb-2 text-gray-900">{dish.name}</h3>
                          <p className="text-orange-500 font-bold text-xl mb-3">
                            ${dish.price.toFixed(2)}
                          </p>

                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                            {dish.description}
                          </p>

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
                      </FadeUpItem>
                    ))}
                  </div>

        )}
      </StaggerContainer>


      {/* ABOUT US SECTION */}
      <StaggerContainer className="my-24 mt-48 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left - Image */}
          <FadeUpItem>
            <div className="relative">
              {/* Background shape */}
              <div className="absolute -top-8 -left-8 w-72 h-72 bg-orange-400 rounded-[3rem] -z-10"></div>
              
              {/* Main image container */}
              <div className="relative bg-white rounded-[3rem] p-4 shadow-xl">
                <img
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
                  alt="Delicious food"
                  className="w-full h-auto rounded-[2.5rem] object-cover"
                />
                
                {/* Bottle image overlapping */}
                <div className="absolute -bottom-8 -right-8 w-32 h-48">
                  <img
                    src="https://images.pexels.com/photos/3590401/pexels-photo-3590401.jpeg"
                    alt="Sauce bottle"
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </FadeUpItem>

          {/* Right - Content */}
          <StaggerContainer className="space-y-6">
            <FadeUpItem>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Qui <span className="text-orange-500">sommes-nous ?</span>
              </h2>
            </FadeUpItem>

            <FadeUpItem>
              <p className="text-gray-600 leading-relaxed">
                Chez Click&Eat, nous sommes passionnés par la création d'expériences culinaires exceptionnelles. 
                Depuis notre ouverture, nous nous engageons à utiliser uniquement les ingrédients les plus frais 
                et de la plus haute qualité pour préparer des plats qui raviront vos papilles.
              </p>
            </FadeUpItem>

            <FadeUpItem>
              <p className="text-gray-600 leading-relaxed">
                Notre équipe de chefs talentueux combine tradition et innovation pour vous offrir une cuisine 
                authentique et savoureuse. Chaque plat est préparé avec soin et amour, garantissant une expérience 
                gastronomique mémorable à chaque visite.
              </p>
            </FadeUpItem>

            <FadeUpItem>
              <button
                onClick={() => onNavigate('menu')}
                className="px-8 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all font-medium hover:shadow-lg transform hover:-translate-y-0.5"
              >
                En savoir plus
              </button>
            </FadeUpItem>
          </StaggerContainer>
        </div>
      </StaggerContainer>


      {/* WHY CHOOSE OUR FOOD SECTION */}
      <StaggerContainer className="my-24 mt-48 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FadeUpItem>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir Notre <span className="text-orange-500">Cuisine</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez ce qui rend notre restaurant unique et pourquoi nos clients nous font confiance
            </p>
          </div>
        </FadeUpItem>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Quality Food */}
          <FadeUpItem delay={0.1}>
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🍽️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Qualité Supérieure</h3>
              <p className="text-gray-600 leading-relaxed">
                Nous utilisons uniquement des ingrédients frais et de première qualité pour garantir 
                le meilleur goût dans chaque bouchée.
              </p>
            </div>
          </FadeUpItem>

          {/* Card 2 - Super Taste */}
          <FadeUpItem delay={0.2}>
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">👨‍🍳</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Saveurs Exceptionnelles</h3>
              <p className="text-gray-600 leading-relaxed">
                Nos chefs expérimentés créent des saveurs uniques et délicieuses qui satisferont 
                même les palais les plus exigeants.
              </p>
            </div>
          </FadeUpItem>

          {/* Card 3 - Fast Delivery */}
          <FadeUpItem delay={0.3}>
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Livraison Rapide</h3>
              <p className="text-gray-600 leading-relaxed">
                Profitez de nos plats chauds et frais livrés rapidement à votre porte, 
                où que vous soyez dans la ville.
              </p>
            </div>
          </FadeUpItem>
        </div>
      </StaggerContainer>


       {/* CUSTOMERS SAY SECTION */}
      <StaggerContainer className="my-24 mt-48 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FadeUpItem>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Avis de Nos <span className="text-orange-500">Clients</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez ce que nos clients satisfaits disent de leur expérience chez nous
            </p>
          </div>
        </FadeUpItem>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left - Testimonial Card */}
          <FadeUpItem>
            <div className="bg-white rounded-3xl p-8 shadow-xl relative">
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl">
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                "Une expérience culinaire exceptionnelle ! Les plats sont délicieux, le service est impeccable 
                et l'ambiance est chaleureuse. Je recommande vivement ce restaurant à tous les amateurs de bonne cuisine. 
                C'est devenu mon endroit préféré pour les repas en famille."
              </p>

              {/* Customer info */}
              <div className="flex items-center gap-4">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
                  alt="Customer"
                  className="w-16 h-16 rounded-full object-cover border-4 border-orange-100"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Marie Laurent</h4>
                  <p className="text-sm text-gray-500">Cliente régulière</p>
                </div>
              </div>

              {/* Navigation dots */}
              <div className="flex gap-2 mt-8 justify-center">
                <button className="w-3 h-3 bg-orange-500 rounded-full"></button>
                <button className="w-3 h-3 bg-gray-300 rounded-full hover:bg-orange-300 transition-colors"></button>
                <button className="w-3 h-3 bg-gray-300 rounded-full hover:bg-orange-300 transition-colors"></button>
              </div>
            </div>
          </FadeUpItem>

          {/* Right - Image with bottle */}
          <FadeUpItem>
            <div className="relative">
              {/* Background shape */}
              <div className="absolute -top-8 -right-8 w-72 h-72 bg-orange-400 rounded-[3rem] -z-10"></div>
              
              {/* Main image */}
              <div className="relative bg-white rounded-[3rem] p-4 shadow-xl">
                <img
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
                  alt="Featured dish"
                  className="w-full h-auto rounded-[2.5rem] object-cover"
                />
                
                {/* Bottle overlapping */}
                <div className="absolute -top-8 -right-8 w-32 h-48">
                  <img
                    src="https://images.pexels.com/photos/3590401/pexels-photo-3590401.jpeg"
                    alt="Sauce"
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </FadeUpItem>
        </div>
      </StaggerContainer>



      {/* CTA */}
      <StaggerContainer
        className="mt-48 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden max-w-7xl mx-auto"
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
