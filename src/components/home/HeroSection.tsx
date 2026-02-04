import { SITE_CONFIG } from "@/config/siteConfig";
import { Phone, Clock, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-dental.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient pattern-overlay pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Interno dello studio dentistico con moderna attrezzatura odontoiatrica"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="section-container relative z-10 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="animate-slide-up">
            <p className="text-primary font-medium mb-2">
              {SITE_CONFIG.category} a {SITE_CONFIG.address.city}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Il tuo sorriso,<br />
              <span className="text-primary">la nostra passione</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Cure odontoiatriche professionali in un ambiente moderno e accogliente. 
              Tecnologie all'avanguardia per la salute del tuo sorriso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${SITE_CONFIG.phone}`} className="btn-primary inline-flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                Prenota una visita
              </a>
              <a href="#servizi" className="btn-outline inline-flex items-center justify-center">
                Scopri i servizi
              </a>
            </div>
          </div>

          {/* Info Boxes */}
          <div className="flex flex-col gap-4 animate-slide-up animate-delay-200">
            {/* Phone Box */}
            <div className="info-box flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Telefono</p>
                <a 
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="font-semibold text-foreground hover:text-primary transition-colors"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Hours Box */}
            <div className="info-box flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Orari</p>
                <p className="font-semibold text-foreground">
                  {SITE_CONFIG.hours.lunedi !== "DA INSERIRE" 
                    ? `Lun-Ven: ${SITE_CONFIG.hours.lunedi}`
                    : "Contattaci per gli orari"
                  }
                </p>
              </div>
            </div>

            {/* Address Box */}
            <div className="info-box flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Indirizzo</p>
                <p className="font-semibold text-foreground">
                  {SITE_CONFIG.address.street}, {SITE_CONFIG.address.city}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
