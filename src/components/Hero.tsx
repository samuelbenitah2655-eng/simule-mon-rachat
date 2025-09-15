import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-couple-house.jpg";

interface HeroProps {
  onScrollToForm: () => void;
}

const Hero = ({ onScrollToForm }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
      {/* Logo Badge */}
      <div className="absolute top-5 left-5 z-20">
        <div className="flex flex-col items-center">
          {/* Logo container with white semi-transparent circle */}
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg border border-white/20">
            <img 
              src="/lovable-uploads/unnamed_4_-Photoroom.png" 
              alt="Logo Assurance Prêt Moins Chère" 
              className="h-44 md:h-56 w-auto object-contain"
            />
          </div>
          {/* Trust text */}
          <div className="mt-2 text-center">
            <p className="text-xs text-gray-600 font-medium bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
              Courtier en assurances certifié ORIAS • Conforme loi Lemoine
            </p>
          </div>
        </div>
      </div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-hero mb-6 max-w-4xl mx-auto">
          Économisez jusqu'à 15 000 € sur votre assurance de prêt
        </h1>
        
        <p className="text-subhero mb-8 max-w-3xl mx-auto text-white/90">0 € à payer — simulation gratuite en 60 secondes — démarches simplifiées</p>
        
        <Button onClick={onScrollToForm} className="btn-hero shadow-premium">
          Je veux ma simulation gratuite
          <ArrowDown className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};
export default Hero;