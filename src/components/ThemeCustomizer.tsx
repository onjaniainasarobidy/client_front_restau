import { useState } from 'react';
import { Palette, X, RotateCcw } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function ThemeCustomizer() {
  const { colors, updateColors, resetColors } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const colorInputs = [
    { key: 'primary' as const, label: 'Couleur Principale', description: 'Boutons, liens, accents' },
    { key: 'primaryHover' as const, label: 'Principale (Survol)', description: 'Effet hover principal' },
    { key: 'secondary' as const, label: 'Couleur Secondaire', description: 'Éléments secondaires' },
    { key: 'accent' as const, label: 'Couleur Accent', description: 'Badges, tags, accents' },
    { key: 'accentHover' as const, label: 'Accent (Survol)', description: 'Effet hover accent' },
    { key: 'success' as const, label: 'Couleur Succès', description: 'Boutons d\'action, validation' },
    { key: 'successHover' as const, label: 'Succès (Survol)', description: 'Effet hover succès' },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 bg-primary hover:bg-primary-hover text-white rounded-full shadow-lg hover:shadow-xl transition-all z-40"
        title="Personnaliser les couleurs"
      >
        <Palette className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-xl">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Personnaliser les Couleurs</h2>
                  <p className="text-sm text-gray-500">Adaptez le thème à vos préférences</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="space-y-6">
                {colorInputs.map(({ key, label, description }) => (
                  <div key={key} className="space-y-2">
                    <label className="flex items-center justify-between">
                      <div>
                        <span className="font-semibold text-gray-900 block">{label}</span>
                        <span className="text-sm text-gray-500">{description}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <input
                          type="color"
                          value={colors[key]}
                          onChange={(e) => updateColors({ [key]: e.target.value })}
                          className="w-16 h-10 rounded-lg border-2 border-gray-200 cursor-pointer"
                        />
                        <input
                          type="text"
                          value={colors[key]}
                          onChange={(e) => updateColors({ [key]: e.target.value })}
                          className="w-24 px-3 py-2 border border-gray-200 rounded-lg text-sm font-mono"
                          placeholder="#000000"
                        />
                      </div>
                    </label>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => {
                    resetColors();
                  }}
                  className="w-full px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-xl font-medium transition-all flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  Réinitialiser les couleurs par défaut
                </button>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">Aperçu rapide</h3>
                <div className="flex gap-3 flex-wrap">
                  <button className="px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-full font-medium transition-all">
                    Bouton Principal
                  </button>
                  <button className="px-6 py-3 bg-success hover:bg-success-hover text-white rounded-full font-medium transition-all">
                    Bouton Succès
                  </button>
                  <span className="px-4 py-2 bg-accent rounded-full text-white font-medium">
                    Badge Accent
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
