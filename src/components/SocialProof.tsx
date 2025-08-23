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
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: "AXA", src: "/lovable-uploads/42628936-f000-4051-9317-876528706bfb.png" },
              { name: "Allianz", src: null },
              { name: "Generali", src: null },
              { name: "Crédit Agricole", src: null },
              { name: "BNP Paribas", src: null },
              { name: "Société Générale", src: null }
            ].map((logo, index) => (
              <div 
                key={index}
                className="w-full aspect-square max-w-[140px] mx-auto bg-white rounded-2xl p-4 flex items-center justify-center"
                style={{ 
                  boxShadow: '0 6px 18px rgba(16, 24, 40, 0.08)',
                  width: 'min(140px, 48vw)'
                }}
              >
                {logo.src ? (
                  <img 
                    src={logo.src} 
                    alt={`Logo ${logo.name}`}
                    className="max-w-[120px] max-h-[120px] w-auto h-auto object-contain"
                  />
                ) : (
                  <div className="text-center text-muted-foreground/30">
                    <div className="w-16 h-16 mx-auto mb-2 border-2 border-dashed border-muted-foreground/20 rounded-lg flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
                        <circle cx="12" cy="13" r="3"/>
                      </svg>
                    </div>
                    <p className="text-xs">{logo.name}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;