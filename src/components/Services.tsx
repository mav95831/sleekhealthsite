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
    title: "Asesoría Integral en Investigación",
    description: (
      <>
        <p>Guía experta desde la elección del tema hasta la publicación final de tu investigación.</p>
        <div className="mt-2">
          <strong>Elección del Tema:</strong>
          <ul className="list-disc list-inside mt-1">
            <li>Ayuda en la identificación de temas relevantes y novedosos dentro de su especialidad.</li>
            <li>Revisión de literatura para garantizar originalidad y relevancia clínica.</li>
          </ul>
        </div>
        <div className="mt-2">
          <strong>Planteamiento de la Pregunta de Investigación:</strong>
          <ul className="list-disc list-inside mt-1">
            <li>Uso de métodos como PICO para estructurar preguntas de investigación claras y precisas.</li>
          </ul>
        </div>
      </>
    ),
    icon: BookOpen
  },
  {
    title: "Desarrollo de Protocolos de Investigación",
    description: (
      <>
        <p>Apoyo experto en la redacción y planeación del protocolo de investigación.</p>
        <div className="mt-2">
          <strong>Redacción del Protocolo:</strong>
          <ul className="list-disc list-inside mt-1">
            <li>Elaboración del marco teórico, objetivos, hipótesis y diseño metodológico.</li>
          </ul>
        </div>
        <div className="mt-2">
          <strong>Asesoría Ética:</strong>
          <ul className="list-disc list-inside mt-1">
            <li>Preparación de documentos para la aprobación del comité de ética.</li>
          </ul>
        </div>
        <div className="mt-2">
          <strong>Diseño Metodológico:</strong>
          <ul className="list-disc list-inside mt-1">
            <li>Selección de métodos estadísticos y herramientas de recolección de datos.</li>
            <li>Elaboración de cronogramas y presupuestos ajustados al proyecto.</li>
          </ul>
        </div>
      </>
    ),
    icon: FileSpreadsheet
  },
  {
    title: "Recolección y Análisis de Datos",
    description: (
      <>
        <div className="mt-2">
          <strong>Diseño y Validación de Instrumentos:</strong>
          <ul className="list-disc list-inside mt-1">
            <li>Creación de encuestas, cuestionarios u otros instrumentos.</li>
            <li>Validación de herramientas para garantizar precisión y validez.</li>
          </ul>
        </div>
        <div className="mt-2">
          <strong>Análisis Estadístico:</strong>
          <ul className="list-disc list-inside mt-1">
            <li>Procesamiento de datos con herramientas como SPSS, R o Python.</li>
            <li>Generación de gráficos, tablas y análisis descriptivos e inferenciales.</li>
          </ul>
        </div>
        <div className="mt-2">
          <strong>Interpretación de Resultados:</strong>
          <ul className="list-disc list-inside mt-1">
            <li>Redacción de conclusiones basadas en los hallazgos obtenidos.</li>
          </ul>
        </div>
      </>
    ),
    icon: BarChart
  },
  {
    title: "Redacción y Publicación de Artículos",
    description: (
      <>
        <div className="mt-2">
          <strong>Redacción Científica:</strong>
          <ul className="list-disc list-inside mt-1">
            <li>Estructuración y redacción de artículos siguiendo guías como Vancouver o APA.</li>
            <li>Edición y revisión de manuscritos antes de enviarlos a revistas.</li>
          </ul>
        </div>
        <div className="mt-2">
          <strong>Asesoría para Publicación:</strong>
          <ul className="list-disc list-inside mt-1">
            <li>Identificación de revistas indexadas adecuadas para la publicación.</li>
            <li>Preparación de manuscritos para cumplir con los requisitos editoriales.</li>
          </ul>
        </div>
      </>
    ),
    icon: FileText
  },
  // {
//     title: "Formación",
//     description: "Cursos y talleres personalizados en metodología de investigación.",
//     icon: GraduationCap
//   },
  {
    title: "Asesoría en Revisiones Sistemáticas",
    description: (
      <>
        <div className="mt-2">
          <strong>Búsqueda Bibliográfica:</strong>
          <ul className="list-disc list-inside mt-1">
            <li>Apoyo en búsquedas en bases de datos como PubMed, Scopus o Embase.</li>
          </ul>
        </div>
        <div className="mt-2">
          <strong>Análisis Crítico de Estudios:</strong>
          <ul className="list-disc list-inside mt-1">
            <li>Evaluación de calidad y extracción de datos de los artículos incluidos.</li>
          </ul>
        </div>
      </>
    ),
    icon: Search
  },
  {
    title: "Apoyo en la Presentación de Resultados",
    description: (
      <>
        <div className="mt-2">
          <strong>Diseño de Posters y Presentaciones:</strong>
          <ul className="list-disc list-inside mt-1">
            <li>Creación de materiales visuales para congresos y jornadas científicas.</li>
          </ul>
        </div>
        <div className="mt-2">
          <strong>Preparación para Defensas:</strong>
          <ul className="list-disc list-inside mt-1">
            <li>Simulacros de defensa y asesoría en presentación oral de investigaciones.</li>
          </ul>
        </div>
      </>
    ),
    icon: Presentation
  },
  {
    title: "Servicios Personalizados",
    description: (
      <>
        <div className="mt-2">
          <strong>Corrección y Edición:</strong>
          <ul className="list-disc list-inside mt-1">
            <li>Revisión de estilo, ortografía y formato de documentos científicos.</li>
          </ul>
        </div>
        <div className="mt-2">
          <strong>Consultoría por Etapas:</strong>
          <ul className="list-disc list-inside mt-1">
            <li>Asistencia en etapas específicas según las necesidades del investigador.</li>
          </ul>
        </div>
        <div className="mt-2">
          <strong>Mentoría a Largo Plazo:</strong>
          <ul className="list-disc list-inside mt-1">
            <li>Acompañamiento continuo durante el desarrollo de proyectos complejos.</li>
          </ul>
        </div>
      </>
    ),
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