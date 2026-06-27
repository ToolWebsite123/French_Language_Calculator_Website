"use client";

import { useState } from "react";
import { calculateNetSalary, EmployeeStatus, Period, SalaryCalculationResult } from "@/lib/calculations/salary";
import { Calculator } from "lucide-react";

export default function SalaryCalculator() {
  const [brut, setBrut] = useState<string>("");
  const [period, setPeriod] = useState<Period>("monthly");
  const [status, setStatus] = useState<EmployeeStatus>("non-cadre");
  const [result, setResult] = useState<SalaryCalculationResult | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const brutValue = parseFloat(brut);
    if (!isNaN(brutValue) && brutValue > 0) {
      setResult(calculateNetSalary(brutValue, period, status));
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(value);
  };

  return (
    <div className="bg-card border border-border shadow-sm rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
      <form onSubmit={handleCalculate} className="space-y-6">
        <div>
          <label htmlFor="brut" className="block text-sm font-medium mb-2 text-foreground/80">
            Salaire Brut ({period === 'monthly' ? 'Mensuel' : 'Annuel'})
          </label>
          <div className="relative">
            <input
              type="number"
              id="brut"
              value={brut}
              onChange={(e) => setBrut(e.target.value)}
              placeholder="Ex: 2500"
              className="w-full pl-4 pr-10 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
              required
              min="0"
              step="0.01"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/50 font-medium">
              €
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground/80">Période</label>
            <div className="flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1">
              <button
                type="button"
                onClick={() => setPeriod("monthly")}
                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
                  period === "monthly" 
                    ? "bg-white dark:bg-slate-700 shadow-sm text-foreground" 
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                Mensuel
              </button>
              <button
                type="button"
                onClick={() => setPeriod("annual")}
                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
                  period === "annual" 
                    ? "bg-white dark:bg-slate-700 shadow-sm text-foreground" 
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                Annuel
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-foreground/80">Statut</label>
            <div className="flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1">
              <button
                type="button"
                onClick={() => setStatus("non-cadre")}
                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
                  status === "non-cadre" 
                    ? "bg-white dark:bg-slate-700 shadow-sm text-foreground" 
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                Non-cadre
              </button>
              <button
                type="button"
                onClick={() => setStatus("cadre")}
                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
                  status === "cadre" 
                    ? "bg-white dark:bg-slate-700 shadow-sm text-foreground" 
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                Cadre
              </button>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center space-x-2 py-3.5 bg-primary hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg"
        >
          <Calculator className="h-5 w-5" />
          <span>Calculer mon salaire net</span>
        </button>
      </form>

      {result && (
        <div className="mt-8 pt-8 border-t border-border animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h3 className="text-lg font-semibold mb-4">Résultat de votre calcul</h3>
          
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6 text-center">
            <p className="text-sm font-medium text-primary/80 uppercase tracking-wider mb-2">
              Salaire Net {result.period === 'monthly' ? 'Mensuel' : 'Annuel'}
            </p>
            <p className="text-4xl font-extrabold text-foreground">
              {formatCurrency(result.net)}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4">
              <p className="text-sm text-foreground/60 mb-1">Salaire Brut</p>
              <p className="text-lg font-semibold">{formatCurrency(result.brut)}</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4">
              <p className="text-sm text-foreground/60 mb-1">Charges ({result.rate * 100}%)</p>
              <p className="text-lg font-semibold text-red-500">-{formatCurrency(result.deductions)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
