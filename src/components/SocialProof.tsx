import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const SocialProof = () => {
  const testimonials = [
    {
      name: "Marie L.",
      benefit: "J'ai économisé 9 800 € sans rien gérer !",
      rating: 5
    },
    {
      name: "Pierre D.",
      benefit: "12 500 € d'économies en 2 minutes de simulation",
      rating: 5
    },
    {
      name: "Sophie M.",
      benefit: "Changement gratuit, service impeccable !",
      rating: 5
    }
  ];

  const insurers = [
    "AXA", "Allianz", "Generali", "CNP", "Crédit Agricole", "BNP", "Société Générale", "MAIF"
  ];

  return (
    <section className="py-16 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-8">Ils ont économisé des milliers d'euros</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-premium">
                <div className="flex justify-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="font-medium text-primary mb-2">« {testimonial.benefit} »</p>
                <p className="text-sm text-muted-foreground">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Insurance logos */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-6 text-muted-foreground">
            Partenaires assureurs et banques
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
            {insurers.map((insurer, index) => (
              <div 
                key={index}
                className="px-4 py-2 text-sm font-medium text-muted-foreground border border-border rounded-lg"
              >
                {insurer}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;