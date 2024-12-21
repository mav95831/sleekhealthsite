import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const projects = [
  {
    title: "Revisión sistemática en Cardiología",
    description: "Revisión sistemática sobre nuevos tratamientos en insuficiencia cardíaca",
    journal: "Revista Española de Cardiología",
    year: "2023"
  },
  {
    title: "Estudio Multicéntrico",
    description: "Análisis de factores de riesgo en diabetes tipo 2",
    journal: "Diabetes Care",
    year: "2022"
  },
  // {
  //   title: "Investigación Clínica",
  //   description: "Evaluación de nueva técnica quirúrgica en cirugía mínimamente invasiva",
  //   journal: "Journal of Surgical Research",
  //   year: "2023"
  // }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          Portafolio de Proyectos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{project.journal}</span>
                  <span>{project.year}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;