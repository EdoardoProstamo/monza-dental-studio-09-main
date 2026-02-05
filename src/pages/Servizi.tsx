import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SERVICES, SITE_CONFIG } from "@/config/siteConfig";
import {
  Sparkles,
  Sun,
  Shield,
  Heart,
  Smile,
  CircleDot,
  Phone
} from "lucide-react";
import { useEffect } from "react";

import serviceImplants from "@/assets/service-implants.jpg";
import serviceHygiene from "@/assets/service-hygiene.jpg";
import serviceDiagnostic from "@/assets/service-diagnostic.jpg";
import serviceSbiancamentoDentale from "@/assets/SbiancamentoDentale.png";
import serviceEndodonzia from "@/assets/Endodonzia.png";
import serviceProtesiDentarie from "@/assets/ProtesiDentarie.png";

const iconMap: Record<string, React.ReactNode> = {
  implant: <CircleDot className="w-8 h-8" />,
  sparkles: <Sparkles className="w-8 h-8" />,
  sun: <Sun className="w-8 h-8" />,
  shield: <Shield className="w-8 h-8" />,
  heart: <Heart className="w-8 h-8" />,
  smile: <Smile className="w-8 h-8" />,
};

const imageMap: Record<string, string> = {
  implantologia: serviceImplants,
  igiene: serviceHygiene,
  conservativa: serviceDiagnostic,
  protesi: serviceProtesiDentarie,
  sbiancamento: serviceSbiancamentoDentale,
  endodonzia: serviceEndodonzia,
};

const Servizi = () => {
  useEffect(() => {
    document.title = `Servizi | ${SITE_CONFIG.name}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-secondary/30">
          <div className="section-container">
            <div className="max-w-3xl animate-slide-up">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                I nostri servizi
              </h1>
              <p className="text-lg text-muted-foreground">
                Una gamma completa di trattamenti odontoiatrici eseguiti con professionalità,
                tecnologie moderne e attenzione al comfort del paziente.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="section-padding">
          <div className="section-container">
            <div className="space-y-16">
              {SERVICES.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-8 items-center animate-slide-up ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.map((tag) => (
                        <span key={tag} className="service-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        {iconMap[service.icon] || <CircleDot className="w-8 h-8" />}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                        {service.name}
                      </h2>
                    </div>
                    <p className="text-muted-foreground mb-6 text-lg">
                      {service.description}
                    </p>
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      Prenota una visita
                    </a>
                  </div>

                  {/* Image */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    {imageMap[service.id] ? (
                      <img
                        src={imageMap[service.id]}
                        alt={`${service.name} - Studio Dentistico Dr. Morao Monza`}
                        className="rounded-2xl shadow-lg w-full h-64 lg:h-80 object-cover"
                      />
                    ) : (
                      <div className="rounded-2xl bg-secondary/50 w-full h-64 lg:h-80 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                          {iconMap[service.icon] || <CircleDot className="w-10 h-10" />}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary">
          <div className="section-container text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hai bisogno di maggiori informazioni?
            </h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Contattaci per una consulenza personalizzata.
              Saremo lieti di rispondere a tutte le tue domande.
            </p>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2 bg-primary-foreground text-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary-foreground/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {SITE_CONFIG.phoneDisplay}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Servizi;
