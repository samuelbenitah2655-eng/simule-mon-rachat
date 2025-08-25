const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">
          Mentions légales — Comparo
        </h1>
        
        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Éditeur du site
            </h2>
            <p className="leading-relaxed">
              Le présent site est édité par Comparo, marque commerciale exploitée par Samuel BENITAH, 
              immatriculé au Registre du Commerce et des Sociétés sous le numéro RCS 789 298 759, 
              et inscrit à l'ORIAS sous le numéro 25003275 en qualité de courtier en assurance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Responsable de publication
            </h2>
            <p className="leading-relaxed">
              Samuel BENITAH
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Siège social
            </h2>
            <p className="leading-relaxed">
              2Bis allée de la Pommeraie<br />
              91570 Bièvres – France
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Hébergement
            </h2>
            <p className="leading-relaxed">
              Le site est hébergé par Vercel Inc.<br />
              Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, USA.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Propriété intellectuelle
            </h2>
            <p className="leading-relaxed">
              Le site et l'ensemble de ses contenus (textes, images, graphismes, logos…) 
              sont protégés par le droit de la propriété intellectuelle. Toute reproduction, 
              diffusion ou utilisation sans autorisation est interdite.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;