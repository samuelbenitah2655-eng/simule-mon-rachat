import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";

const SimpleCTA = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCTAClick = async () => {
    setIsSubmitting(true);
    
    try {
      // Récupérer l'UID dans l'URL
      const uid = new URLSearchParams(window.location.search).get('uid');
      
      if (!uid) {
        console.error("Paramètre UID manquant dans l'URL");
        setIsSubmitting(false);
        return;
      }

      // Envoyer vers le webhook Make
      await fetch("https://hook.eu2.make.com/xd9w1pqkq82w4pkqgnb0d9sq80i6dtam", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: "cta_click",
          uid,
          submitted_at_iso8601: new Date().toISOString()
        }),
        mode: "no-cors"
      });

      setIsSubmitted(true);

    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="simulation-form" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="card-premium bg-white/95 backdrop-blur-sm">
          <div className="text-center">
            {isSubmitted ? (
              <>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-accent">
                  Votre demande est enregistrée.
                </h2>
                
                <p className="text-muted-foreground mb-8 text-lg">
                  Un conseiller expert en assurance emprunteur vous rappellera sous 48h pour vous présenter vos économies potentielles.
                </p>
                
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>Gratuit</span>
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>Sans engagement</span>
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>Données sécurisées</span>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-accent">
                  Obtenez votre simulation personnalisée
                </h2>
                
                <p className="text-muted-foreground mb-8 text-lg">
                  Découvrez immédiatement combien vous pouvez économiser sur votre assurance de prêt
                </p>
                
                <div className="flex items-center justify-center gap-2 mb-6 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>100% gratuit</span>
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>Sans engagement</span>
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>Données sécurisées</span>
                </div>

                <Button 
                  onClick={handleCTAClick}
                  disabled={isSubmitting}
                  className="btn-hero w-full max-w-md mx-auto"
                >
                  {isSubmitting ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      Recevoir ma simulation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SimpleCTA;