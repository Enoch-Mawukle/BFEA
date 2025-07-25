import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import FloatingRegister from "@/components/ui/floating-register";
import AIChat from "@/components/ui/ai-chat";

const BoysOfValor = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section 
        className="relative pt-32 pb-20 text-white min-h-[60vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/src/assets/programs/boys-of-valor.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Boys of Valor Program</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            A year-long character-building program for boys ages 10–17, building purpose, discipline, and emotional strength.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Character Development for Young Men</h2>
            <p>Monthly virtues, reflective journaling, and supportive mentorship for boys becoming leaders</p>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-8">
              The Boys of Valor program is designed specifically for young men, focusing on character development, 
              emotional intelligence, and leadership skills through structured mentorship and self-reflection.
            </p>
            
            <Button variant="gold" size="lg" asChild>
              <Link to="/register">Join Boys of Valor</Link>
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

export default BoysOfValor;