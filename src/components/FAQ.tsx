import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Puis-je vraiment changer d'assurance ?",
      answer: "Oui. Depuis la loi Lemoine (2022), vous pouvez changer à tout moment, sans frais."
    },
    {
      question: "Est-ce compliqué ?",
      answer: "Non. C'est simple et rapide : nous gérons 100% des démarches pour vous. Vous n'avez rien à faire."
    },
    {
      question: "Est-ce risqué ?",
      answer: (
        <>
          <p className="mb-2">Non, absolument pas. Votre prêt continue normalement : seule l'assurance change, et vous restez couvert en continu.</p>
          <p className="mb-1">👉 La banque ne peut pas s'y opposer, car c'est prévu par la loi.</p>
          <p>👉 Aucun frais ni pénalité ne peuvent vous être appliqués.</p>
        </>
      )
    }
  ];

  return (
    <section className="py-16 bg-subtle-gradient">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Questions fréquentes</h2>
          <p className="text-subhero">
            Toutes les réponses à vos questions sur le changement d'assurance de prêt
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2">
                {typeof faq.answer === 'string' ? faq.answer : faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;