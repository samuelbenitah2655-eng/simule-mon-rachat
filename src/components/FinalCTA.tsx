import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowUp } from "lucide-react";

interface FinalCTAProps {
  onScrollToForm: () => void;
}

const FinalCTA = ({ onScrollToForm }: FinalCTAProps) => {
  return (
    <section className="py-20 bg-premium-gradient text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Prêt à découvrir vos économies ?
        </h2>
        
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Rejoignez les milliers de propriétaires qui ont déjà réduit le coût de leur assurance de prêt
        </p>
        
        <Button 
          onClick={onScrollToForm}
          className="bg-accent hover:bg-accent-hover text-accent-foreground px-6 py-3 text-base md:text-lg font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-300 w-full min-w-[90%] mx-auto max-w-md"
        >
          <ArrowUp className="mr-2 h-5 w-5" />
          Oui, je veux ma simulation gratuite
        </Button>
        
        <p className="text-sm mt-4 opacity-75 flex items-center justify-center gap-1">
          <CheckCircle className="h-4 w-4" />
          100% gratuit — sans engagement — données sécurisées
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;