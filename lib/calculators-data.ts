import { Banknote, Activity, Home as HomeIcon, Calculator, CalendarDays, Percent, LucideIcon } from "lucide-react";

export interface CalculatorData {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  category: "Finance" | "Santé" | "Immobilier" | string;
}

export const calculatorsData: CalculatorData[] = [
  {
    id: "salaire-net",
    title: "Calculatrice de Salaire",
    description: "Calculez votre salaire net à partir du brut. Prenez en compte les cotisations sociales et les impôts.",
    icon: Banknote,
    href: "/calculatrice-salaire-net",
    category: "Finance",
  },
  {
    id: "imc",
    title: "Calculatrice IMC",
    description: "Calculez votre Indice de Masse Corporelle pour évaluer votre poids par rapport à votre taille.",
    icon: Activity,
    href: "/calculatrice-imc",
    category: "Santé",
  },
  {
    id: "pret",
    title: "Simulateur de Prêt",
    description: "Estimez vos mensualités pour un prêt immobilier ou à la consommation avec le taux d'intérêt.",
    icon: HomeIcon,
    href: "/simulateur-pret",
    category: "Immobilier",
  },
  {
    id: "scientifique",
    title: "Calculatrice Scientifique",
    description: "Effectuez des calculs complexes avec les fonctions trigonométriques, logarithmiques, et exponentielles. Idéal pour les étudiants et ingénieurs.",
    icon: Calculator,
    href: "/calculatrice-scientifique",
    category: "Outils",
  },
  {
    id: "age",
    title: "Calculatrice d'Âge",
    description: "Calculez votre âge exact en années, mois et jours. Découvrez le nombre total de jours vécus et le compte à rebours de votre prochain anniversaire.",
    icon: CalendarDays,
    href: "/calculatrice-age",
    category: "Quotidien",
  },
  {
    id: "pourcentage",
    title: "Calculatrice de Pourcentage",
    description: "Calculez un pourcentage, trouvez la proportion entre deux valeurs, ou mesurez la variation en pourcentage entre un ancien et un nouveau montant.",
    icon: Percent,
    href: "/calculatrice-pourcentage",
    category: "Outils",
  },
];
