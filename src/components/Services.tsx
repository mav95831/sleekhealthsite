import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { 
  BookOpen, 
  FileSpreadsheet, 
  BarChart, 
  FileText, 
  GraduationCap, 
  Search, 
  Presentation, 
  Settings 
} from "lucide-react";

const services = [
  {
    title: "Asesoría Integral",
    description: "Guía experta desde la elección del tema hasta la publicación final de tu investigación.",
    icon: BookOpen
  },
  {
    title: "Desarrollo de Protocolos",
    description: "Diseño metodológico riguroso y redacción profesional de protocolos de investigación.",
    icon: FileSpreadsheet
  },
  {
    title: "Análisis de Datos",
    description: "Análisis estadístico avanzado e interpretación de resultados con software especializado.",
    icon: BarChart
  },
  {
    title: "Redacción Científica",
    description: "Apoyo en la redacción y publicación de artículos en revistas indexadas.",
    icon: FileText
  },
  {
    title: "Formación",
    description: "Cursos y talleres personalizados en metodología de investigación.",
    icon: GraduationCap
  },
  {
    title: "Revisiones Sistemáticas",
    description: "Desarrollo de revisiones sistemáticas y meta-análisis con estándares internacionales.",
    icon: Search
  },
  {
    title: "Presentación",
    description: "Diseño de materiales visuales y preparación para defensas de tesis.",
    icon: Presentation
  },
  {
    title: "Servicios Personalizados",
    description: "Soluciones a medida para necesidades específicas de investigación.",
    icon: Settings
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Soluciones integrales para cada etapa de tu investigación
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