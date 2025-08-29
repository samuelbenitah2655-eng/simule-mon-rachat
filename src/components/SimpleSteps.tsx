import { Card } from "@/components/ui/card";
import { MousePointer, Phone, Shield } from "lucide-react";

const SimpleSteps = () => {
  const steps = [
    {
      icon: MousePointer,
      title: "Vous demandez votre simulation",
      description: "Un clic suffit"
    },
    {
      icon: Phone,
      title: "Un expert vous rappelle",
      description: "Simulation claire et gratuite sous 48h"
    },
    {
      icon: Shield,
      title: "Nous gérons tout à 100%",
      description: "Toutes les démarches, si la simulation vous intéresse"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Comment ça marche ?</h2>
          <p className="text-subhero max-w-2xl mx-auto">
            3 étapes simples pour économiser sur votre assurance de prêt
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="card-premium text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
              </div>
              
              <div className="pt-6">
                <step.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleSteps;