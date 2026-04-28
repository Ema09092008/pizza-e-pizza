import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Storia from "@/components/Storia";
import Recensioni from "@/components/Recensioni";
import Contatti from "@/components/Contatti";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Pizza&pizzA · Pizzeria forno a legna ad Albaredo d'Adige";
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta("description", "Pizza&pizzA — pizzeria con forno a legna a Albaredo d'Adige (VR). 40 anni di tradizione, ingredienti scelti, lievitazione 48h. Sala, asporto e domicilio.");
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Menu />
      <Storia />
      <Recensioni />
      <Contatti />
    </main>
  );
};

export default Index;
