const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Sobre Nosotros</h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Con más de una década de experiencia en investigación en salud, nuestro equipo de expertos está dedicado a avanzar en el conocimiento médico y mejorar la atención al paciente a través de una investigación científica rigurosa y prácticas basadas en evidencia.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              ["10+", "Años de Experiencia"],
              ["500+", "Proyectos de Investigación"],
              ["50+", "Socios Sanitarios"]
            ].map(([number, text], index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">{number}</div>
                <div className="text-gray-600">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;