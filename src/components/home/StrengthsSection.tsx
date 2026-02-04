import { STRENGTHS } from "@/config/siteConfig";
import { Award, Cpu, Users, Home } from "lucide-react";

import studioImage from "@/assets/studio-interior.jpg";

const iconMap = [
  <Award className="w-6 h-6" />,
  <Cpu className="w-6 h-6" />,
  <Users className="w-6 h-6" />,
  <Home className="w-6 h-6" />,
];

const StrengthsSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-slide-up">
            <img
              src={studioImage}
              alt="Sala d'attesa dello studio dentistico Dr. Morao a Monza"
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-xl opacity-20" />
          </div>

          {/* Content */}
          <div className="animate-slide-up animate-delay-200">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perché scegliere il nostro studio
            </h2>
            <p className="text-muted-foreground mb-8">
              La cura del paziente è al centro di ogni nostra decisione. 
              Ecco cosa ci distingue.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {STRENGTHS.map((strength, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    {iconMap[index]}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {strength.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {strength.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;
