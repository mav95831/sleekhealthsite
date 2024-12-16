const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">About Us</h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            With over a decade of experience in healthcare research, our team of experts is dedicated to advancing medical knowledge and improving patient care through rigorous scientific investigation and evidence-based practices.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              ["10+", "Years Experience"],
              ["500+", "Research Projects"],
              ["50+", "Healthcare Partners"]
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