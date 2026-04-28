import heroPizza from "@/assets/hero-pizza.jpg";
import { Star } from "lucide-react";

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen bg-char text-cream overflow-hidden grain">
      {/* Magazine grid */}
      <div className="container relative z-10 pt-28 md:pt-32 pb-16 grid grid-cols-12 gap-6 min-h-screen">
        {/* Left meta */}
        <div className="col-span-12 md:col-span-3 flex md:flex-col justify-between items-start gap-6 pt-4">
          <div className="space-y-1">
            <div className="text-[10px] uppercase tracking-[0.3em] text-cream/60">Edizione</div>
            <div className="font-display text-2xl">N° 142</div>
          </div>
          <div className="space-y-1">
            <div className="text-[10px] uppercase tracking-[0.3em] text-cream/60">Dal forno</div>
            <div className="font-display text-2xl">Albaredo d'Adige</div>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-3.5 h-3.5 ${i < 4 ? "fill-gold text-gold" : "fill-gold/40 text-gold/40"}`} />
              ))}
            </div>
            <span className="text-xs text-cream/70">4,4 · 142 recensioni</span>
          </div>
        </div>

        {/* Center title */}
        <div className="col-span-12 md:col-span-6 flex flex-col justify-center items-center text-center">
      <div className="relative -top-4 text-[10px] uppercase tracking-[0.4em] text-ember mb-7">
         Pizzeria · Forno a legna · 1985
        </div>          
          <h1 className="font-display text-balance leading-[0.85] text-[clamp(3.5rem,12vw,9rem)]">
            Pizza<span className="text-ember italic">&amp;</span>
            <br />
            pizzA
          </h1>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px w-12 bg-cream/40" />
            <p className="text-xs uppercase tracking-[0.3em] text-cream/70">L'arte dell'impasto</p>
            <div className="h-px w-12 bg-cream/40" />
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="#menu" className="px-7 py-3.5 bg-ember text-cream uppercase tracking-[0.2em] text-xs hover:bg-ember-glow transition-colors duration-300 shadow-ember">
              Scopri il menù
            </a>
            <a href="tel:+390457000005" className="px-7 py-3.5 border border-cream/40 text-cream uppercase tracking-[0.2em] text-xs hover:bg-cream hover:text-char transition-colors duration-300">
              045 700 0005
            </a>
          </div>
        </div>

        {/* Right meta */}
        <div className="col-span-12 md:col-span-3 flex md:flex-col justify-between items-end gap-6 pt-4 text-right">
          <div className="space-y-1">
          </div>
          <div className="space-y-1">
          </div>
        </div>
      </div>

      {/* Floating pizza, peeking from bottom */}
      <div className="absolute -bottom-32 md:-bottom-40 left-1/2 -translate-x-1/2 w-[120vw] md:w-[80vw] max-w-[900px] aspect-square pointer-events-none">
        <div className="absolute inset-0 bg-ember/30 blur-3xl rounded-full animate-flicker" />
        <img
          src={heroPizza}
          alt="Pizza Margherita appena uscita dal forno a legna"
          width={1536}
          height={1536}
          className="relative w-full h-full object-contain animate-rise"
          style={{ animationDuration: "1.4s" }}
        />
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-cream/10 bg-char/80 backdrop-blur-sm py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap font-display text-2xl md:text-3xl">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-8 pr-8">
              {["Margherita", "·", "Diavola", "·", "Bufalina", "·", "Capricciosa", "·", "Pistacchiosa", "·", "4 Formaggi", "·", "Carbonara", "·", "Bismark", "·"].map((w, i) => (
                <span key={i} className={i % 2 === 0 ? "text-cream" : "text-ember"}>{w}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
