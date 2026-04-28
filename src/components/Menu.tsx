import { useState } from "react";

type Item = { name: string; ingredients: string; price: string };

const classiche: Item[] = [
  { name: "Marinara", ingredients: "Pomodoro, aglio, origano", price: "4,50" },
  { name: "Margherita", ingredients: "Pomodoro, mozzarella", price: "5,50" },
  { name: "Pugliese", ingredients: "Cipolla", price: "6,50" },
  { name: "Romana", ingredients: "Acciughe, origano", price: "7,00" },
  { name: "Siciliana", ingredients: "Acciughe, capperi, olive, origano", price: "7,50" },
  { name: "Prosciutto", ingredients: "Prosciutto cotto", price: "7,00" },
  { name: "Funghi", ingredients: "Funghi prataioli", price: "7,00" },
  { name: "Prosciutto e Funghi", ingredients: "Prosciutto cotto, funghi prataioli", price: "7,50" },
  { name: "Wurstel", ingredients: "Wurstel", price: "7,00" },
  { name: "Diavola", ingredients: "Salamino piccante", price: "7,00" },
  { name: "Viennese", ingredients: "Prosciutto cotto, wurstel", price: "7,50" },
  { name: "4 Stagioni", ingredients: "Prosciutto, funghi, carciofi", price: "8,00" },
  { name: "Capricciosa", ingredients: "Prosciutto, funghi, carciofi, olive, acciughe", price: "8,50" },
  { name: "Tonno e Cipolla", ingredients: "Tonno, cipolla", price: "8,00" },
  { name: "4 Formaggi", ingredients: "Emmenthal, gorgonzola, edamer, grana", price: "8,00" },
  { name: "Calzone", ingredients: "Prosciutto cotto, funghi prataioli", price: "7,50" },
];

const speciali: Item[] = [
  { name: "Verdure", ingredients: "Melanzane, zucchine, peperoni grigliati", price: "8,50" },
  { name: "Americana", ingredients: "Wurstel, patatine fritte", price: "8,00" },
  { name: "Tirolese", ingredients: "Gorgonzola, speck (all'uscita)", price: "8,50" },
  { name: "Valtellina", ingredients: "Bresaola, rucola, grana (all'uscita)", price: "9,00" },
  { name: "Crudaiola", ingredients: "Pomodoro fresco, rucola, grana (all'uscita)", price: "8,50" },
  { name: "Campagnola", ingredients: "Porcini, bresaola", price: "9,50" },
  { name: "Delicata", ingredients: "Philadelphia, zucchine, gamberetti", price: "9,00" },
  { name: "Bismark", ingredients: "Prosciutto cotto, uovo", price: "8,00" },
  { name: "Zola e Mele", ingredients: "Gorgonzola, mele", price: "8,00" },
  { name: "Patatosa", ingredients: "Patatine fritte", price: "7,00" },
  { name: "Contadina", ingredients: "Salsiccia, cipolla, peperoni", price: "8,50" },
  { name: "Greca", ingredients: "Olive, feta, pomodorini", price: "8,50" },
  { name: "Sfiziosa", ingredients: "Pancetta, porcini, pomodorini", price: "9,50" },
  { name: "Tonnata", ingredients: "Tonno, capperi, pomodorini, origano", price: "8,50" },
  { name: "Carbonara", ingredients: "Pancetta, uovo, grana, pepe", price: "8,50" },
  { name: "Parmigiana", ingredients: "Melanzane, grana, basilico", price: "8,50" },
];

const bianche: Item[] = [
  { name: "Biancaneve", ingredients: "Mozzarella, stracchino, rucola", price: "7,50" },
  { name: "Bufalina", ingredients: "Mozzarella di bufala, pomodorini, basilico", price: "8,50" },
  { name: "Delizia", ingredients: "Mozzarella, crema di zucca, pancetta, scaglie di grana", price: "9,50" },
  { name: "Pistacchiosa", ingredients: "Mozzarella, mortadella, granella di pistacchio, burrata", price: "10,50" },
];

const categories = [
  { id: "classiche", label: "Le Classiche", items: classiche, intro: "La tradizione che non sbaglia mai." },
  { id: "speciali", label: "Le Speciali", items: speciali, intro: "Combinazioni audaci, ingredienti scelti." },
  { id: "bianche", label: "Le Bianche", items: bianche, intro: "Senza pomodoro. Solo eleganza." },
];

const MenuRow = ({ item, idx }: { item: Item; idx: number }) => (
  <li className="grid grid-cols-[auto_1fr_auto] items-baseline gap-3 py-4 group">
    <span className="font-display text-xl md:text-2xl text-char group-hover:text-ember transition-colors duration-300">
      {item.name}
    </span>
    <span className="border-b border-dotted border-char/30 self-end mb-2" />
    <span className="font-display text-xl md:text-2xl text-ember tabular-nums">€ {item.price}</span>
    <span className="col-span-3 text-sm text-muted-foreground -mt-2">{item.ingredients}</span>
  </li>
);

const Menu = () => {
  const [active, setActive] = useState("classiche");
  const current = categories.find((c) => c.id === active)!;

  return (
    <section id="menu" className="relative bg-cream py-24 md:py-32 mt-32 md:mt-40">
      <div className="container">
        {/* Magazine header */}
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-3 border-t-2 border-char pt-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Sezione 01</div>
            <div className="font-display text-3xl mt-1">Il Menù</div>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-5">
            <h2 className="font-display text-5xl md:text-7xl leading-[0.9] text-balance">
              Quaranta varietà,<br/>
              <span className="italic text-ember">una sola passione.</span>
            </h2>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 md:gap-6 border-b border-char/20 mb-12">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`relative pb-4 px-1 font-display text-2xl md:text-3xl transition-colors ${
                active === c.id ? "text-ember" : "text-char/40 hover:text-char"
              }`}
            >
              {c.label}
              {active === c.id && (
                <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-ember" />
              )}
            </button>
          ))}
        </div>

        <p className="font-display italic text-2xl md:text-3xl text-char/70 mb-10 max-w-2xl">
          {current.intro}
        </p>

        {/* Two-column menu */}
        <ul className="grid md:grid-cols-2 gap-x-12 lg:gap-x-20">
          {current.items.map((item, i) => (
            <MenuRow key={item.name} item={item} idx={i} />
          ))}
        </ul>

        {/* Footer note */}
        <div className="mt-20 grid md:grid-cols-3 gap-6 pt-8 border-t border-char/20 text-sm text-muted-foreground">
          <div>
            <div className="font-display text-lg text-char mb-2">Supplementi</div>
            Ingredienti vari da € 0,50 a € 2,00<br/>
            Mozzarella di bufala / Burrata · € 2,50<br/>
            Impasto integrale / Kamut · € 1,50
          </div>
          <div>
            <div className="font-display text-lg text-char mb-2">Bevande</div>
            Acqua 50cl · € 1,50<br/>
            Bibite lattina 33cl · € 2,50<br/>
            Birra nazionale 33cl · € 3,50<br/>
            Birra artigianale 50cl · € 5,50
          </div>
          <div>
            <div className="font-display text-lg text-char mb-2">Asporto</div>
            Contenitore d'asporto · € 0,50<br/>
            Disponibile consegna a domicilio<br/>
            Ritiro all'esterno disponibile
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
