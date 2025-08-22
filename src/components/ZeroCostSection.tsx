import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Euro, Gift, Shield } from "lucide-react";

interface ZeroCostSectionProps {
  onScrollToForm: () => void;
}

const ZeroCostSection = ({ onScrollToForm }: ZeroCostSectionProps) => {
  const benefits = [
    {
      icon: Euro,
      title: "0 € à payer",
      description: "Aucun frais caché"
    },
    {
      icon: Gift,
      title: "Simulation gratuite",
      description: "Et sans engagement"
    },
    {
      icon: Shield,
      title: "Changement 100% gratuit",
      description: "Démarches incluses"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="card-premium bg-accent/5 border-accent/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-accent">
              100% gratuit, 0 risque
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <benefit.icon className="h-10 w-10 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button onClick={onScrollToForm} className="btn-hero">
              <CheckCircle className="mr-2 h-5 w-5" />
              Je vérifie mon économie
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ZeroCostSection;