import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Home, Building2, TrendingUp, User, Users, ArrowLeft, ArrowRight, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    uid: "",
    projectType: "",
    borrowers: "",
    loanAmount: "",
    interestRate: "",
    startDate: "",
    loanDuration: "",
    remainingCapital: "",
    email: ""
  });
  
  const { toast } = useToast();

  // Fonction de debounce pour le calcul automatique
  const debounce = useCallback((func: () => void, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(func, delay);
    };
  }, []);

  const debouncedCalculate = useCallback(
    debounce(() => {
      if (
        formData.loanAmount && 
        parseFloat(formData.loanAmount) > 0 &&
        formData.interestRate && 
        parseFloat(formData.interestRate) >= 0 &&
        formData.loanDuration && 
        parseInt(formData.loanDuration) > 0 &&
        formData.startDate
      ) {
        calculateRemainingCapital();
      }
    }, 300),
    [formData.loanAmount, formData.interestRate, formData.loanDuration, formData.startDate]
  );

  // Déclencher le calcul automatique quand les champs changent
  useEffect(() => {
    if (currentStep === 2) {
      debouncedCalculate();
    }
  }, [currentStep, debouncedCalculate]);

  // Récupérer l'UID depuis l'URL au chargement du composant
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const uid = urlParams.get('uid');
    if (uid) {
      setFormData(prev => ({ ...prev, uid }));
    }
  }, []);

  // Mapper les données du formulaire vers le format JSON attendu par Make.com
  const mapFormDataToMakePayload = () => {
    const projectTypeMapping = {
      "principale": "Résidence principale",
      "secondaire": "Résidence secondaire", 
      "investissement": "Investissement locatif"
    };

    const borrowersMapping = {
      "seul": "Moi",
      "couple": "Moi et mon co-emprunteur"
    };

    return {
      uid: formData.uid || "",
      projet: projectTypeMapping[formData.projectType as keyof typeof projectTypeMapping] || formData.projectType,
      emprunteur: borrowersMapping[formData.borrowers as keyof typeof borrowersMapping] || formData.borrowers,
      montant_pret_initial_eur: formData.loanAmount,
      taux_pret_pct: formData.interestRate,
      date_debut_pret: formData.startDate,
      duree_initiale_ans: formData.loanDuration,
      capital_restant_du_eur: formData.remainingCapital,
      email: formData.email,
      submitted_at_iso8601: new Date().toISOString()
    };
  };

  // Envoyer les données à Make.com
  const submitToMake = async () => {
    const payload = mapFormDataToMakePayload();
    
    try {
      await fetch('https://hook.eu2.make.com/xd9w1pqkq82w4pkqgnb0d9sq80i6dtam', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors', // Éviter les problèmes CORS
        body: JSON.stringify(payload),
      });
      
      return { success: true };
    } catch (error) {
      console.error('Erreur lors de l\'envoi vers Make.com:', error);
      return { success: false, error };
    }
  };

  const calculateRemainingCapital = () => {
    const P = parseFloat(formData.loanAmount) || 0;
    const r = (parseFloat(formData.interestRate) / 100) / 12;
    const n = parseInt(formData.loanDuration) * 12;
    const startDate = new Date(formData.startDate);
    const currentDate = new Date();
    const monthsElapsed = Math.max(0, (currentDate.getFullYear() - startDate.getFullYear()) * 12 + currentDate.getMonth() - startDate.getMonth());

    if (P > 0 && r > 0 && n > 0) {
      const monthlyPayment = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const remainingBalance = P * ((Math.pow(1 + r, n) - Math.pow(1 + r, monthsElapsed)) / (Math.pow(1 + r, n) - 1));
      
      const remaining = Math.max(0, remainingBalance);
      setFormData(prev => ({ 
        ...prev, 
        remainingCapital: remaining.toFixed(0)
      }));
    }
  };

  const scrollToFormTop = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNext = () => {
    if (currentStep === 2) {
      calculateRemainingCapital();
    }
    
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      // Scroll automatique vers le haut du formulaire sur mobile
      setTimeout(scrollToFormTop, 100);
    }
  };

  const handleBack = (step: number) => {
    setCurrentStep(step);
    // Scroll automatique vers le haut du formulaire sur mobile
    setTimeout(scrollToFormTop, 100);
  };

  const handleSubmit = async () => {
    if (!formData.email) {
      toast({
        title: "Email requis",
        description: "Veuillez saisir votre adresse email",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const result = await submitToMake();
      
      if (result.success) {
        // Succès : passer à la page de remerciement
        setCurrentStep(4);
        toast({
          title: "Demande envoyée !",
          description: "Vous recevrez votre simulation par email sous 48h",
        });
      } else {
        // Échec : rester sur l'étape 3 avec message d'erreur
        toast({
          title: "Erreur d'envoi",
          description: "Impossible d'envoyer votre demande. Veuillez réessayer.",
          variant: "destructive"
        });
      }
    } catch (error) {
      // Erreur réseau : rester sur l'étape 3 avec message d'erreur
      toast({
        title: "Erreur réseau",
        description: "Problème de connexion. Veuillez vérifier votre connexion et réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const progressValue = (currentStep / 3) * 100;

  if (currentStep === 4) {
    return (
      <section className="py-16 bg-subtle-gradient">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="card-premium text-center">
            <CheckCircle className="h-16 w-16 text-success mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4">Merci !</h2>
            <p className="text-muted-foreground mb-6">
              Votre demande a bien été prise en compte.
            </p>
            <p className="text-lg">
              Un expert vous contactera sous 48 h pour vous indiquer vos économies potentielles 
              et gérer la suite à 100 %.
            </p>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section ref={formRef} id="simulation-form" className="py-16 bg-subtle-gradient">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Simulation gratuite</h2>
          <Progress value={progressValue} className="w-full max-w-md mx-auto mb-4" />
          <p className="text-sm text-muted-foreground">Étape {currentStep} sur 3</p>
        </div>

        <Card className="card-premium">
          {/* Step 1: Project Type */}
          {currentStep === 1 && (
            <div>
              <h3 className="text-xl font-semibold mb-6">Votre projet</h3>
              
              <div className="mb-6">
                <Label className="text-sm font-medium mb-3 block">Objet du prêt</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { value: "principale", label: "Résidence principale", icon: Home },
                    { value: "secondaire", label: "Résidence secondaire", icon: Building2 },
                    { value: "investissement", label: "Investissement locatif", icon: TrendingUp }
                  ].map(({ value, label, icon: Icon }) => (
                    <div 
                      key={value}
                      className={`card-step ${formData.projectType === value ? 'active' : ''}`}
                      onClick={() => setFormData(prev => ({ ...prev, projectType: value }))}
                    >
                      <Icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <p className="text-sm font-medium text-center">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <Label className="text-sm font-medium mb-3 block">Emprunteur(s) concerné(s)</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { value: "seul", label: "Moi", icon: User },
                    { value: "couple", label: "Moi et mon co-emprunteur", icon: Users }
                  ].map(({ value, label, icon: Icon }) => (
                    <div 
                      key={value}
                      className={`card-step ${formData.borrowers === value ? 'active' : ''}`}
                      onClick={() => setFormData(prev => ({ ...prev, borrowers: value }))}
                    >
                      <Icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <p className="text-sm font-medium text-center">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Button 
                onClick={handleNext} 
                className="btn-primary w-full"
                disabled={!formData.projectType || !formData.borrowers}
              >
                Suivant <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}

          {/* Step 2: Loan Details */}
          {currentStep === 2 && (
            <div>
              <h3 className="text-xl font-semibold mb-6">Votre crédit</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="loanAmount" className="text-sm font-medium">Montant du prêt initial (€)</Label>
                  <Input
                    id="loanAmount"
                    type="number"
                    placeholder="250 000"
                    value={formData.loanAmount}
                    onChange={(e) => setFormData(prev => ({ ...prev, loanAmount: e.target.value }))}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="interestRate" className="text-sm font-medium">Taux de votre prêt (%)</Label>
                  <Input
                    id="interestRate"
                    type="number"
                    step="0.01"
                    placeholder="2.5"
                    value={formData.interestRate}
                    onChange={(e) => setFormData(prev => ({ ...prev, interestRate: e.target.value }))}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="startDate" className="text-sm font-medium">Date de début du prêt</Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="loanDuration" className="text-sm font-medium">Durée initiale (années)</Label>
                  <Input
                    id="loanDuration"
                    type="number"
                    placeholder="25"
                    value={formData.loanDuration}
                    onChange={(e) => setFormData(prev => ({ ...prev, loanDuration: e.target.value }))}
                    className="mt-1"
                  />
                </div>
              </div>

              {formData.remainingCapital && (
                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <Label className="text-sm font-medium text-primary">Capital restant dû calculé</Label>
                  <p className="text-2xl font-bold text-primary mt-1">
                    {parseInt(formData.remainingCapital).toLocaleString()} €
                  </p>
                </div>
              )}

              <div className="flex gap-4 mt-6">
                <Button 
                  variant="outline" 
                  onClick={() => handleBack(1)}
                  className="flex-1"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Retour
                </Button>
                <Button 
                  onClick={handleNext} 
                  className="btn-primary flex-1"
                  disabled={!formData.loanAmount || !formData.interestRate || !formData.startDate || !formData.loanDuration}
                >
                  Suivant <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Contact */}
          {currentStep === 3 && (
            <div>
              <h3 className="text-xl font-semibold mb-6">Vos coordonnées</h3>
              
              <div className="mb-6">
                <Label htmlFor="email" className="text-sm font-medium">Email * (pour recevoir votre simulation)</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre.email@exemple.com"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="mt-1"
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="outline" 
                  onClick={() => handleBack(2)}
                  className="w-full sm:flex-1"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Retour
                </Button>
                <Button 
                  onClick={handleSubmit} 
                  className="btn-hero w-full sm:flex-1 text-sm sm:text-base px-3"
                  disabled={isSubmitting}
                >
                  <Mail className="mr-2 h-4 w-4 flex-shrink-0" /> 
                  {isSubmitting ? "Envoi..." : "Recevoir ma simulation"}
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center mt-4 flex items-center justify-center gap-1">
                <CheckCircle className="h-3 w-3" />
                Simulation 100% gratuite — données sécurisées — sans engagement
              </p>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};

export default MultiStepForm;