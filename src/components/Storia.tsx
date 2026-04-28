import pizzaiolo from "@/assets/pizzaiolo.jpg";
import oven from "@/assets/oven-fire.jpg";
import ingredients from "@/assets/ingredients.jpg";

const Storia = () => {
  return (
    <section id="storia" className="relative bg-char text-cream py-24 md:py-32 overflow-hidden grain">
      <div className="container">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-3 border-t-2 border-cream pt-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-cream/60">Sezione 02</div>
            <div className="font-display text-3xl mt-1">La Storia</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display text-5xl md:text-7xl leading-[0.9] text-balance">
              Dal 1985, l'impasto è <span className="italic text-ember">il nostro mestiere.</span>
            </h2>
          </div>
        </div>

        {/* Magazine layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* Big feature image */}
          <figure className="col-span-12 md:col-span-7 row-span-2 relative aspect-[4/5] md:aspect-auto overflow-hidden">
            <img src={pizzaiolo} alt="Pizzaiolo che lavora l'impasto" loading="lazy" width={1280} height={1600} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-overlay" />
            <figcaption className="absolute bottom-6 left-6 right-6 font-display text-2xl md:text-3xl">
              "L'impasto si capisce con le mani,<br/>non si impara dai libri."
              <div className="text-xs uppercase tracking-[0.3em] text-cream/60 mt-3 font-body">— Il pizzaiolo</div>
            </figcaption>
          </figure>

          {/* Right top: text */}
          <div className="col-span-12 md:col-span-5 flex flex-col justify-end space-y-4 text-cream/80">
            <p className="font-display text-3xl text-cream leading-tight">
              Lievitazione 48 ore. Farine selezionate. Forno a legna sempre acceso.
            </p>
            <p className="text-base leading-relaxed">
              Ad Albaredo d'Adige da quarant'anni serviamo la stessa pizza, fatta nello stesso modo. Ogni sera, dalle 18:30, il profumo del forno a legna riempie via del Commercio.
            </p>
          </div>

          {/* Right bottom: two small images */}
          <div className="col-span-12 md:col-span-5 grid grid-cols-2 gap-6 mt-6">
            <figure className="relative aspect-[3/4] overflow-hidden">
              <img src={oven} alt="Forno a legna acceso" loading="lazy" width={1280} height={896} className="w-full h-full object-cover animate-flicker" />
              <figcaption className="absolute bottom-3 left-3 right-3 text-[10px] uppercase tracking-[0.25em] text-cream/80">Il forno · 450°C</figcaption>
            </figure>
            <figure className="relative aspect-[3/4] overflow-hidden">
              <img src={ingredients} alt="Ingredienti freschi" loading="lazy" width={1280} height={1280} className="w-full h-full object-cover" />
              <figcaption className="absolute bottom-3 left-3 right-3 text-[10px] uppercase tracking-[0.25em] text-cream/80">Materie prime</figcaption>
            </figure>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-cream/20 pt-10">
          {[
            { n: "40", l: "anni di forno" },
            { n: "4,4", l: "stelle medie" },
            { n: "142", l: "recensioni" },
            { n: "48h", l: "di lievitazione" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-5xl md:text-6xl text-ember">{s.n}</div>
              <div className="text-xs uppercase tracking-[0.25em] text-cream/60 mt-2">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Storia;
