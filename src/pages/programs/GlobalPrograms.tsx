import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import FloatingRegister from "@/components/ui/floating-register";
import AIChat from "@/components/ui/ai-chat";

const GlobalPrograms = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section 
        className="relative pt-32 pb-20 text-white min-h-[60vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/src/assets/programs/global-programs.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Global Programs</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            Connecting Black communities across continents through cultural exchange and heritage learning.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Global Connection Programs</h2>
            <p>Building bridges between Ghana and the United States through education and cultural exchange</p>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-8">
              Our Global Programs create meaningful connections between Black communities in Ghana and the United States, 
              fostering cultural understanding and educational opportunities.
            </p>
            
            <Button variant="gold" size="lg" asChild>
              <Link to="/register">Apply for Global Programs</Link>
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

export default GlobalPrograms;