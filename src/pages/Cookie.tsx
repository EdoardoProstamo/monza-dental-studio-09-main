import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/config/siteConfig";
import { useEffect } from "react";

const Cookie = () => {
  useEffect(() => {
    document.title = `Cookie Policy | ${SITE_CONFIG.name}`;
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
                Cookie Policy
              </h1>

              <div className="prose prose-lg text-muted-foreground space-y-6">
                <section>
                  <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                    Cosa sono i cookie
                  </h2>
                  <p>
                    I cookie sono piccoli file di testo che i siti web visitati inviano 
                    al browser dell'utente, dove vengono memorizzati per essere poi 
                    ritrasmessi agli stessi siti alla visita successiva.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                    Cookie utilizzati da questo sito
                  </h2>
                  <p>
                    Questo sito web utilizza esclusivamente <strong className="text-foreground">cookie tecnici</strong>, 
                    ovvero cookie strettamente necessari per il funzionamento del sito.
                  </p>
                  <p className="mt-4">
                    <strong className="text-foreground">NON utilizziamo:</strong>
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Cookie di profilazione</li>
                    <li>Cookie di terze parti</li>
                    <li>Cookie analitici (Google Analytics o simili)</li>
                    <li>Cookie pubblicitari</li>
                    <li>Cookie social network</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                    Cookie tecnici
                  </h2>
                  <p>
                    I cookie tecnici sono quelli utilizzati al solo fine di effettuare 
                    la trasmissione di una comunicazione su una rete di comunicazione 
                    elettronica, o nella misura strettamente necessaria al fornitore 
                    di un servizio della società dell'informazione esplicitamente 
                    richiesto dal contraente o dall'utente a erogare tale servizio.
                  </p>
                  <p className="mt-4">
                    Per i cookie tecnici non è richiesto il consenso preventivo 
                    dell'utente (art. 122 del Codice Privacy e Provvedimento del 
                    Garante dell'8 maggio 2014).
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                    Gestione dei cookie
                  </h2>
                  <p>
                    L'utente può gestire le preferenze relative ai cookie direttamente 
                    all'interno del proprio browser, impedendone l'installazione. 
                    Si rimanda alle istruzioni del browser utilizzato per maggiori 
                    informazioni sulla gestione dei cookie.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                    Contatti
                  </h2>
                  <p>
                    Per qualsiasi informazione relativa a questa Cookie Policy, 
                    contattare:<br />
                    <strong className="text-foreground">{SITE_CONFIG.name}</strong><br />
                    Tel: {SITE_CONFIG.phoneDisplay}
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

export default Cookie;
