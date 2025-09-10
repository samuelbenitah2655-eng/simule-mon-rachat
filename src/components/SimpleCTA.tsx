import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";

const SimpleCTA = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: ""
  });
  const [fieldErrors, setFieldErrors] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: ""
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^0\d{9}$/;
    const cleanPhone = phone.replace(/\s/g, "");
    return phoneRegex.test(cleanPhone);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setFieldErrors(prev => ({ ...prev, [field]: "" }));
    setError("");
  };

  const validateForm = () => {
    const errors = {
      nom: "",
      prenom: "",
      email: "",
      telephone: ""
    };

    if (!formData.nom.trim()) {
      errors.nom = "Le nom est obligatoire";
    }
    if (!formData.prenom.trim()) {
      errors.prenom = "Le prénom est obligatoire";
    }
    if (!formData.email.trim()) {
      errors.email = "L'email est obligatoire";
    } else if (!validateEmail(formData.email)) {
      errors.email = "Format d'email invalide";
    }
    if (!formData.telephone.trim()) {
      errors.telephone = "Le téléphone est obligatoire";
    } else if (!validatePhone(formData.telephone)) {
      errors.telephone = "Format invalide (10 chiffres commençant par 0)";
    }

    setFieldErrors(errors);
    return Object.values(errors).every(error => error === "");
  };

  const isFormValid = () => {
    return formData.nom.trim() && 
           formData.prenom.trim() && 
           validateEmail(formData.email) && 
           validatePhone(formData.telephone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setError("");
    
    try {
      const response = await fetch("https://hook.eu2.make.com/xd9w1pqkq82w4pkqgnb0d9sq80i6dtam", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: formData.nom.trim(),
          prenom: formData.prenom.trim(),
          email: formData.email.trim(),
          telephone: formData.telephone.replace(/\s/g, ""),
          source: "facebook_ads",
          page_url: window.location.href,
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Scroll to the top of the success message
        setTimeout(() => {
          document.getElementById('simulation-form')?.scrollIntoView({ 
            behavior: 'smooth' 
          });
        }, 100);
      } else {
        setError("Une erreur est survenue. Merci de réessayer dans un instant.");
      }

    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setError("Une erreur est survenue. Merci de réessayer dans un instant.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="simulation-form" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="card-premium bg-white/95 backdrop-blur-sm p-8">
          {isSubmitted ? (
            <div className="text-center">
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
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-accent">
                Obtenez votre simulation personnalisée
              </h2>
              
              <p className="text-muted-foreground mb-8 text-lg">
                Découvrez immédiatement combien vous pouvez économiser sur votre assurance de prêt
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-left">
                    <Label htmlFor="nom" className="text-sm font-medium">
                      Nom *
                    </Label>
                    <Input
                      id="nom"
                      type="text"
                      placeholder="Votre nom"
                      value={formData.nom}
                      onChange={(e) => handleInputChange("nom", e.target.value)}
                      required
                      className={fieldErrors.nom ? "border-red-500" : ""}
                    />
                    {fieldErrors.nom && (
                      <p className="text-red-500 text-xs mt-1">{fieldErrors.nom}</p>
                    )}
                  </div>
                  
                  <div className="text-left">
                    <Label htmlFor="prenom" className="text-sm font-medium">
                      Prénom *
                    </Label>
                    <Input
                      id="prenom"
                      type="text"
                      placeholder="Votre prénom"
                      value={formData.prenom}
                      onChange={(e) => handleInputChange("prenom", e.target.value)}
                      required
                      className={fieldErrors.prenom ? "border-red-500" : ""}
                    />
                    {fieldErrors.prenom && (
                      <p className="text-red-500 text-xs mt-1">{fieldErrors.prenom}</p>
                    )}
                  </div>
                </div>
                
                <div className="text-left">
                  <Label htmlFor="email" className="text-sm font-medium">
                    E-mail *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className={fieldErrors.email ? "border-red-500" : ""}
                  />
                  {fieldErrors.email && (
                    <p className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>
                  )}
                </div>
                
                <div className="text-left">
                  <Label htmlFor="telephone" className="text-sm font-medium">
                    Téléphone *
                  </Label>
                  <Input
                    id="telephone"
                    type="tel"
                    placeholder="0123456789"
                    value={formData.telephone}
                    onChange={(e) => handleInputChange("telephone", e.target.value)}
                    required
                    className={fieldErrors.telephone ? "border-red-500" : ""}
                  />
                  {fieldErrors.telephone && (
                    <p className="text-red-500 text-xs mt-1">{fieldErrors.telephone}</p>
                  )}
                </div>

                {error && (
                  <p className="text-red-500 text-sm text-center">{error}</p>
                )}

                <Button 
                  type="submit"
                  disabled={!isFormValid() || isSubmitting}
                  className="btn-hero w-full"
                >
                  {isSubmitting ? "Envoi en cours..." : "Je veux ma simulation gratuite"}
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  100% gratuit — sans engagement — données sécurisées
                </p>
              </form>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};

export default SimpleCTA;