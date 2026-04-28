import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Gianluca S.",
    stars: 5,
    text: "Pizza ottima, ingredienti di qualità e personale gentilissimo. Super consigliata!",
  },
  {
    name: "Elena R.",
    stars: 4,
    text: "Molto buona la pasta, leggera e digeribile. Forse un po' lunga l'attesa nel weekend.",
  },
  {
    name: "Marco B.",
    stars: 5,
    text: "La miglior pizza della zona per distacco. Molta varietà nel menù.",
  },
];

const Recensioni = () => {
  return (
    <section className="bg-cream-soft py-24 md:py-32">
      <div className="container">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-3 border-t-2 border-char pt-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Sezione 03</div>
            <div className="font-display text-3xl mt-1">Le voci</div>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-5">
            <h2 className="font-display text-5xl md:text-7xl leading-[0.9] text-balance">
              <span className="italic text-ember">4,4</span> su 5,<br/>
              parlano i clienti.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <article
              key={r.name}
              className={`relative bg-cream p-8 border border-char/10 hover:border-ember transition-all duration-500 hover:-translate-y-1 hover:shadow-deep ${
                i === 1 ? "md:translate-y-8" : ""
              }`}
            >
              <Quote className="w-10 h-10 text-ember mb-6" strokeWidth={1} />
              <p className="font-display text-2xl leading-snug text-char mb-8 text-balance">
                "{r.text}"
              </p>
              <div className="flex items-center justify-between border-t border-char/10 pt-4">
                <div className="text-xs uppercase tracking-[0.25em]">{r.name}</div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className={`w-3.5 h-3.5 ${j < r.stars ? "fill-gold text-gold" : "fill-char/10 text-char/10"}`}
                    />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recensioni;
