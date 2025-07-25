import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import FloatingRegister from "@/components/ui/floating-register";
import AIChat from "@/components/ui/ai-chat";

const SocialEmotional = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section 
        className="relative pt-32 pb-20 text-white min-h-[60vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/src/assets/programs/family-health.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Social-Emotional & Family Health</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            Fostering healing, growth, and emotional resilience through reflection and community support.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Wellness & Support Programs</h2>
            <p>Programs like Fatherhood Reimagined and Seat of a Man's Heart promote emotional health</p>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-8">
              Our social-emotional programs address mental health, family wellness, and emotional resilience 
              through culturally responsive approaches and community support.
            </p>
            
            <Button variant="gold" size="lg" asChild>
              <Link to="/register">Access Support Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingRegister />
      <AIChat />
    </div>
  );
};

export default SocialEmotional;