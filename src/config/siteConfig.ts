/**
 * STUDIO DENTISTICO DR. MORAO - CONFIGURAZIONE SITO
 * 
 * Questo file contiene tutte le informazioni configurabili del sito.
 * Modificare SOLO i valori, non la struttura.
 */

export const SITE_CONFIG = {
  // Informazioni Studio
  name: "Studio Dentistico Dr. Morao",
  shortName: "Dr. Morao",
  category: "Studio Dentistico",
  
  // Contatti
  address: {
    street: "Via Dario Niccodemi, 14",
    city: "Monza",
    province: "MB",
    cap: "20900",
    country: "Italia",
    full: "Via Dario Niccodemi, 14 – 20900 Monza (MB), Italia"
  },
  phone: "+39 039 200 1379",
  phoneDisplay: "039 200 1379",
  
  // Dati Fiscali
  piva: "DA INSERIRE",
  
  // Orari (DA INSERIRE)
  hours: {
    lunedi: "DA INSERIRE",
    martedi: "DA INSERIRE",
    mercoledi: "DA INSERIRE",
    giovedi: "DA INSERIRE",
    venerdi: "DA INSERIRE",
    sabato: "Chiuso",
    domenica: "Chiuso"
  },
  
  // Link esterni
  googleMapsUrl: "https://maps.google.com/?q=Via+Dario+Niccodemi+14+Monza+MB+Italia",
  googleReviewsUrl: "DA INSERIRE",
  
  // SEO
  seo: {
    title: "Studio Dentistico Dr. Morao | Dentista a Monza",
    description: "Studio Dentistico Dr. Morao a Monza (MB). Servizi odontoiatrici professionali: implantologia, igiene dentale, sbiancamento, ortodonzia. Prenota una visita.",
    keywords: ["dentista Monza", "studio dentistico Monza", "clinica dentale Monza", "odontoiatra Monza"]
  }
};

export const SITE_THEME = {
  palette: "Medical Blue",
  description: "Bianco + Blu professionale + Grigio acciaio",
  heroStyle: "Hero con mini-box informativi immediati",
  servicesStyle: "Elenco moderno con tag e icone minimal",
  graphicElements: "Pattern geometrici molto leggeri come sfondo",
  gradient: "Gradient leggerissimo applicato solo alla sezione Hero",
  sectionOrder: ["Hero", "Recensioni", "Servizi", "Punti di forza", "FAQ", "Contatti"],
  fonts: "Font di sistema (no Google Fonts)",
  animations: "Fade-in e slide-up leggeri, 200-300ms"
};

// Recensioni reali da Google (inserire manualmente)
export const REVIEWS = [
  {
    id: 1,
    author: "Utente Google",
    rating: 5,
    text: "DA INSERIRE - Recensione reale dalla pagina Google",
    date: "DA INSERIRE"
  },
  {
    id: 2,
    author: "Utente Google",
    rating: 5,
    text: "DA INSERIRE - Recensione reale dalla pagina Google",
    date: "DA INSERIRE"
  },
  {
    id: 3,
    author: "Utente Google",
    rating: 5,
    text: "DA INSERIRE - Recensione reale dalla pagina Google",
    date: "DA INSERIRE"
  }
];

// Servizi offerti
export const SERVICES = [
  {
    id: "implantologia",
    name: "Implantologia",
    description: "Sostituzione di denti mancanti con impianti dentali di ultima generazione per un sorriso naturale e duraturo.",
    tags: ["Chirurgia", "Protesi"],
    icon: "implant"
  },
  {
    id: "igiene",
    name: "Igiene e Prevenzione",
    description: "Pulizia dentale professionale e programmi di prevenzione personalizzati per mantenere la salute orale.",
    tags: ["Prevenzione", "Pulizia"],
    icon: "sparkles"
  },
  {
    id: "sbiancamento",
    name: "Sbiancamento Dentale",
    description: "Trattamenti professionali per ridonare luminosità al tuo sorriso in modo sicuro e controllato.",
    tags: ["Estetica"],
    icon: "sun"
  },
  {
    id: "conservativa",
    name: "Odontoiatria Conservativa",
    description: "Cura delle carie e restauro dei denti danneggiati con materiali estetici di alta qualità.",
    tags: ["Cura", "Restauro"],
    icon: "shield"
  },
  {
    id: "endodonzia",
    name: "Endodonzia",
    description: "Trattamento dei canali radicolari per salvare denti compromessi ed eliminare il dolore.",
    tags: ["Cura"],
    icon: "heart"
  },
  {
    id: "protesi",
    name: "Protesi Dentarie",
    description: "Soluzioni protesiche fisse e mobili per ripristinare funzionalità ed estetica del sorriso.",
    tags: ["Protesi", "Estetica"],
    icon: "smile"
  }
];

// Punti di forza
export const STRENGTHS = [
  {
    title: "Esperienza Professionale",
    description: "Anni di esperienza nel campo dell'odontoiatria con aggiornamento costante."
  },
  {
    title: "Tecnologie Moderne",
    description: "Strumentazione all'avanguardia per diagnosi precise e trattamenti efficaci."
  },
  {
    title: "Approccio Personalizzato",
    description: "Ogni paziente è unico: piani di cura studiati sulle esigenze individuali."
  },
  {
    title: "Ambiente Confortevole",
    description: "Uno studio accogliente dove sentirsi a proprio agio durante ogni visita."
  }
];

// FAQ
export const FAQS = [
  {
    question: "Come posso prenotare un appuntamento?",
    answer: "Può contattarci telefonicamente al numero 039 200 1379 durante gli orari di apertura dello studio."
  },
  {
    question: "Accettate pazienti nuovi?",
    answer: "Sì, accogliamo sempre nuovi pazienti. La prima visita è un momento importante per conoscerci e valutare insieme le necessità."
  },
  {
    question: "Quali forme di pagamento accettate?",
    answer: "Accettiamo pagamenti in contanti, bancomat e carte di credito. È possibile concordare piani di pagamento personalizzati per trattamenti complessi."
  },
  {
    question: "Quanto dura una visita di controllo?",
    answer: "Una visita di controllo standard dura circa 30 minuti, tempo necessario per un esame accurato e rispondere alle sue domande."
  },
  {
    question: "Trattate anche le urgenze?",
    answer: "Sì, riserviamo sempre spazio per le urgenze. In caso di dolore acuto o problema improvviso, contatti subito lo studio."
  }
];
