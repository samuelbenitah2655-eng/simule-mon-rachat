import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Clock, TrendingUp } from "lucide-react";
const UrgencySection = () => {
  const [dailyCount, setDailyCount] = useState(31);
  useEffect(() => {
    // Simulate dynamic counter
    const interval = setInterval(() => {
      setDailyCount(prev => prev + Math.floor(Math.random() * 3));
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);
  return <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="card-premium">
            <Clock className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-3">
              Changez à tout moment depuis 2022
            </h3>
            <p className="text-muted-foreground mb-4">
              La loi Lemoine vous permet de changer d'assurance de prêt à tout moment, sans frais ni pénalité.
            </p>
            <div className="bg-accent/10 p-3 rounded-lg border border-accent/20">
              <p className="text-sm font-medium text-accent">
                ✓ 0 € à payer • Simulation gratuite • Sans engagement
              </p>
            </div>
          </Card>

          <Card className="card-premium">
            <TrendingUp className="h-8 w-8 text-accent mb-4" />
            <h3 className="text-lg font-semibold mb-3">
              Activité du jour
            </h3>
            <p className="text-muted-foreground mb-4">
              De plus en plus de propriétaires découvrent leurs économies potentielles.
            </p>
            <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
              <p className="text-2xl font-bold text-primary mb-1">{dailyCount}</p>
              <p className="text-sm text-primary">propriétaires ont vérifié leur assurance aujourd’hui</p>
            </div>
          </Card>
        </div>
      </div>
    </section>;
};
export default UrgencySection;