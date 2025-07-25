import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import FloatingRegister from "@/components/ui/floating-register";
import AIChat from "@/components/ui/ai-chat";

const Mentorship = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section 
        className="relative pt-32 pb-20 text-white min-h-[60vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/src/assets/programs/mentorship-leadership.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Mentorship & Leadership</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            Developing the next generation of leaders through mentorship, character building, and accountability.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Leadership Development Programs</h2>
            <p>The Village, Million Dollar Club, and Boys of Valor programs foster leadership and character</p>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-8">
              Our mentorship programs focus on developing character, leadership skills, and personal accountability 
              through supportive relationships and structured learning experiences.
            </p>
            
            <Button variant="gold" size="lg" asChild>
              <Link to="/register">Join Leadership Programs</Link>
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

export default Mentorship;