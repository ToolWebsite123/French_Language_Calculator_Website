"use client";

import { useState } from "react";
import { calculateImc, ImcResult } from "@/lib/calculations/imc";
import { Activity } from "lucide-react";

export default function ImcCalculator() {
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [result, setResult] = useState<ImcResult | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height);
    if (!isNaN(w) && w > 0 && !isNaN(h) && h > 0) {
      setResult(calculateImc(w, h));
    }
  };

  return (
    <div className="bg-card border border-border shadow-sm rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
      <form onSubmit={handleCalculate} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="weight" className="block text-sm font-medium mb-2 text-foreground/80">
              Poids (kg)
            </label>
            <div className="relative">
              <input
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Ex: 70"
                className="w-full pl-4 pr-12 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                required
                min="1"
                step="0.1"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/50 font-medium">
                kg
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="height" className="block text-sm font-medium mb-2 text-foreground/80">
              Taille (cm)
            </label>
            <div className="relative">
              <input
                type="number"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Ex: 175"
                className="w-full pl-4 pr-12 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                required
                min="50"
                step="1"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/50 font-medium">
                cm
              </span>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center space-x-2 py-3.5 bg-primary hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg"
        >
          <Activity className="h-5 w-5" />
          <span>Calculer mon IMC</span>
        </button>
      </form>

      {result && (
        <div className="mt-8 pt-8 border-t border-border animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h3 className="text-lg font-semibold mb-4 text-center">Résultat de votre calcul</h3>
          
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 text-center">
            <p className="text-sm text-foreground/60 mb-2 uppercase tracking-wider font-medium">
              Votre Indice de Masse Corporelle
            </p>
            <p className="text-5xl font-extrabold text-foreground mb-4">
              {result.imc.toFixed(1)}
            </p>
            <div className={`inline-flex px-4 py-1.5 rounded-full font-bold text-sm bg-white dark:bg-slate-900 shadow-sm ${result.colorClass}`}>
              {result.category}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
