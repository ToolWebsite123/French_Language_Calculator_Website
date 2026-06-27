import type { Metadata } from "next";
import AgeCalculator from "@/components/calculators/AgeCalculator";

export const metadata: Metadata = {
  title: "Calculatrice d'Âge | Calculez votre âge exact en ligne",
  description: "Calculez votre âge exact en années, mois et jours grâce à notre calculatrice d'âge gratuite. Découvrez aussi votre nombre total de jours vécus et le compte à rebours avant votre prochain anniversaire.",
  keywords: ["calculatrice d'âge", "calcul âge exact", "âge en jours", "prochain anniversaire", "calculer son âge"],
};

export default function AgeCalculatorPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
          Calculatrice d&apos;<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">Âge</span>
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Calculez votre âge exact en années, mois et jours. Découvrez combien de jours vous avez vécu et quand aura lieu votre prochain anniversaire.
        </p>
      </div>

      {/* Interactive Calculator */}
      <div className="mb-16">
        <AgeCalculator />
      </div>

      {/* Explanation Section */}
      <section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">Comment calculer son âge exact ?</h2>
        <p>
          Calculer son <strong>âge exact</strong> ne se résume pas simplement à soustraire l&apos;année de naissance de l&apos;année actuelle. Pour obtenir un résultat précis en années, mois et jours, il faut tenir compte de plusieurs facteurs :
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3">La méthode de calcul</h3>
        <p>
          Notre calculatrice commence par déterminer la différence en années complètes, puis en mois, puis en jours restants. Si le jour du mois actuel est inférieur au jour de naissance, on &quot;emprunte&quot; un mois (en prenant le nombre exact de jours du mois précédent). De même, si le mois actuel est inférieur au mois de naissance, on réduit d&apos;une année et on ajoute 12 mois.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3">Les années bissextiles</h3>
        <p>
          Une <strong>année bissextile</strong> survient tous les 4 ans (sauf les siècles non divisibles par 400). Cela signifie que février compte 29 jours au lieu de 28. Notre outil en tient compte automatiquement : si vous êtes né(e) un 29 février, votre prochain anniversaire sera calculé en conséquence (le 28 février les années non bissextiles).
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-3">Les mois de longueurs différentes</h3>
        <p>
          Les mois comptent entre 28 et 31 jours. Lorsque le calcul nécessite de &quot;remonter&quot; au mois précédent pour compter les jours restants, notre algorithme utilise le nombre réel de jours de ce mois spécifique (et non une moyenne de 30 jours), garantissant une précision exacte.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 md:p-8 border border-border/50">
        <h2 className="text-2xl font-bold mb-8 text-center">Foire Aux Questions (FAQ)</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Comment calculer son âge exact en jours ?</h3>
            <p className="text-foreground/70 leading-relaxed">
              Notre outil calcule automatiquement le nombre total de jours entre votre date de naissance et la date cible. Il compte chaque jour calendaire réel, en incluant les jours supplémentaires des années bissextiles. Entrez simplement votre date de naissance et le résultat s&apos;affichera instantanément.
            </p>
          </div>
          <hr className="border-border/40" />
          <div>
            <h3 className="font-semibold text-lg mb-2">Puis-je calculer mon âge à une date passée ou future ?</h3>
            <p className="text-foreground/70 leading-relaxed">
              Oui, absolument. Par défaut, l&apos;âge est calculé à la date d&apos;aujourd&apos;hui. Mais vous pouvez modifier le champ &quot;Calculer l&apos;âge à la date du&quot; pour choisir n&apos;importe quelle date dans le passé ou le futur (par exemple, pour savoir quel âge vous aurez lors d&apos;un événement à venir).
            </p>
          </div>
          <hr className="border-border/40" />
          <div>
            <h3 className="font-semibold text-lg mb-2">Que se passe-t-il si je suis né(e) un 29 février ?</h3>
            <p className="text-foreground/70 leading-relaxed">
              Si vous êtes né(e) le 29 février, notre calculatrice gère ce cas spécial. Pour le compte à rebours du prochain anniversaire, elle utilise le 28 février les années non bissextiles, et le 29 février les années bissextiles. Le calcul de l&apos;âge exact reste précis dans tous les cas.
            </p>
          </div>
          <hr className="border-border/40" />
          <div>
            <h3 className="font-semibold text-lg mb-2">Comment connaître le nombre de semaines que j&apos;ai vécues ?</h3>
            <p className="text-foreground/70 leading-relaxed">
              Le nombre total de semaines est affiché automatiquement après le calcul. Il est obtenu en divisant le nombre total de jours vécus par 7 (arrondi à l&apos;entier inférieur). C&apos;est une statistique amusante qui peut mettre en perspective le temps qui passe !
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
