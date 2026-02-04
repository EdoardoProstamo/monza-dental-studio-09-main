import { SITE_CONFIG } from "@/config/siteConfig";
import { Star, ExternalLink } from "lucide-react";

const ReviewsSection = () => {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className="w-5 h-5 fill-amber-400 text-amber-400"
      />
    ));
  };

  return (
    <section className="section-padding bg-secondary/30">
      <div className="section-container text-center">

        <div className="mb-8 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            L’esperienza dei nostri pazienti
          </h2>

          <div className="flex justify-center gap-1 mb-3">
            {renderStars()}
          </div>

          <p className="text-lg font-medium text-foreground">
            Valutazione media: 4,6 su 5,0
          </p>

          <p className="text-sm text-muted-foreground mb-4">
            Risultato basato su recensioni autentiche e verificate su Google
          </p>

          {SITE_CONFIG.googleReviewsUrl && SITE_CONFIG.googleReviewsUrl !== "DA INSERIRE" && (
            <div className="animate-fade-in">
              <a
                href={SITE_CONFIG.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors"
              >
                Visualizza tutte le testimonianze
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}

          <p className="text-muted-foreground italic mt-5">
            "Professionalità, cura e attenzione alla persona guidano ogni giorno il nostro lavoro"
          </p>

        </div>

      </div>
    </section>
  );
};

export default ReviewsSection;
