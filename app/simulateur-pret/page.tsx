import type { Metadata } from "next";
import PretCalculator from "@/components/calculators/PretCalculator";

export const metadata: Metadata = {
  title: "Simulateur de Prêt | Calculez vos mensualités immobilières",
  description: "Utilisez notre simulateur de prêt gratuit pour estimer vos mensualités, le coût total du crédit et le montant remboursé pour vos projets immobiliers ou personnels.",
  keywords: ["simulateur de prêt", "calcul crédit", "mensualité prêt immobilier", "simulateur crédit", "coût du crédit"],
};

export default function PretCalculatorPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
          Simulateur de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">Prêt</span>
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Estimez rapidement le coût de votre futur crédit, vos mensualités et les intérêts générés.
        </p>
      </div>

      {/* Interactive Calculator */}
      <div className="mb-16">
        <PretCalculator />
      </div>

      {/* Explanation Section */}
      <section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">Comment fonctionne un prêt amortissable ?</h2>
        <p>
          Lorsque vous souscrivez à un crédit (immobilier, auto ou personnel) auprès d'une banque, il s'agit presque toujours d'un <strong>prêt amortissable</strong>. Cela signifie que chaque mois, votre mensualité sert à rembourser une partie du capital emprunté, mais aussi à payer les intérêts dus sur le capital restant à rembourser.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3">La décomposition de votre mensualité</h3>
        <p>
          Au début de votre crédit, le capital restant dû est élevé, vous payez donc beaucoup d'intérêts. Votre mensualité est principalement composée d'intérêts et d'une petite part de capital. Vers la fin de votre prêt, c'est l'inverse : vous remboursez majoritairement du capital.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3">Le Coût du Crédit</h3>
        <p>
          Le "Coût total du crédit" correspond à l'ensemble des intérêts que vous allez payer à la banque pour avoir emprunté cet argent. Plus la durée de votre prêt est longue, plus vos mensualités baissent, mais plus le coût total du crédit augmente !
        </p>
        <p className="text-sm text-foreground/60 italic mt-4">
          * Note : Notre calculatrice vous donne une estimation précise basée sur la formule mathématique d'amortissement. Cependant, dans la réalité, une banque ajoutera le taux d'assurance emprunteur (TAEA) et d'éventuels frais de dossier qui feront légèrement augmenter votre mensualité réelle.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 md:p-8 border border-border/50">
        <h2 className="text-2xl font-bold mb-8 text-center">Foire Aux Questions (FAQ)</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Comment réduire le coût de mon crédit ?</h3>
            <p className="text-foreground/70 leading-relaxed">
              Pour réduire le coût des intérêts, la méthode la plus efficace est de réduire la durée du prêt. Vous paierez des mensualités plus élevées, mais l'argent sera emprunté moins longtemps. L'autre levier est bien sûr de négocier le meilleur taux d'intérêt avec votre banque.
            </p>
          </div>
          <hr className="border-border/40" />
          <div>
            <h3 className="font-semibold text-lg mb-2">Ce simulateur est-il pour un prêt immobilier ou à la consommation ?</h3>
            <p className="text-foreground/70 leading-relaxed">
              Il fonctionne parfaitement pour les deux ! La formule mathématique des intérêts composés reste strictement la même, que ce soit pour acheter une maison sur 25 ans ou une voiture sur 3 ans.
            </p>
          </div>
          <hr className="border-border/40" />
          <div>
            <h3 className="font-semibold text-lg mb-2">Qu'est-ce que la capacité d'emprunt ?</h3>
            <p className="text-foreground/70 leading-relaxed">
              En France, le taux d'endettement maximum autorisé est fixé à 35% de vos revenus nets. Si votre mensualité estimée dépasse un tiers de votre salaire net, la banque refusera généralement de vous accorder le crédit, même si le taux est attractif.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
