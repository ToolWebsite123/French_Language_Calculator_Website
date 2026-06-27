"use client";

import { useState } from "react";
import { calculatePret, PretResult } from "@/lib/calculations/pret";
import { Home as HomeIcon } from "lucide-react";

export default function PretCalculator() {
  const [amount, setAmount] = useState<string>("");
  const [rate, setRate] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [result, setResult] = useState<PretResult | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const p = parseFloat(amount);
    const r = parseFloat(rate);
    const d = parseFloat(duration);
    
    if (!isNaN(p) && p > 0 && !isNaN(r) && r >= 0 && !isNaN(d) && d > 0) {
      setResult(calculatePret(p, r, d));
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);
  };

  return (
    <div className="bg-card border border-border shadow-sm rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
      <form onSubmit={handleCalculate} className="space-y-6">
        <div>
          <label htmlFor="amount" className="block text-sm font-medium mb-2 text-foreground/80">
            Montant du prêt
          </label>
          <div className="relative">
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Ex: 200000"
              className="w-full pl-4 pr-12 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
              required
              min="1"
              step="1000"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/50 font-medium">
              €
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="duration" className="block text-sm font-medium mb-2 text-foreground/80">
              Durée (Années)
            </label>
            <div className="relative">
              <input
                type="number"
                id="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="Ex: 20"
                className="w-full pl-4 pr-16 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                required
                min="1"
                step="1"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/50 font-medium">
                ans
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="rate" className="block text-sm font-medium mb-2 text-foreground/80">
              Taux d'intérêt annuel
            </label>
            <div className="relative">
              <input
                type="number"
                id="rate"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                placeholder="Ex: 3.5"
                className="w-full pl-4 pr-12 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                required
                min="0"
                step="0.01"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/50 font-medium">
                %
              </span>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center space-x-2 py-3.5 bg-primary hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg"
        >
          <HomeIcon className="h-5 w-5" />
          <span>Simuler mon prêt</span>
        </button>
      </form>

      {result && (
        <div className="mt-8 pt-8 border-t border-border animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h3 className="text-lg font-semibold mb-4">Aperçu du financement</h3>
          
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6 text-center">
            <p className="text-sm font-medium text-primary/80 uppercase tracking-wider mb-2">
              Mensualité estimée
            </p>
            <p className="text-4xl font-extrabold text-foreground">
              {formatCurrency(result.monthlyPayment)}<span className="text-xl font-medium text-foreground/50">/mois</span>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4">
              <p className="text-sm text-foreground/60 mb-1">Coût du crédit (intérêts)</p>
              <p className="text-lg font-semibold text-orange-500">{formatCurrency(result.totalCost)}</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4">
              <p className="text-sm text-foreground/60 mb-1">Montant total remboursé</p>
              <p className="text-lg font-semibold">{formatCurrency(result.totalRepaid)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
