import { Link } from "react-router-dom";
import { SITE_CONFIG } from "@/config/siteConfig";
import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Info Studio */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground flex items-center justify-center">
                <span className="text-foreground font-bold text-lg">M</span>
              </div>
              <div>
                <p className="font-semibold leading-tight">{SITE_CONFIG.shortName}</p>
                <p className="text-xs text-primary-foreground/70">{SITE_CONFIG.category}</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Cure odontoiatriche professionali nel cuore di Monza.
            </p>
          </div>

          {/* Contatti */}
          <div>
            <h3 className="font-semibold mb-4">Contatti</h3>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{SITE_CONFIG.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a 
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="hover:text-primary-foreground transition-colors"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Link Utili */}
          <div>
            <h3 className="font-semibold mb-4">Link Utili</h3>
            <nav className="flex flex-col gap-2 text-sm text-primary-foreground/80">
              <Link to="/" className="hover:text-primary-foreground transition-colors">
                Home
              </Link>
              <Link to="/servizi" className="hover:text-primary-foreground transition-colors">
                Servizi
              </Link>
              <Link to="/contatti" className="hover:text-primary-foreground transition-colors">
                Contatti
              </Link>
              <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/cookie" className="hover:text-primary-foreground transition-colors">
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>© {currentYear} {SITE_CONFIG.name}. Tutti i diritti riservati.</p>
            <p>P.IVA: {SITE_CONFIG.piva}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
