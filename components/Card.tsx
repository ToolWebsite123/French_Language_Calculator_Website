import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  category: string;
}

export default function Card({ title, description, icon: Icon, href, category }: CardProps) {
  return (
    <Link 
      href={href}
      className="group relative flex flex-col bg-card rounded-2xl border border-border p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/30 hover:-translate-y-1 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-primary/0 transition-all group-hover:bg-primary" />
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>
      <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary/80">
        {category}
      </div>
      <h3 className="mb-2 text-xl font-bold tracking-tight text-card-foreground">
        {title}
      </h3>
      <p className="text-sm text-foreground/70 leading-relaxed">
        {description}
      </p>
      <div className="mt-6 flex items-center text-sm font-medium text-primary opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
        Calculer maintenant
        <svg
          className="ml-1 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </Link>
  );
}
