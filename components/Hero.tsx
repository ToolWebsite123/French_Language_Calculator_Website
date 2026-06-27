import { ArrowRight, Calculator } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white py-20 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-primary/10 dark:bg-primary/20 blur-3xl opacity-50 dark:mix-blend-screen" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-blue-400/20 blur-3xl opacity-50 dark:mix-blend-screen" />
      </div>

      <div className="container relative mx-auto max-w-6xl px-4 z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-100 rounded-full px-3 py-1 text-sm font-medium mb-6 border border-primary/20 dark:border-primary/30 backdrop-blur-sm">
            <Calculator className="h-4 w-4" />
            <span>Plus de 10 outils fiables</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-primary dark:from-blue-400 dark:to-primary">Calculatrices Gratuites</span> en Ligne
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl leading-relaxed">
            Notre site offre des calculatrices précises et gratuites pour la finance, la santé, et la vie quotidienne. Trouvez l'outil dont vous avez besoin pour des résultats rapides et justes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/calculatrices"
              className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-primary rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50"
            >
              Découvrir les calculatrices
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
