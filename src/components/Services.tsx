import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Microscope, ChartBar, Users, Brain } from "lucide-react";

const services = [
  {
    title: "Clinical Research",
    description: "Expert guidance in designing and conducting clinical trials with the highest standards of quality and ethics.",
    icon: Microscope
  },
  {
    title: "Data Analysis",
    description: "Advanced statistical analysis and interpretation of research data to derive meaningful insights.",
    icon: ChartBar
  },
  {
    title: "Patient Engagement",
    description: "Strategies for effective patient recruitment and retention in clinical studies.",
    icon: Users
  },
  {
    title: "Research Consulting",
    description: "Strategic advice on research methodology, protocol development, and regulatory compliance.",
    icon: Brain
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive research solutions tailored to your healthcare organization's needs
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