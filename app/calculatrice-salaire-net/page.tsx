import type { Metadata } from "next";
import SalaryCalculator from "@/components/calculators/SalaryCalculator";

export const metadata: Metadata = {
  title: "Calculatrice Salaire Net | Brut en Net Gratuitement",
  description: "Convertissez facilement votre salaire brut en net. Calculatrice de salaire net gratuite prenant en compte le statut cadre et non-cadre en France.",
  keywords: ["calculatrice salaire net", "salaire brut en net", "calcul salaire net", "conversion brut net", "simulateur salaire net"],
};

export default function SalaryCalculatorPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
          Calculatrice de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">Salaire Net</span>
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Estimez rapidement votre salaire net à partir de votre salaire brut en fonction de votre statut (cadre ou non-cadre).
        </p>
      </div>

      {/* Interactive Calculator */}
      <div className="mb-16">
        <SalaryCalculator />
      </div>

      {/* Explanation Section */}
      <section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">Comprendre la différence entre Salaire Brut et Net</h2>
        <p>
          En France, lorsqu'un employeur vous propose un salaire, il s'agit presque toujours du <strong>salaire brut</strong>. Cependant, le montant que vous recevrez effectivement sur votre compte bancaire à la fin du mois est le <strong>salaire net</strong>.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3">Le Salaire Brut</h3>
        <p>
          Le salaire brut correspond à la rémunération globale prévue dans votre contrat de travail, avant toute déduction fiscale ou sociale. Il inclut votre salaire de base, vos éventuelles primes et le paiement de vos heures supplémentaires.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3">Le Salaire Net</h3>
        <p>
          Le salaire net est ce qu'il vous reste une fois que les cotisations salariales (sécurité sociale, retraite, chômage, etc.) ont été déduites de votre salaire brut. En moyenne, ces charges représentent :
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>~22%</strong> pour un employé <strong>non-cadre</strong>.</li>
          <li><strong>~25%</strong> pour un employé avec le statut <strong>cadre</strong> (en raison des cotisations retraite spécifiques).</li>
        </ul>
        <p className="text-sm text-foreground/60 italic">
          * Note : Notre calculatrice utilise ces taux moyens pour vous donner une estimation fiable. Le montant réel peut légèrement varier en fonction de votre convention collective et de votre entreprise. Depuis 2019, le Prélèvement à la Source (impôt sur le revenu) est également déduit du salaire net à payer, donnant le salaire net après impôts. Notre outil calcule ici le salaire net avant impôt sur le revenu.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 md:p-8 border border-border/50">
        <h2 className="text-2xl font-bold mb-8 text-center">Foire Aux Questions (FAQ)</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Comment passer du brut au net ?</h3>
            <p className="text-foreground/70 leading-relaxed">
              Pour passer du salaire brut au net, il faut déduire le pourcentage de charges salariales. Vous pouvez utiliser notre calculatrice salaire net pour faire cette conversion instantanément, ou retirer environ 22% pour un non-cadre.
            </p>
          </div>
          <hr className="border-border/40" />
          <div>
            <h3 className="font-semibold text-lg mb-2">Le statut cadre change-t-il mon salaire net ?</h3>
            <p className="text-foreground/70 leading-relaxed">
              Oui, les cadres paient généralement plus de cotisations (notamment pour l'AGIRC, la retraite complémentaire des cadres). Si vous passez cadre avec le même salaire brut, votre salaire net baissera légèrement (passant d'environ 22% de charges à environ 25%).
            </p>
          </div>
          <hr className="border-border/40" />
          <div>
            <h3 className="font-semibold text-lg mb-2">Ce calcul inclut-il le prélèvement à la source ?</h3>
            <p className="text-foreground/70 leading-relaxed">
              Non. Ce simulateur calcule votre salaire net "avant impôt sur le revenu". L'impôt dépend de votre taux personnalisé ou neutre (qui varie selon la composition de votre foyer et vos autres revenus).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
