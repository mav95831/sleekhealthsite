import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-32 pb-24 px-4 min-h-[90vh] flex items-center bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Impulsando la Excelencia en Investigación Médica
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transformamos tus ideas en investigaciones sólidas y publicaciones de impacto. Nuestro equipo interdisciplinario te guía en cada paso del proceso investigativo.
            </p>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="group"
            >
              Descubre cómo podemos ayudarte
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="hidden md:block">
            <img
              src="/placeholder.svg"
              alt="Investigación médica"
              className="rounded-lg shadow-xl"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;