import type { Metadata } from "next";
import ImcCalculator from "@/components/calculators/ImcCalculator";

export const metadata: Metadata = {
  title: "Calculatrice IMC | Calculez votre Indice de Masse Corporelle",
  description: "Utilisez notre calculatrice IMC gratuite pour évaluer votre corpulence (poids normal, surpoids, obésité) en fonction de votre taille et poids. Résultat immédiat.",
  keywords: ["calculatrice IMC", "calcul IMC", "indice de masse corporelle", "poids idéal", "surpoids", "obésité"],
};

export default function ImcCalculatorPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
          Calculatrice <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">IMC</span>
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Évaluez rapidement votre Indice de Masse Corporelle pour savoir si votre poids est adapté à votre taille.
        </p>
      </div>

      {/* Interactive Calculator */}
      <div className="mb-16">
        <ImcCalculator />
      </div>

      {/* Explanation Section */}
      <section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">Qu'est-ce que l'IMC ?</h2>
        <p>
          L'<strong>Indice de Masse Corporelle (IMC)</strong>, ou BMI en anglais (Body Mass Index), est une grandeur qui permet d'estimer la corpulence d'une personne. Inventé par Adolphe Quetelet, il est aujourd'hui validé par l'Organisation Mondiale de la Santé (OMS) comme l'indicateur standard pour évaluer les risques liés au surpoids chez l'adulte.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3">Comment est-il calculé ?</h3>
        <p>
          La formule mathématique est simple : le poids (en kilogrammes) divisé par le carré de la taille (en mètres). 
          <code>IMC = Poids / Taille²</code>. 
          Bien qu'utile, cette formule ne prend pas en compte la masse musculaire, la masse osseuse ou la répartition des graisses.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3">Interprétation des résultats (selon l'OMS)</h3>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Moins de 18,5 :</strong> Insuffisance pondérale (maigreur).</li>
          <li><strong>De 18,5 à 24,9 :</strong> Poids normal ou corpulence normale.</li>
          <li><strong>De 25 à 29,9 :</strong> Surpoids.</li>
          <li><strong>30 et plus :</strong> Obésité (modérée, sévère, ou massive selon le chiffre exact).</li>
        </ul>
        <p className="text-sm text-foreground/60 italic mt-4">
          * Attention : L'IMC n'est qu'un indicateur statistique. Pour les sportifs de haut niveau (très musclés), les femmes enceintes ou les personnes âgées, il peut être faussé. Demandez toujours l'avis d'un professionnel de santé (médecin, nutritionniste).
        </p>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 md:p-8 border border-border/50">
        <h2 className="text-2xl font-bold mb-8 text-center">Foire Aux Questions (FAQ)</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">L'IMC est-il valable pour les enfants et adolescents ?</h3>
            <p className="text-foreground/70 leading-relaxed">
              Non. La formule reste la même, mais l'interprétation du résultat se fait grâce à des courbes de corpulence spécifiques à l'âge et au sexe (disponibles dans le carnet de santé). Ce calculateur est conçu pour les adultes de 18 à 65 ans.
            </p>
          </div>
          <hr className="border-border/40" />
          <div>
            <h3 className="font-semibold text-lg mb-2">Puis-je avoir un IMC élevé sans être en mauvaise santé ?</h3>
            <p className="text-foreground/70 leading-relaxed">
              Oui, tout à fait. Les personnes très sportives avec une masse musculaire importante (comme les bodybuilders ou rugbymen) peuvent avoir un IMC supérieur à 25 ou 30 sans excès de graisse corporelle, car le muscle pèse plus lourd que la graisse.
            </p>
          </div>
          <hr className="border-border/40" />
          <div>
            <h3 className="font-semibold text-lg mb-2">Quelle est la différence entre surpoids et obésité ?</h3>
            <p className="text-foreground/70 leading-relaxed">
              Le surpoids (IMC de 25 à 29.9) est un excès de poids modéré. L'obésité (IMC supérieur à 30) est considérée comme une maladie chronique par l'OMS car elle entraîne des risques beaucoup plus importants pour la santé (diabète, maladies cardiovasculaires).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
