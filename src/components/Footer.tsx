import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-16 mt-16 relative overflow-hidden">
      
      <div className="absolute -top-16 -right-16 w-72 h-72 bg-orange-500 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-orange-500 opacity-10 rounded-full blur-2xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">

        <div>
          <h3 className="text-2xl font-bold mb-3 text-white">
            Click<span className="text-orange-500"> & </span>Eat
          </h3>
          <p className="text-gray-400 text-sm">
            Découvrez des plats délicieux préparés avec passion. Commandez en ligne ou réservez votre table.
          </p>
          <div className="w-16 h-1 bg-orange-500 rounded-full mt-4"></div>
        </div>

        {/* Liens utiles */}
        <div>
          <h4 className="font-semibold mb-3 text-white">Liens utiles</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#menu" className="hover:text-orange-500 transition-colors duration-300">Menu</a>
            </li>
            <li>
              <a href="#populaires" className="hover:text-orange-500 transition-colors duration-300">Plats populaires</a>
            </li>
            <li>
              <a href="#reservation" className="hover:text-orange-500 transition-colors duration-300">Réservation</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-orange-500 transition-colors duration-300">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact & Réseaux */}
        <div>
          <h4 className="font-semibold mb-3 text-white">Contact</h4>
          <p className="flex items-center gap-2 text-sm mb-2 hover:text-orange-500 transition-colors duration-300">
            <Phone className="w-4 h-4" /> +261 34 12 345 67
          </p>
          <p className="flex items-center gap-2 text-sm mb-4 hover:text-orange-500 transition-colors duration-300">
            <Mail className="w-4 h-4" /> contact@clickandeat.com
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-white hover:bg-orange-500 p-2 rounded-full transition-all duration-300">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white hover:bg-orange-500 p-2 rounded-full transition-all duration-300">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white hover:bg-orange-500 p-2 rounded-full transition-all duration-300">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm flex flex-col sm:flex-row justify-center items-center gap-4">
        <span>&copy; {new Date().getFullYear()} Click&Eat. Tous droits réservés.</span>
        <span className="text-orange-500 font-medium">Made with ❤️ en Madagascar</span>
      </div>
    </footer>
  );
}
