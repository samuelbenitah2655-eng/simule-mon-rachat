import Hero from "@/components/Hero";
import MultiStepForm from "@/components/MultiStepForm";
import SimpleSteps from "@/components/SimpleSteps";
import SocialProof from "@/components/SocialProof";
import ZeroCostSection from "@/components/ZeroCostSection";
import FAQ from "@/components/FAQ";
import UrgencySection from "@/components/UrgencySection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  const scrollToForm = () => {
    document.getElementById('simulation-form')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen">
      <Hero onScrollToForm={scrollToForm} />
      <MultiStepForm />
      <SimpleSteps />
      <SocialProof />
      <ZeroCostSection onScrollToForm={scrollToForm} />
      <FAQ />
      <UrgencySection />
      <FinalCTA onScrollToForm={scrollToForm} />
      <Footer />
    </div>
  );
};

export default Index;
