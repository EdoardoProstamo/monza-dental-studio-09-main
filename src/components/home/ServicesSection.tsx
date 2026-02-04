import { Link } from "react-router-dom";
import { SERVICES } from "@/config/siteConfig";
import { 
  Sparkles, 
  Sun, 
  Shield, 
  Heart, 
  Smile,
  CircleDot,
  ArrowRight
} from "lucide-react";

import serviceImplants from "@/assets/service-implants.jpg";
import serviceHygiene from "@/assets/service-hygiene.jpg";
import serviceDiagnostic from "@/assets/service-diagnostic.jpg";

const iconMap: Record<string, React.ReactNode> = {
  implant: <CircleDot className="w-6 h-6" />,
  sparkles: <Sparkles className="w-6 h-6" />,
  sun: <Sun className="w-6 h-6" />,
  shield: <Shield className="w-6 h-6" />,
  heart: <Heart className="w-6 h-6" />,
  smile: <Smile className="w-6 h-6" />,
};

const imageMap: Record<string, string> = {
  implantologia: serviceImplants,
  igiene: serviceHygiene,
  conservativa: serviceDiagnostic,
};

const ServicesSection = () => {
  // Mostra solo i primi 3 servizi nella home
  const featuredServices = SERVICES.slice(0, 3);

  return (
    <section id="servizi" className="section-padding pattern-overlay">
      <div className="section-container">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            I nostri servizi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Offriamo una gamma completa di trattamenti odontoiatrici 
            per la cura e la bellezza del tuo sorriso.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {featuredServices.map((service, index) => (
            <div
              key={service.id}
              className={`service-card group animate-slide-up animate-delay-${(index + 1) * 100}`}
            >
              {/* Image */}
              {imageMap[service.id] && (
                <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-xl">
                  <img
                    src={imageMap[service.id]}
                    alt={`${service.name} - Studio Dentistico Dr. Morao`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                {iconMap[service.icon] || <CircleDot className="w-6 h-6" />}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {service.tags.map((tag) => (
                  <span key={tag} className="service-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {service.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <Link
            to="/servizi"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors"
          >
            Vedi tutti i servizi
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
