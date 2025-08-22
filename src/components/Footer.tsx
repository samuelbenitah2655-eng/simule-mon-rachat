import { Shield, FileCheck, Lock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Compliance badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="h-5 w-5" />
            <span className="text-sm font-medium">ORIAS 07 022 237</span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <FileCheck className="h-5 w-5" />
            <span className="text-sm font-medium">Conforme CNIL</span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <Lock className="h-5 w-5" />
            <span className="text-sm font-medium">Données RGPD</span>
          </div>
        </div>

        {/* Main footer text */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Simulation gratuite, sans engagement, données sécurisées
          </p>
          
          {/* Legal links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              CGV
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} - Courtier en assurances - ORIAS n°07 022 237 - 
            Toute reproduction interdite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;