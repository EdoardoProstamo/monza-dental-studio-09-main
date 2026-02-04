import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/config/siteConfig";
import { Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import { useEffect } from "react";

const Contatti = () => {
  useEffect(() => {
    document.title = `Contatti | ${SITE_CONFIG.name}`;
    window.scrollTo(0, 0);
  }, []);

  const hours = SITE_CONFIG.hours;
  const daysOfWeek = [
    { key: "lunedi", label: "Lunedì" },
    { key: "martedi", label: "Martedì" },
    { key: "mercoledi", label: "Mercoledì" },
    { key: "giovedi", label: "Giovedì" },
    { key: "venerdi", label: "Venerdì" },
    { key: "sabato", label: "Sabato" },
    { key: "domenica", label: "Domenica" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-secondary/30">
          <div className="section-container">
            <div className="max-w-3xl animate-slide-up">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Contatti
              </h1>
              <p className="text-lg text-muted-foreground">
                Siamo a Monza, pronti ad accoglierti per prenderci cura del tuo sorriso.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="section-padding">
          <div className="section-container">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Phone */}
              <div className="service-card text-center animate-slide-up">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <Phone className="w-8 h-8" />
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  Telefono
                </h2>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="text-lg text-primary font-medium hover:text-primary-dark transition-colors"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  Chiamaci per prenotare
                </p>
              </div>

              {/* Address */}
              <div className="service-card text-center animate-slide-up animate-delay-100">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <MapPin className="w-8 h-8" />
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  Indirizzo
                </h2>
                <p className="text-foreground mb-2">
                  {SITE_CONFIG.address.street}
                </p>
                <p className="text-muted-foreground mb-4">
                  {SITE_CONFIG.address.cap} {SITE_CONFIG.address.city} ({SITE_CONFIG.address.province})
                </p>
                <a
                  href={SITE_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors"
                >
                  Apri su Google Maps
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Hours */}
              <div className="service-card text-center animate-slide-up animate-delay-200">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Orari
                </h2>
                <div className="space-y-2 text-left">
                  {daysOfWeek.map(({ key, label }) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{label}</span>
                      <span className={`font-medium ${
                        hours[key as keyof typeof hours] === "Chiuso" 
                          ? "text-muted-foreground" 
                          : "text-foreground"
                      }`}>
                        {hours[key as keyof typeof hours]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary">
          <div className="section-container text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prenota la tua visita
            </h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Il nostro team è a disposizione per rispondere alle tue domande 
              e fissare un appuntamento.
            </p>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2 bg-primary-foreground text-foreground px-8 py-4 rounded-lg font-medium text-lg hover:bg-primary-foreground/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Chiama ora: {SITE_CONFIG.phoneDisplay}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contatti;
