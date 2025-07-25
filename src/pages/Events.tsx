import React from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import FloatingRegister from "@/components/ui/floating-register";
import AIChat from "@/components/ui/ai-chat";

const Events = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section 
        className="relative pt-32 pb-20 text-white min-h-[60vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/src/assets/hero/hero-1.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Upcoming Events</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            Join us for workshops, seminars, and community gatherings.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground">February 2024</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card p-6 rounded-lg border hover-scale">
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-primary/20 px-3 py-1 rounded-full text-primary text-sm font-semibold">
                        FEB 10
                      </div>
                      <span className="text-muted-foreground text-sm">6:00 PM - 8:00 PM</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Family Math Night</h3>
                    <p className="text-muted-foreground mb-4">
                      Join us for an evening of fun math activities designed for the whole family. 
                      Learn strategies to support your child's mathematical thinking at home.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">📍 Main Campus</span>
                      <button className="text-primary font-semibold text-sm">Register →</button>
                    </div>
                  </div>

                  <div className="bg-card p-6 rounded-lg border hover-scale">
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-primary/20 px-3 py-1 rounded-full text-primary text-sm font-semibold">
                        FEB 17
                      </div>
                      <span className="text-muted-foreground text-sm">10:00 AM - 2:00 PM</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Community Career Fair</h3>
                    <p className="text-muted-foreground mb-4">
                      Explore career opportunities with local employers and organizations. 
                      Resume review, interview tips, and networking opportunities available.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">📍 Community Center</span>
                      <button className="text-primary font-semibold text-sm">Learn More →</button>
                    </div>
                  </div>

                  <div className="bg-card p-6 rounded-lg border hover-scale">
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-primary/20 px-3 py-1 rounded-full text-primary text-sm font-semibold">
                        FEB 24
                      </div>
                      <span className="text-muted-foreground text-sm">1:00 PM - 4:00 PM</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Student Science Expo</h3>
                    <p className="text-muted-foreground mb-4">
                      Celebrate student achievement in STEM with interactive science demonstrations, 
                      project presentations, and hands-on activities for all ages.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">📍 Main Campus</span>
                      <button className="text-primary font-semibold text-sm">Details →</button>
                    </div>
                  </div>

                  <div className="bg-card p-6 rounded-lg border hover-scale">
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-primary/20 px-3 py-1 rounded-full text-primary text-sm font-semibold">
                        FEB 28
                      </div>
                      <span className="text-muted-foreground text-sm">7:00 PM - 8:30 PM</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Parent Education Workshop</h3>
                    <p className="text-muted-foreground mb-4">
                      "Supporting Your Child's Digital Learning" - Learn effective strategies for 
                      managing screen time and enhancing online education experiences.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">📍 Virtual Event</span>
                      <button className="text-primary font-semibold text-sm">Register →</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground">March 2024</h2>
                <div className="space-y-4">
                  <div className="bg-card p-4 rounded-lg border flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/20 px-3 py-1 rounded-full text-primary text-sm font-semibold">
                        MAR 9
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Cultural Heritage Celebration</h3>
                        <p className="text-muted-foreground text-sm">Community-wide celebration of Black history and culture</p>
                      </div>
                    </div>
                    <span className="text-muted-foreground text-sm">11:00 AM - 3:00 PM</span>
                  </div>

                  <div className="bg-card p-4 rounded-lg border flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/20 px-3 py-1 rounded-full text-primary text-sm font-semibold">
                        MAR 16
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Financial Literacy Workshop</h3>
                        <p className="text-muted-foreground text-sm">Learn budgeting, saving, and investment basics</p>
                      </div>
                    </div>
                    <span className="text-muted-foreground text-sm">6:30 PM - 8:00 PM</span>
                  </div>

                  <div className="bg-card p-4 rounded-lg border flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/20 px-3 py-1 rounded-full text-primary text-sm font-semibold">
                        MAR 23
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Spring Reading Festival</h3>
                        <p className="text-muted-foreground text-sm">Author visits, storytelling, and literacy activities</p>
                      </div>
                    </div>
                    <span className="text-muted-foreground text-sm">10:00 AM - 1:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-bold mb-4 text-foreground">Event Categories</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Family Workshops</span>
                    <span className="bg-primary/20 text-primary px-2 py-1 rounded text-sm">8</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Student Events</span>
                    <span className="bg-primary/20 text-primary px-2 py-1 rounded text-sm">5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Community Programs</span>
                    <span className="bg-primary/20 text-primary px-2 py-1 rounded text-sm">6</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Professional Development</span>
                    <span className="bg-primary/20 text-primary px-2 py-1 rounded text-sm">3</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-b from-primary to-primary-glow text-white p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-4">Get Event Notifications</h3>
                <p className="text-white/90 mb-4 text-sm">
                  Never miss an important event. Subscribe to receive notifications about upcoming programs.
                </p>
                <button className="w-full bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded transition-colors">
                  Subscribe to Calendar
                </button>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-bold mb-4 text-foreground">Event Guidelines</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Registration required for most events</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Childcare available upon request</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Materials and refreshments provided</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Parking available on-site</span>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-bold mb-4 text-foreground">Past Event Highlights</h3>
                <div className="space-y-4">
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=300&h=150&fit=crop&crop=center" 
                      alt="Holiday Learning Festival"
                      className="w-full h-24 object-cover rounded mb-2"
                    />
                    <p className="text-sm font-semibold text-foreground">Holiday Learning Festival</p>
                    <p className="text-xs text-muted-foreground">200+ families attended</p>
                  </div>
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=150&fit=crop&crop=center" 
                      alt="Academic Showcase"
                      className="w-full h-24 object-cover rounded mb-2"
                    />
                    <p className="text-sm font-semibold text-foreground">Winter Academic Showcase</p>
                    <p className="text-xs text-muted-foreground">Student achievements celebrated</p>
                  </div>
                </div>
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

export default Events;