import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Microscope, ChartBar, Users, Brain } from "lucide-react";

const services = [
  {
    title: "Investigación Clínica",
    description: "Orientación experta en el diseño y realización de ensayos clínicos con los más altos estándares de calidad y ética.",
    icon: Microscope
  },
  {
    title: "Análisis de Datos",
    description: "Análisis estadístico avanzado e interpretación de datos de investigación para obtener conclusiones significativas.",
    icon: ChartBar
  },
  {
    title: "Participación del Paciente",
    description: "Estrategias para el reclutamiento y retención efectiva de pacientes en estudios clínicos.",
    icon: Users
  },
  {
    title: "Consultoría de Investigación",
    description: "Asesoramiento estratégico sobre metodología de investigación, desarrollo de protocolos y cumplimiento normativo.",
    icon: Brain
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Soluciones integrales de investigación adaptadas a las necesidades de su organización de salud
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;