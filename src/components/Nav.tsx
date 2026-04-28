import { Phone, MapPin } from "lucide-react";

const Nav = () => {
  const links = [
    { href: "#menu", label: "Menù" },
    { href: "#storia", label: "Storia" },
    { href: "#orari", label: "Orari" },
    { href: "#contatti", label: "Contatti" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-cream/80 border-b border-border/60">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-baseline gap-1 font-display text-2xl md:text-3xl leading-none">
          <span>Pizza</span>
          <span className="text-ember">&amp;</span>
          <span>pizzA</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-[0.18em]">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="relative hover:text-ember transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-ember after:transition-all hover:after:w-full">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="tel:+390457000005" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-char text-cream text-sm uppercase tracking-wider hover:bg-ember transition-colors duration-300">
          <Phone className="w-4 h-4" /> Prenota
        </a>
        <a href="tel:+390457000005" className="sm:hidden p-2 bg-char text-cream"><Phone className="w-4 h-4" /></a>
      </div>
    </header>
  );
};

export default Nav;
