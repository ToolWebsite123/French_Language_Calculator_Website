import type { Metadata } from "next";
import CalculatorsGrid from "@/components/CalculatorsGrid";

export const metadata: Metadata = {
  title: "Toutes les Calculatrices Gratuites | Calculatrice Pro",
  description: "Découvrez l'ensemble de nos calculatrices gratuites en ligne. Finance, santé, immobilier, mathématiques... trouvez l'outil qu'il vous faut.",
  keywords: ["toutes nos calculatrices", "calculatrices gratuites en ligne", "outils gratuits en ligne"],
};

export default function CalculatorsListingPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
          Toutes Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">Calculatrices</span>
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Explorez notre collection complète d'outils gratuits pour faciliter votre quotidien.
        </p>
      </div>

      <CalculatorsGrid />
    </div>
  );
}
