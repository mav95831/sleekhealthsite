const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-xl font-semibold mb-4">DataBrain Asesores.</div>
          <p className="text-primary-foreground/80 text-sm">
            © {currentYear} DataBrain Asesores. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;