const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">
          Politique de confidentialité — Comparo
        </h1>
        
        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Collecte des données
            </h2>
            <p className="leading-relaxed mb-4">
              Dans le cadre de votre simulation d'assurance de prêt, nous collectons les données suivantes :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Informations relatives à votre crédit (montant, durée, taux, date de début).</li>
              <li>Votre adresse email (afin de vous transmettre votre simulation).</li>
              <li>Données techniques (logs, adresse IP, navigateur).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Finalité du traitement
            </h2>
            <p className="leading-relaxed mb-4">
              Ces données sont utilisées exclusivement pour :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Réaliser votre simulation personnalisée.</li>
              <li>Vous transmettre les résultats de la simulation par email.</li>
              <li>Vous recontacter, le cas échéant, dans le cadre de votre projet.</li>
              <li>Améliorer notre service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Base légale
            </h2>
            <p className="leading-relaxed">
              La collecte et le traitement reposent sur votre consentement (article 6.1.a du RGPD).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Durée de conservation
            </h2>
            <p className="leading-relaxed">
              Vos données personnelles sont conservées pour une durée maximale de 3 ans 
              à compter de votre dernière interaction avec Comparo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Partage des données
            </h2>
            <p className="leading-relaxed">
              Vos données peuvent être transmises à des assureurs partenaires ou intermédiaires, 
              uniquement dans le cadre de l'étude et de la mise en œuvre de votre contrat. 
              Elles ne sont pas cédées à des tiers à des fins commerciales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Droits des utilisateurs
            </h2>
            <p className="leading-relaxed mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD), 
              vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Droit d'accès, de rectification et de suppression de vos données.</li>
              <li>Droit de retrait de votre consentement.</li>
              <li>Droit de limitation et d'opposition au traitement.</li>
              <li>Droit de réclamation auprès de la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a>).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Contact
            </h2>
            <p className="leading-relaxed">
              Pour toute demande relative à vos données personnelles, vous pouvez adresser un courrier à :
            </p>
            <p className="leading-relaxed mt-4">
              Comparo – Samuel BENITAH<br />
              2Bis allée de la Pommeraie<br />
              91570 Bièvres – France
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PolitiqueConfidentialite;