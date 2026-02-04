import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/config/siteConfig";
import { useEffect } from "react";

const Privacy = () => {
  useEffect(() => {
    document.title = `Privacy Policy | ${SITE_CONFIG.name}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Privacy Policy
              </h1>

              <div className="prose prose-lg text-muted-foreground space-y-6">
                <section>
                  <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                    1. Titolare del Trattamento
                  </h2>
                  <p>
                    Il Titolare del trattamento dei dati personali è:<br />
                    <strong className="text-foreground">{SITE_CONFIG.name}</strong><br />
                    {SITE_CONFIG.address.full}<br />
                    P.IVA: {SITE_CONFIG.piva}<br />
                    Tel: {SITE_CONFIG.phoneDisplay}
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                    2. Tipologia di dati raccolti
                  </h2>
                  <p>
                    Questo sito web non raccoglie dati personali degli utenti attraverso form 
                    di contatto o sistemi di tracciamento. Non vengono utilizzati cookie di 
                    profilazione o strumenti di analytics.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                    3. Dati di navigazione
                  </h2>
                  <p>
                    I sistemi informatici e le procedure software preposte al funzionamento 
                    di questo sito web possono acquisire, nel corso del loro normale esercizio, 
                    alcuni dati personali la cui trasmissione è implicita nell'uso dei protocolli 
                    di comunicazione di Internet (es. indirizzi IP, log di sistema).
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                    4. Cookie
                  </h2>
                  <p>
                    Questo sito utilizza esclusivamente cookie tecnici necessari per il 
                    corretto funzionamento del sito. Non vengono utilizzati cookie di 
                    profilazione o cookie di terze parti.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                    5. Diritti dell'interessato
                  </h2>
                  <p>
                    Ai sensi del Regolamento UE 2016/679 (GDPR), l'interessato ha diritto di:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Accedere ai propri dati personali</li>
                    <li>Richiederne la rettifica o la cancellazione</li>
                    <li>Richiederne la limitazione del trattamento</li>
                    <li>Opporsi al trattamento</li>
                    <li>Richiedere la portabilità dei dati</li>
                  </ul>
                  <p className="mt-4">
                    Per esercitare tali diritti, contattare il Titolare del trattamento 
                    al numero {SITE_CONFIG.phoneDisplay}.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                    6. Modifiche alla Privacy Policy
                  </h2>
                  <p>
                    Il Titolare si riserva il diritto di modificare questa Privacy Policy 
                    in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina.
                  </p>
                </section>

                <p className="text-sm text-muted-foreground mt-8">
                  Ultimo aggiornamento: Febbraio 2026
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
