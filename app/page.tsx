import Hero from "@/components/Hero";
import Card from "@/components/Card";
import ScientificCalculator from "@/components/calculators/ScientificCalculator";
import { ShieldCheck, Zap, Lock } from "lucide-react";
import { calculatorsData } from "@/lib/calculators-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculatrices Gratuites en Ligne | Finance, Santé, Quotidien",
  description: "Accédez à nos calculatrices gratuites en ligne : calcul de salaire, IMC, simulateur de prêt. Des outils fiables, précis et faciles à utiliser.",
  keywords: ["calculatrice gratuite en ligne", "calculatrice de salaire", "calculatrice IMC", "simulateur de prêt", "outils gratuits"],
};

export default function Home() {

  return (
    <>
      <Hero />
      
      {/* Calculators Grid Section */}
      <section id="calculators" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-foreground">
              Nos Calculatrices Disponibles
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Choisissez l'outil adapté à vos besoins parmi notre sélection de calculatrices professionnelles.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {calculatorsData.map((calc) => (
              <Card
                key={calc.id}
                title={calc.title}
                description={calc.description}
                icon={calc.icon}
                href={calc.href}
                category={calc.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Calculator Section */}
      <section className="py-20 bg-slate-100 dark:bg-slate-800/50 border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-foreground">
            Calculatrice Scientifique en Ligne
          </h2>
          <p className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto">
            Utilisez notre calculatrice scientifique gratuite pour vos calculs avancés : trigonométrie, logarithmes, exposants et bien plus encore.
          </p>
          <ScientificCalculator />
        </div>
      </section>

      {/* About / Trust Section */}
      <section id="about" className="py-20 bg-slate-50 border-t border-border/50 dark:bg-slate-900/50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-foreground">
              Pourquoi choisir nos calculatrices ?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Nous nous engageons à fournir les outils les plus fiables et les plus simples d'utilisation sur le web.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="flex flex-col items-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">100% Fiable & Précis</h3>
              <p className="text-foreground/70 leading-relaxed">
                Nos formules sont régulièrement mises à jour selon les dernières normes légales et mathématiques pour garantir des résultats exacts.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Rapide & Gratuit</h3>
              <p className="text-foreground/70 leading-relaxed">
                Pas besoin de créer un compte ou de payer. Nos outils sont accessibles instantanément et entièrement gratuits pour tous.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Lock className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Respect de la Vie Privée</h3>
              <p className="text-foreground/70 leading-relaxed">
                Aucune de vos données financières ou de santé n'est sauvegardée sur nos serveurs. Tous les calculs sont effectués de manière sécurisée.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
