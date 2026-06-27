import type { Metadata } from "next";
import ScientificCalculator from "@/components/calculators/ScientificCalculator";

export const metadata: Metadata = {
  title: "Calculatrice Scientifique en Ligne Gratuite",
  description: "Utilisez notre calculatrice scientifique gratuite pour effectuer des calculs complexes, de la trigonométrie, des logarithmes, et des exponentielles.",
  keywords: ["calculatrice scientifique", "calculatrice en ligne", "trigonométrie", "logarithmes", "exposants", "outils mathématiques"],
};

export default function ScientificCalculatorPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
          Calculatrice <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">Scientifique</span>
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Effectuez tous vos calculs avancés avec précision grâce à notre outil en ligne gratuit.
        </p>
      </div>

      {/* Interactive Calculator */}
      <div className="mb-16">
        <ScientificCalculator />
      </div>

      {/* Explanation Section */}
      <section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">Qu'est-ce qu'une Calculatrice Scientifique ?</h2>
        <p>
          Une <strong>calculatrice scientifique</strong> est un outil mathématique conçu pour résoudre des problèmes complexes impliquant la trigonométrie, les logarithmes, les racines, les exposants, et d'autres fonctions avancées, au-delà des simples additions ou multiplications.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3">À qui s'adresse cet outil ?</h3>
        <p>
          Notre calculatrice scientifique en ligne est particulièrement utile pour :
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Les Étudiants :</strong> Lycéens et universitaires pour leurs cours de mathématiques, physique, ou chimie.</li>
          <li><strong>Les Ingénieurs et Scientifiques :</strong> Pour des calculs rapides et précis de formules complexes ou de statistiques.</li>
          <li><strong>Les Professionnels :</strong> Architectes, comptables ou informaticiens ayant besoin d'effectuer des conversions (ex: degrés/radians) ou d'utiliser des constantes universelles comme Pi (π) et Euler (e).</li>
        </ul>
        <h3 className="text-xl font-semibold mt-6 mb-3">Fonctions principales intégrées</h3>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Trigonométrie :</strong> Sinus, cosinus, tangente, et leurs inverses, calculables en degrés ou radians.</li>
          <li><strong>Exposants et Racines :</strong> Carrés, cubes, puissances de "x" et racines carrées ou cubiques.</li>
          <li><strong>Logarithmes :</strong> Logarithmes décimaux (log10) et népériens (ln).</li>
          <li><strong>Probabilités :</strong> Combinatoires (nCr) et permutations (nPr).</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 md:p-8 border border-border/50">
        <h2 className="text-2xl font-bold mb-8 text-center">Foire Aux Questions (FAQ)</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Comment passer des degrés aux radians ?</h3>
            <p className="text-foreground/70 leading-relaxed">
              Utilisez les boutons "Deg" ou "Rad" situés en haut à gauche du clavier de la calculatrice. Par défaut, la calculatrice est réglée sur les degrés. Si vous calculez le sinus de 90 en mode "Deg", le résultat sera 1.
            </p>
          </div>
          <hr className="border-border/40" />
          <div>
            <h3 className="font-semibold text-lg mb-2">À quoi sert la touche "2nd" ?</h3>
            <p className="text-foreground/70 leading-relaxed">
              La touche "2nd" permet d'accéder aux fonctions inverses ou secondaires de certaines touches. Par exemple, si vous l'activez, le bouton "sin" se transformera en "asin" (arc sinus, ou sinus inverse).
            </p>
          </div>
          <hr className="border-border/40" />
          <div>
            <h3 className="font-semibold text-lg mb-2">Comment utiliser les fonctions nCr et nPr ?</h3>
            <p className="text-foreground/70 leading-relaxed">
              Cliquez sur la fonction de votre choix, par exemple "nCr(". Ensuite, entrez vos deux nombres séparés par une virgule. Par exemple, pour calculer "5 parmi 10", entrez : <code>nCr(10,5)</code>, puis appuyez sur "=" ou sur la parenthèse fermante.
            </p>
          </div>
          <hr className="border-border/40" />
          <div>
            <h3 className="font-semibold text-lg mb-2">Puis-je voir l'historique de mes calculs ?</h3>
            <p className="text-foreground/70 leading-relaxed">
              Oui, cliquez sur le bouton "Historique" situé en haut à droite de la calculatrice pour afficher vos derniers calculs. Vous pouvez cliquer sur un ancien calcul pour le réintégrer dans la barre de saisie.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
