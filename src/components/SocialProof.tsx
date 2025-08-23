import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
const SocialProof = () => {
  const testimonials = [{
    name: "Marie L.",
    benefit: "J'ai économisé 9 800 € sans rien gérer !",
    rating: 5
  }, {
    name: "Pierre D.",
    benefit: "12 500 € d'économies en 2 minutes de simulation",
    rating: 5
  }, {
    name: "Sophie M.",
    benefit: "Changement gratuit, service impeccable !",
    rating: 5
  }];
  return <section className="py-16 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-8">Ils nous font confiance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => <Card key={index} className="card-premium">
                <div className="flex justify-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="font-medium text-primary mb-2">« {testimonial.benefit} »</p>
                <p className="text-sm text-muted-foreground">{testimonial.name}</p>
              </Card>)}
          </div>
        </div>

        {/* Insurance logos */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-6 text-muted-foreground">
            Partenaires assureurs et banques
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {Array.from({
            length: 6
          }, (_, index) => <div key={index} className="flex items-center justify-center p-4 border-2 border-dashed border-border rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors cursor-pointer group">
                <div className="text-center">
                  <div className="w-full h-[60px] flex items-center justify-center mb-2">
                    {index === 0 ? <img src="/lovable-uploads/42628936-f000-4051-9317-876528706bfb.png" alt="AXA" className="max-h-[60px] w-auto object-contain" /> : <div className="text-muted-foreground/50 group-hover:text-muted-foreground transition-colors">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                          <circle cx="12" cy="13" r="3" />
                        </svg>
                      </div>}
                  </div>
                  {index === 0 ? null : <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                      Logo {index + 1}
                    </p>}
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default SocialProof;