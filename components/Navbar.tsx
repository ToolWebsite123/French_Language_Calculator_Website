import Link from 'next/link';
import { Calculator } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-6xl items-center px-4">
        <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
          <Calculator className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block text-xl tracking-tight">
            Calculatrice Pro
          </span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-4 text-sm font-medium">
            <Link
              href="/"
              className="transition-colors hover:text-primary text-foreground/80"
            >
              Accueil
            </Link>
            <Link
              href="/calculatrices"
              className="transition-colors hover:text-primary text-foreground/80"
            >
              Calculatrices
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
