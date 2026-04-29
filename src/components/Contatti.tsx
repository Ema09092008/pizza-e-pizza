import { MapPin, Phone, Globe, Clock, UtensilsCrossed, ShoppingBag, Bike } from "lucide-react";

const orari = [
  { d: "lovatin specialità della casa", h: "aperto" },
  { d: "Martedì", h: "18:30 – 21:30" },
  { d: "Mercoledì", h: "18:30 – 21:30" },
  { d: "Giovedì", h: "18:30 – 21:30" },
  { d: "Venerdì", h: "18:30 – 21:30" },
  { d: "Sabato", h: "18:30 – 22:00" },
  { d: "Domenica", h: "18:30 – 21:30" },
];

const Contatti = () => {
  return (
    <section id="contatti" className="bg-char text-cream py-24 md:py-32 grain relative">
      <div className="container">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-3 border-t-2 border-cream pt-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-cream/60">Sezione 04</div>
            <div className="font-display text-3xl mt-1">Vieni a trovarci</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display text-5xl md:text-7xl leading-[0.9] text-balance">
              Via del Commercio 1,<br/>
              <span className="italic text-ember">ti aspettiamo.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8" id="orari">
          {/* Orari */}
          <div className="md:col-span-5 border border-cream/15 p-8 bg-soot">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-5 h-5 text-ember" />
              <h3 className="font-display text-3xl">Orari di apertura</h3>
            </div>
            <ul className="space-y-3">
              {orari.map((o) => (
                <li key={o.d} className="grid grid-cols-[auto_1fr_auto] items-baseline gap-3">
                  <span className="text-cream/80 uppercase text-xs tracking-[0.2em]">{o.d}</span>
                  <span className="border-b border-dotted border-cream/20 self-end mb-1.5" />
                  <span className={`font-display text-lg ${o.h === "Chiuso" ? "text-cream/40" : "text-cream"}`}>{o.h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti & servizi */}
          <div className="md:col-span-7 space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <a href="tel:+390457000005" className="block border border-cream/15 p-6 hover:bg-ember hover:border-ember transition-all duration-300 group">
                <Phone className="w-5 h-5 text-ember group-hover:text-cream mb-3" />
                <div className="text-[10px] uppercase tracking-[0.25em] text-cream/60 group-hover:text-cream/80">Telefono</div>
                <div className="font-display text-2xl mt-1">045 700 0005</div>
              </a>
              <a href="https://pizzapizza.it" target="_blank" rel="noreferrer" className="block border border-cream/15 p-6 hover:bg-ember hover:border-ember transition-all duration-300 group">
                <Globe className="w-5 h-5 text-ember group-hover:text-cream mb-3" />
                <div className="text-[10px] uppercase tracking-[0.25em] text-cream/60 group-hover:text-cream/80">Sito web</div>
                <div className="font-display text-2xl mt-1">pizzapizza.it</div>
              </a>
            </div>

            <a
              href="https://maps.google.com/?q=Via+del+Commercio+1+Albaredo+d'Adige"
              target="_blank"
              rel="noreferrer"
              className="block border border-cream/15 p-6 hover:bg-ember hover:border-ember transition-all duration-300 group"
            >
              <MapPin className="w-5 h-5 text-ember group-hover:text-cream mb-3" />
              <div className="text-[10px] uppercase tracking-[0.25em] text-cream/60 group-hover:text-cream/80">Indirizzo</div>
              <div className="font-display text-2xl mt-1">Via del Commercio, 1</div>
              <div className="text-cream/70 group-hover:text-cream/90 text-sm mt-1">37041 Albaredo d'Adige (VR), Italia</div>
            </a>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: UtensilsCrossed, l: "Sul posto" },
                { icon: ShoppingBag, l: "Asporto" },
                { icon: Bike, l: "Domicilio" },
              ].map((s) => (
                <div key={s.l} className="border border-cream/15 p-6 text-center bg-soot">
                  <s.icon className="w-6 h-6 text-ember mx-auto mb-3" />
                  <div className="text-xs uppercase tracking-[0.2em]">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mt-24 pt-10 border-t border-cream/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="font-display text-2xl">
          Pizza<span className="text-ember">&amp;</span>pizzA
        </div>
        <div className="text-xs uppercase tracking-[0.25em] text-cream/50">
          © {new Date().getFullYear()} · Albaredo d'Adige · Tutti i diritti riservati
        </div>
      </footer>
    </section>
  );
};

export default Contatti;
