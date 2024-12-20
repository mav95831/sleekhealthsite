const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">Sobre Nosotros</h2>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-6">
              Con más de una década de experiencia en investigación interdisciplinaria, nuestro equipo combina experticia en ingeniería, economía y ciencias de la salud para ofrecer soluciones integrales en investigación médica.
            </p>
            <p className="mb-6">
              Nuestra filosofía se basa en tres pilares fundamentales:
            </p>
            <ul className="space-y-4 mb-8">
              <li>Compromiso inquebrantable con la calidad metodológica</li>
              <li>Adherencia estricta a principios éticos en investigación</li>
              <li>Búsqueda constante de relevancia científica y práctica</li>
            </ul>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              ["500+", "Proyectos Completados"],
              ["50+", "Publicaciones Indexadas"],
              ["100%", "Satisfacción del Cliente"]
            ].map(([number, text], index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm text-center">
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