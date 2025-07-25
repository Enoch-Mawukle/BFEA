import React from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import FloatingRegister from "@/components/ui/floating-register";
import AIChat from "@/components/ui/ai-chat";

const News = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section 
        //className="pt-32 pb-20 bg-gradient-primary text-white">
        //className="pt-32 pb-20 bg-gradient-primary text-white">
        className="relative pt-32 pb-20 text-white min-h-[60vh] flex items-center"
        style={{
          //backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/src/assets/programs/enrichment/programs.jpg)`,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/src/assets/programs/enrichment-programs.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Latest News</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            Stay updated with the latest from Black Family Education Academy.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2 space-y-8">
              <article className="bg-card p-6 rounded-lg border hover-scale">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=400&fit=crop&crop=center" 
                  alt="Students celebrating academic achievement"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <span>January 15, 2024</span>
                  <span className="mx-2">•</span>
                  <span>Program Update</span>
                </div>
                <h2 className="text-2xl font-bold mb-3 text-foreground">Students Excel in Winter Academic Showcase</h2>
                <p className="text-muted-foreground mb-4">
                  Our students demonstrated remarkable growth and achievement at this year's Winter Academic Showcase. 
                  The event highlighted progress across all grade levels, with particularly strong performances in 
                  mathematics, science, and literacy programs.
                </p>
                <a href="#" className="text-primary font-semibold story-link">Read full story →</a>
              </article>

              <article className="bg-card p-6 rounded-lg border hover-scale">
                <img 
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=400&fit=crop&crop=center" 
                  alt="Community gathering and celebration"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <span>January 8, 2024</span>
                  <span className="mx-2">•</span>
                  <span>Community</span>
                </div>
                <h2 className="text-2xl font-bold mb-3 text-foreground">New Partnership Expands Family Support Services</h2>
                <p className="text-muted-foreground mb-4">
                  We're excited to announce a new partnership with the Local Family Resource Center that will provide 
                  additional support services including mental health resources, job training programs, and financial 
                  literacy workshops for families in our community.
                </p>
                <a href="#" className="text-primary font-semibold story-link">Read full story →</a>
              </article>

              <article className="bg-card p-6 rounded-lg border hover-scale">
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=400&fit=crop&crop=center" 
                  alt="Students participating in hands-on learning activities"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <span>December 22, 2023</span>
                  <span className="mx-2">•</span>
                  <span>Achievement</span>
                </div>
                <h2 className="text-2xl font-bold mb-3 text-foreground">Holiday Learning Festival Brings Families Together</h2>
                <p className="text-muted-foreground mb-4">
                  Over 200 families joined us for our annual Holiday Learning Festival, featuring interactive workshops, 
                  cultural celebrations, and educational activities that reinforced learning while celebrating our 
                  community's rich heritage.
                </p>
                <a href="#" className="text-primary font-semibold story-link">Read full story →</a>
              </article>

              <article className="bg-card p-6 rounded-lg border hover-scale">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <span>December 15, 2023</span>
                  <span className="mx-2">•</span>
                  <span>Recognition</span>
                </div>
                <h2 className="text-2xl font-bold mb-3 text-foreground">Academy Receives Excellence in Education Award</h2>
                <p className="text-muted-foreground mb-4">
                  The Black Family Education Academy has been recognized by the State Education Department with the 
                  Excellence in Community Education Award for our innovative approach to family-centered learning 
                  and outstanding student outcomes.
                </p>
                <a href="#" className="text-primary font-semibold story-link">Read full story →</a>
              </article>
            </div>

            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-bold mb-4 text-foreground">Quick Updates</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-sm text-muted-foreground mb-1">Jan 20, 2024</p>
                    <p className="text-foreground">Registration opens for Spring enrichment programs</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-sm text-muted-foreground mb-1">Jan 18, 2024</p>
                    <p className="text-foreground">New volunteer orientation scheduled for February 3rd</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-sm text-muted-foreground mb-1">Jan 12, 2024</p>
                    <p className="text-foreground">Parent-Teacher conferences begin next week</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-b from-primary to-primary-glow text-white p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-4">Stay Connected</h3>
                <p className="text-white/90 mb-4 text-sm">
                  Get the latest news and updates delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <button className="w-full bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded transition-colors">
                    Subscribe to Newsletter
                  </button>
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-white/20 hover:bg-white/30 text-white px-3 py-2 rounded text-sm transition-colors">
                      Facebook
                    </button>
                    <button className="flex-1 bg-white/20 hover:bg-white/30 text-white px-3 py-2 rounded text-sm transition-colors">
                      Twitter
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-bold mb-4 text-foreground">Featured Video</h3>
                <div className="bg-muted rounded-lg h-32 flex items-center justify-center mb-3">
                  <span className="text-muted-foreground">▶ Student Success Stories</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Watch how our programs are making a difference in students' lives.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-bold mb-4 text-foreground">Upcoming Events</h3>
                <div className="space-y-3">
                  <div className="text-sm">
                    <p className="font-semibold text-foreground">Feb 10: Family Math Night</p>
                    <p className="text-muted-foreground">6:00 PM - 8:00 PM</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-foreground">Feb 17: Career Fair</p>
                    <p className="text-muted-foreground">10:00 AM - 2:00 PM</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-foreground">Feb 24: Science Expo</p>
                    <p className="text-muted-foreground">1:00 PM - 4:00 PM</p>
                  </div>
                </div>
                <button className="w-full mt-4 text-primary text-sm font-semibold">View All Events →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingRegister />
      <AIChat />
    </div>
  );
};

export default News;