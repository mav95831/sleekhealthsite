import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import { Facebook, MessageCircle, Twitter, Phone, Mail } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor, complete todos los campos",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const form = e.target as HTMLFormElement;
      await fetch("https://formsubmit.co/mav95831@gmail.com", {
        method: "POST",
        body: new FormData(form)
      });

      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo pronto.",
      });
      
      setFormData({ name: "", email: "", message: "" });
      form.reset();
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Por favor, intente nuevamente.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/TU_NUMERO_AQUI",
      color: "text-green-500 hover:text-green-600"
    }
    // {
    //   name: "Facebook",
    //   icon: Facebook,
    //   href: "https://facebook.com/TU_PAGINA",
    //   color: "text-blue-600 hover:text-blue-700"
    // },
    // {
    //   name: "Twitter",
    //   icon: Twitter,
    //   href: "https://twitter.com/TU_USUARIO",
    //   color: "text-blue-400 hover:text-blue-500"
    // }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">Contáctanos</h2>
          
          {/* Información de contacto directa */}
          <div className="mb-8 space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-primary" />
              <span>+34 XXX XXX XXX</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-primary" />
              <span>contacto@tudominio.com</span>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${social.color}`}
                aria-label={social.name}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Correo electrónico
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="tu@correo.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="¿Cómo podemos ayudarte?"
                rows={4}
              />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Enviando..." : "Enviar Mensaje"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;