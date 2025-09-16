import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
const SocialProof = () => {
  const testimonials = [{
    name: "Marie L.",
    benefit: "J'ai économisé 9 800 € sans rien gérer !",
    rating: 5,
    avatar: "/lovable-uploads/marie-avatar.png"
  }, {
    name: "Pierre D.",
    benefit: "12 500 € d'économies en 2 minutes de simulation",
    rating: 5,
    avatar: "/lovable-uploads/pierre-avatar.png"
  }, {
    name: "Sophie M.",
    benefit: "Changement fluide, service impeccable !",
    rating: 5,
    avatar: "/lovable-uploads/sophie-avatar.png"
  }];
  return <section className="py-16 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        {/* Insurance logos */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ils nous font confiance</h2>
          <p className="text-lg text-muted-foreground mb-8">Comparateur, en partenariat avec les leaders du marché</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[{
            name: "AXA",
            src: "/lovable-uploads/42628936-f000-4051-9317-876528706bfb.png"
          }, {
            name: "Allianz",
            src: "/lovable-uploads/f6ee4b88-93d7-4740-8fda-7a1815ccd3b3.png"
          }, {
            name: "Generali",
            src: "/lovable-uploads/1a3b1d7b-9674-45d3-ae85-2be5126bb528.png"
          }, {
            name: "Crédit Agricole",
            src: "/lovable-uploads/637b747c-ccde-4ea2-915e-4059101216d5.png"
          }, {
            name: "BNP Paribas",
            src: "/lovable-uploads/6fc268bc-850b-4cef-aa33-d28fd7ab1d71.png"
          }, {
            name: "Société Générale",
            src: "/lovable-uploads/13e62dcc-9bc4-48dc-94a1-bc716cd37741.png"
          }].map((logo, index) => <div key={index} className="w-full aspect-square max-w-[140px] mx-auto bg-white rounded-2xl p-4 flex items-center justify-center" style={{
            boxShadow: '0 6px 18px rgba(16, 24, 40, 0.08)',
            width: 'min(140px, 48vw)'
          }}>
                {logo.src ? <img src={logo.src} alt={`Logo ${logo.name}`} className="max-w-[120px] max-h-[120px] w-auto h-auto object-contain" /> : <div className="text-center text-muted-foreground/30">
                    <div className="w-16 h-16 mx-auto mb-2 border-2 border-dashed border-muted-foreground/20 rounded-lg flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                        <circle cx="12" cy="13" r="3" />
                      </svg>
                    </div>
                    <p className="text-xs">{logo.name}</p>
                  </div>}
              </div>)}
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Ils ont économisé des milliers d'euros</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => <Card key={index} className="card-premium">
                <div className="flex flex-col items-center">
                  <Avatar className="w-20 h-20 mb-4">
                    <AvatarImage 
                      src={testimonial.avatar} 
                      alt={`Photo de ${testimonial.name}`}
                      className="object-cover w-full h-full"
                    />
                    <AvatarFallback>{testimonial.name.split(' ')[0][0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex justify-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="font-medium text-primary mb-2">« {testimonial.benefit} »</p>
                  <p className="text-sm text-muted-foreground">{testimonial.name}</p>
                </div>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default SocialProof;