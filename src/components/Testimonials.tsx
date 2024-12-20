import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const testimonials = [
  {
    name: "Dr. Carlos Rodríguez",
    role: "Residente de Cirugía",
    text: "Su apoyo fue fundamental para publicar mi primer artículo en una revista indexada. El proceso fue claro y profesional.",
    image: "/placeholder.svg"
  },
  {
    name: "Dra. Ana Martínez",
    role: "Investigadora Principal",
    text: "La asesoría estadística que recibimos transformó completamente nuestro análisis de datos. Altamente recomendable.",
    image: "/placeholder.svg"
  },
  {
    name: "Dr. Luis Sánchez",
    role: "Médico Especialista",
    text: "Gracias a su guía, nuestro meta-análisis fue aceptado en una revista de alto impacto. Su experiencia marca la diferencia.",
    image: "/placeholder.svg"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          Lo Que Dicen Nuestros Clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="w-20 h-20 mb-4">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div className="mt-2">
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;