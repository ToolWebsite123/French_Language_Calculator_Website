"use client";

import { useState } from "react";
import { Percent, ArrowUpRight, ArrowDownRight } from "lucide-react";

type TabKey = "whatIs" | "whatPercent" | "change";

export default function PercentageCalculator() {
  const [activeTab, setActiveTab] = useState<TabKey>("whatIs");

  // Tab 1: What is X% of Y?
  const [t1X, setT1X] = useState("");
  const [t1Y, setT1Y] = useState("");
  const [t1Result, setT1Result] = useState<number | null>(null);

  // Tab 2: X is what % of Y?
  const [t2X, setT2X] = useState("");
  const [t2Y, setT2Y] = useState("");
  const [t2Result, setT2Result] = useState<number | null>(null);

  // Tab 3: % change
  const [t3Original, setT3Original] = useState("");
  const [t3New, setT3New] = useState("");
  const [t3Result, setT3Result] = useState<number | null>(null);

  const handleTab1 = (e: React.FormEvent) => {
    e.preventDefault();
    const x = parseFloat(t1X);
    const y = parseFloat(t1Y);
    if (!isNaN(x) && !isNaN(y)) {
      setT1Result((x / 100) * y);
    }
  };

  const handleTab2 = (e: React.FormEvent) => {
    e.preventDefault();
    const x = parseFloat(t2X);
    const y = parseFloat(t2Y);
    if (!isNaN(x) && !isNaN(y) && y !== 0) {
      setT2Result((x / y) * 100);
    }
  };

  const handleTab3 = (e: React.FormEvent) => {
    e.preventDefault();
    const original = parseFloat(t3Original);
    const newVal = parseFloat(t3New);
    if (!isNaN(original) && !isNaN(newVal) && original !== 0) {
      setT3Result(((newVal - original) / Math.abs(original)) * 100);
    }
  };

  const tabs: { key: TabKey; label: string }[] = [
    { key: "whatIs", label: "X% de Y" },
    { key: "whatPercent", label: "X est quel % de Y" },
    { key: "change", label: "Variation en %" },
  ];

  return (
    <div className="bg-card border border-border shadow-sm rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
      {/* Tab Navigation */}
      <div className="flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 py-2.5 px-3 text-sm font-medium rounded-lg transition-all ${
              activeTab === tab.key
                ? "bg-white dark:bg-slate-950 text-slate-900 dark:text-white shadow-sm"
                : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab 1: What is X% of Y? */}
      {activeTab === "whatIs" && (
        <form onSubmit={handleTab1} className="space-y-6">
          <p className="text-center text-foreground/70 font-medium mb-4">
            Quel est <span className="text-primary font-bold">X%</span> de <span className="text-primary font-bold">Y</span> ?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="t1-x" className="block text-sm font-medium mb-2 text-foreground/80">Pourcentage (X)</label>
              <div className="relative">
                <input
                  type="number"
                  id="t1-x"
                  value={t1X}
                  onChange={(e) => setT1X(e.target.value)}
                  placeholder="Ex: 15"
                  className="w-full pl-4 pr-12 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                  required
                  step="any"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/50 font-medium">%</span>
              </div>
            </div>
            <div>
              <label htmlFor="t1-y" className="block text-sm font-medium mb-2 text-foreground/80">Valeur (Y)</label>
              <input
                type="number"
                id="t1-y"
                value={t1Y}
                onChange={(e) => setT1Y(e.target.value)}
                placeholder="Ex: 200"
                className="w-full pl-4 pr-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                required
                step="any"
              />
            </div>
          </div>
          <button type="submit" className="w-full flex items-center justify-center space-x-2 py-3.5 bg-primary hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg">
            <Percent className="h-5 w-5" />
            <span>Calculer</span>
          </button>
          {t1Result !== null && (
            <div className="mt-6 pt-6 border-t border-border animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 text-center">
                <p className="text-sm text-foreground/60 mb-2 uppercase tracking-wider font-medium">Résultat</p>
                <p className="text-lg text-foreground/70 mb-1">
                  {t1X}% de {t1Y} =
                </p>
                <p className="text-5xl font-extrabold text-primary">
                  {Number.isInteger(t1Result) ? t1Result : t1Result.toFixed(4).replace(/\.?0+$/, "")}
                </p>
              </div>
            </div>
          )}
        </form>
      )}

      {/* Tab 2: X is what % of Y? */}
      {activeTab === "whatPercent" && (
        <form onSubmit={handleTab2} className="space-y-6">
          <p className="text-center text-foreground/70 font-medium mb-4">
            <span className="text-primary font-bold">X</span> est quel pourcentage de <span className="text-primary font-bold">Y</span> ?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="t2-x" className="block text-sm font-medium mb-2 text-foreground/80">Valeur (X)</label>
              <input
                type="number"
                id="t2-x"
                value={t2X}
                onChange={(e) => setT2X(e.target.value)}
                placeholder="Ex: 30"
                className="w-full pl-4 pr-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                required
                step="any"
              />
            </div>
            <div>
              <label htmlFor="t2-y" className="block text-sm font-medium mb-2 text-foreground/80">Total (Y)</label>
              <input
                type="number"
                id="t2-y"
                value={t2Y}
                onChange={(e) => setT2Y(e.target.value)}
                placeholder="Ex: 200"
                className="w-full pl-4 pr-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                required
                step="any"
              />
            </div>
          </div>
          <button type="submit" className="w-full flex items-center justify-center space-x-2 py-3.5 bg-primary hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg">
            <Percent className="h-5 w-5" />
            <span>Calculer</span>
          </button>
          {t2Result !== null && (
            <div className="mt-6 pt-6 border-t border-border animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 text-center">
                <p className="text-sm text-foreground/60 mb-2 uppercase tracking-wider font-medium">Résultat</p>
                <p className="text-lg text-foreground/70 mb-1">
                  {t2X} est de {t2Y} :
                </p>
                <p className="text-5xl font-extrabold text-primary">
                  {Number.isInteger(t2Result) ? t2Result : t2Result.toFixed(4).replace(/\.?0+$/, "")}%
                </p>
              </div>
            </div>
          )}
        </form>
      )}

      {/* Tab 3: % change */}
      {activeTab === "change" && (
        <form onSubmit={handleTab3} className="space-y-6">
          <p className="text-center text-foreground/70 font-medium mb-4">
            Calculer la <span className="text-primary font-bold">variation en pourcentage</span> entre deux valeurs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="t3-original" className="block text-sm font-medium mb-2 text-foreground/80">Valeur initiale</label>
              <input
                type="number"
                id="t3-original"
                value={t3Original}
                onChange={(e) => setT3Original(e.target.value)}
                placeholder="Ex: 100"
                className="w-full pl-4 pr-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                required
                step="any"
              />
            </div>
            <div>
              <label htmlFor="t3-new" className="block text-sm font-medium mb-2 text-foreground/80">Nouvelle valeur</label>
              <input
                type="number"
                id="t3-new"
                value={t3New}
                onChange={(e) => setT3New(e.target.value)}
                placeholder="Ex: 130"
                className="w-full pl-4 pr-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                required
                step="any"
              />
            </div>
          </div>
          <button type="submit" className="w-full flex items-center justify-center space-x-2 py-3.5 bg-primary hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg">
            <Percent className="h-5 w-5" />
            <span>Calculer la variation</span>
          </button>
          {t3Result !== null && (
            <div className="mt-6 pt-6 border-t border-border animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 text-center">
                <p className="text-sm text-foreground/60 mb-2 uppercase tracking-wider font-medium">Variation</p>
                <p className="text-lg text-foreground/70 mb-1">
                  De {t3Original} à {t3New} :
                </p>
                <div className="flex items-center justify-center gap-2">
                  {t3Result >= 0 ? (
                    <ArrowUpRight className="h-8 w-8 text-emerald-500" />
                  ) : (
                    <ArrowDownRight className="h-8 w-8 text-red-500" />
                  )}
                  <p className={`text-5xl font-extrabold ${t3Result >= 0 ? "text-emerald-500" : "text-red-500"}`}>
                    {t3Result >= 0 ? "+" : ""}{Number.isInteger(t3Result) ? t3Result : t3Result.toFixed(2)}%
                  </p>
                </div>
              </div>
            </div>
          )}
        </form>
      )}
    </div>
  );
}
