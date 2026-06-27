import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-card">
      <div className="container mx-auto max-w-6xl px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Calculatrice Pro</h3>
            <p className="text-sm text-foreground/60 leading-relaxed max-w-xs">
              Votre hub de calculatrices en ligne gratuites pour la finance, la santé, et plus encore. Simple, rapide et précis.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Populaire</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <Link href="/calculatrice-salaire-net" className="hover:text-primary transition-colors">Calculatrice de Salaire</Link>
              </li>
              <li>
                <Link href="/calculatrice-imc" className="hover:text-primary transition-colors">Calculatrice IMC</Link>
              </li>
              <li>
                <Link href="/simulateur-pret" className="hover:text-primary transition-colors">Simulateur de Prêt</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Légal</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">Mentions Légales</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">Politique de Confidentialité</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-foreground/50">
          &copy; {new Date().getFullYear()} Calculatrice Pro. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
