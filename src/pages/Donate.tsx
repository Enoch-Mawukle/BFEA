import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AIChat from "@/components/ui/ai-chat";
import donateBackground from "@/assets/donate-background.jpg";
import { Heart, Users, BookOpen, Award, DollarSign, Zap } from "lucide-react";

const stripePromise = loadStripe("pk_test_XXXXXXXXXXXXXXXXXXXXXXXX"); // Replace with your real Stripe public key

const Donate = () => {
  const [amount, setAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState(0);

  const donationAmounts = [25, 50, 100, 250, 500, 1000];

  const impactAreas = [
    {
      icon: <BookOpen className="w-12 h-12 text-accent" />,
      title: "Academic Programs",
      description: "Fund tutoring, literacy programs, and educational materials for students",
      impact: "$50 provides a month of tutoring for one student",
    },
    {
      icon: <Users className="w-12 h-12 text-accent" />,
      title: "Mentorship Programs",
      description: "Support leadership development and character-building initiatives",
      impact: "$100 sponsors a student in Boys of Valor for a month",
    },
    {
      icon: <Heart className="w-12 h-12 text-accent" />,
      title: "Family Wellness",
      description: "Enable mental health support and family strengthening programs",
      impact: "$250 funds family counseling sessions for a month",
    },
    {
      icon: <Award className="w-12 h-12 text-accent" />,
      title: "Scholarships",
      description: "Provide educational opportunities and remove financial barriers",
      impact: "$500 provides a partial scholarship for one student",
    },
  ];

  const handleCheckout = async (isRecurring = false) => {
    const stripe = await stripePromise;
    const finalAmount = amount || customAmount;
    if (!finalAmount || finalAmount <= 0) return alert("Enter a valid amount");

    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: finalAmount * 100,
        recurring: isRecurring,
      }),
    });

    const session = await res.json();
    await stripe?.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <section
        className="pt-32 pb-20 bg-gradient-primary text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${donateBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Support Our Mission</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto mb-8">
            Your donation fuels education, mentorship, and mental wellness for Black families.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Choose a Donation Amount</h2>
            <p>One-time or monthly—every gift matters</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {donationAmounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => setAmount(amt)}
                  className={`bg-card border-2 p-5 rounded-lg text-center transition-all duration-200 hover:border-accent group ${
                    amount === amt ? "border-accent bg-accent/10" : "border-border"
                  }`}
                >
                  <DollarSign className="w-6 h-6 text-accent mx-auto mb-2" />
                  <span className="text-xl font-bold text-primary">${amt}</span>
                </button>
              ))}
            </div>

            <div className="text-center space-y-6">
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-lg font-medium mb-2">Or enter a custom amount:</p>
                <div className="flex items-center justify-center gap-2">
                  <DollarSign className="w-5 h-5 text-accent" />
                  <input
                    type="number"
                    placeholder="Amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(Number(e.target.value))}
                    className="w-32 px-3 py-2 border border-input rounded-md text-center"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <Button
                  variant="gold"
                  size="xl"
                  className="w-full max-w-md"
                  onClick={() => handleCheckout(false)}
                >
                  <Heart className="w-5 h-5 mr-2" /> Donate Now (One-Time)
                </Button>

                <Button
                  variant="default"
                  size="xl"
                  className="w-full max-w-md"
                  onClick={() => handleCheckout(true)}
                >
                  <Zap className="w-5 h-5 mr-2" /> Donate Monthly
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                🔒 Secure donation via Stripe • Tax-deductible • Receipt provided
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Your Impact</h2>
            <p>See how your donation directly supports our programs and community</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {impactAreas.map((area, index) => (
              <div key={index} className="bg-card rounded-lg shadow-lg p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">{area.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">{area.title}</h3>
                    <p className="text-muted-foreground mb-4">{area.description}</p>
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <p className="text-sm font-medium text-accent">{area.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <AIChat />
    </div>
  );
};

export default Donate;
