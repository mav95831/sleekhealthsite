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
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Advancing Healthcare Through Research Excellence
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We provide comprehensive research services to help healthcare organizations make informed decisions and improve patient outcomes.
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="group"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;