"use client";

import { useState } from "react";
import Card from "@/components/Card";
import { calculatorsData } from "@/lib/calculators-data";

export default function CalculatorsGrid() {
  const [activeTab, setActiveTab] = useState<string>("Tous");

  const tabs = ["Tous", "Finance", "Santé", "Immobilier"];

  const filteredCalculators = activeTab === "Tous" 
    ? calculatorsData 
    : calculatorsData.filter(calc => calc.category === activeTab);

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeTab === tab
                ? "bg-primary text-white shadow-md shadow-primary/30"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredCalculators.map((calc) => (
          <Card
            key={calc.id}
            title={calc.title}
            description={calc.description}
            icon={calc.icon}
            href={calc.href}
            category={calc.category}
          />
        ))}
        {filteredCalculators.length === 0 && (
          <div className="col-span-full py-12 text-center text-foreground/50">
            Aucune calculatrice trouvée pour cette catégorie.
          </div>
        )}
      </div>
    </div>
  );
}
