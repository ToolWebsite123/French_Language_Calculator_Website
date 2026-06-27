import type { Metadata } from "next";
import PercentageCalculator from "@/components/calculators/PercentageCalculator";

export const metadata: Metadata = {
  title: "Calculatrice de Pourcentage | Calcul rapide et gratuit",
  description: "Calculez facilement un pourcentage en ligne : trouvez X% de Y, découvrez quelle proportion X est de Y, ou calculez la variation en pourcentage entre deux valeurs.",
  keywords: ["calculatrice de pourcentage", "calcul pourcentage", "pourcentage en ligne", "variation pourcentage", "augmentation pourcentage"],
};

export default function PercentageCalculatorPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
          Calculatrice de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">Pourcentage</span>
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Calculez rapidement n&apos;importe quel pourcentage grâce à nos trois modes de calcul : pourcentage d&apos;une valeur, proportion, et variation.
        </p>
      </div>

      {/* Interactive Calculator */}
      <div className="mb-16">
        <PercentageCalculator />
      </div>

      {/* Explanation Section */}
      <section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">Comment calculer un pourcentage ?</h2>
        <p>
          Le <strong>pourcentage</strong> est un rapport exprimé sur une base de 100. C&apos;est un outil mathématique fondamental utilisé au quotidien : soldes, notes scolaires, statistiques, taux d&apos;intérêt, etc. Voici les trois formules principales proposées par notre calculatrice :
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3">1. Calculer X% d&apos;une valeur Y</h3>
        <p>
          La formule est simple : <code>Résultat = (X / 100) × Y</code>. Par exemple, 15% de 200 = (15 / 100) × 200 = <strong>30</strong>. C&apos;est le calcul le plus courant, utilisé par exemple pour calculer une remise, une TVA, ou un pourboire.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3">2. Trouver quel pourcentage X représente de Y</h3>
        <p>
          La formule est : <code>Pourcentage = (X / Y) × 100</code>. Par exemple, 30 est quel pourcentage de 200 ? (30 / 200) × 100 = <strong>15%</strong>. Utile pour calculer une proportion, un taux de réussite, ou une part de marché.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3">3. Calculer la variation en pourcentage</h3>
        <p>
          La formule de la variation est : <code>Variation = ((Nouvelle valeur - Ancienne valeur) / |Ancienne valeur|) × 100</code>. Un résultat positif indique une augmentation, un résultat négatif indique une diminution. Par exemple, passer de 100 à 130 représente une augmentation de <strong>+30%</strong>.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 md:p-8 border border-border/50">
        <h2 className="text-2xl font-bold mb-8 text-center">Foire Aux Questions (FAQ)</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Comment calculer 20% d&apos;un prix ?</h3>
            <p className="text-foreground/70 leading-relaxed">
              Utilisez le premier mode de notre calculatrice. Entrez 20 dans le champ &quot;Pourcentage&quot; et le prix dans le champ &quot;Valeur&quot;. Par exemple, 20% de 150 € = 30 €. Pour connaître le prix après réduction, soustrayez ce montant : 150 - 30 = 120 €.
            </p>
          </div>
          <hr className="border-border/40" />
          <div>
            <h3 className="font-semibold text-lg mb-2">Comment calculer une augmentation de salaire en pourcentage ?</h3>
            <p className="text-foreground/70 leading-relaxed">
              Utilisez le mode &quot;Variation en %&quot;. Entrez votre ancien salaire comme valeur initiale et votre nouveau salaire comme nouvelle valeur. La calculatrice vous indiquera automatiquement le pourcentage d&apos;augmentation (en vert) ou de diminution (en rouge).
            </p>
          </div>
          <hr className="border-border/40" />
          <div>
            <h3 className="font-semibold text-lg mb-2">Quelle est la différence entre pourcentage et point de pourcentage ?</h3>
            <p className="text-foreground/70 leading-relaxed">
              Un <strong>point de pourcentage</strong> est une unité de mesure arithmétique. Par exemple, passer de 10% à 15% représente une hausse de 5 points de pourcentage, mais une augmentation de 50% en termes relatifs ((15-10)/10 × 100). Notre outil calcule la variation relative, qui est la plus couramment utilisée.
            </p>
          </div>
          <hr className="border-border/40" />
          <div>
            <h3 className="font-semibold text-lg mb-2">Peut-on avoir une variation supérieure à 100% ?</h3>
            <p className="text-foreground/70 leading-relaxed">
              Oui, tout à fait. Si une valeur double (par exemple de 50 à 100), la variation est de +100%. Si elle triple (de 50 à 150), la variation est de +200%. Il n&apos;y a pas de limite supérieure. En revanche, une diminution ne peut théoriquement pas dépasser -100% (la valeur ne peut pas devenir négative dans la plupart des contextes).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
