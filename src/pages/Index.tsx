import { useEffect } from "react";
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

  // Tracking Make webhook on page load
  useEffect(() => {
    const uid = new URLSearchParams(window.location.search).get('uid');
    
    if (uid) {
      fetch("https://hook.eu2.make.com/p57j9aovwu4jeuu3nuuvewzgvbrpxvqh", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: "page_view",
          uid,
          clicked_at_iso8601: new Date().toISOString()
        }),
        mode: "no-cors"
      }).catch(()=>{});
    }
  }, []);

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
