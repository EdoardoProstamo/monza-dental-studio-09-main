import { SITE_CONFIG } from "@/config/siteConfig";
import { Phone, MapPin, ExternalLink } from "lucide-react";

import ctaImage from "@/assets/cta-smile.jpg";

const ContactCTASection = () => {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={ctaImage}
          alt="Sorriso sano"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
            Prenota la tua visita
          </h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 animate-slide-up animate-delay-100">
            Il primo passo verso un sorriso sano inizia con una visita. 
            Contattaci per fissare un appuntamento.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animate-delay-200">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2 bg-primary-foreground text-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary-foreground/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {SITE_CONFIG.phoneDisplay}
            </a>
            <a
              href={SITE_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-primary-foreground text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Apri su Google Maps
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="mt-8 text-sm text-primary-foreground/80 animate-fade-in">
            <p>{SITE_CONFIG.address.full}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTASection;
