import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Mail, 
  Phone, 
  Globe 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-accent">About Us</h4>
            <p className="text-primary-foreground/80 leading-relaxed">
              Empowering Black families through education, financial literacy, 
              and leadership development programs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-accent">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about/who-we-are" className="footer-link">About</Link>
              <Link to="/programs/core-academic" className="footer-link">Programs</Link>
              <Link to="/news" className="footer-link">News & Events</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
              <Link to="/donate" className="footer-link">Donate</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-accent">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">info@blackfamilyedu.org</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">+1 (448) 488-3608</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">+233 (54) 792-5195</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">blackfamily.edu.org</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 pt-4">
              <a href="https://web.facebook.com/profile.php?id=61569021178244" className="social-icon">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://x.com/BPFWellness" className="social-icon">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/body_perfectionfitness/" className="social-icon">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/body-perfection-fitness/" className="social-icon">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/channel/UCBMo95oVB2uQNVlCuuYvrow" className="social-icon">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-accent">Subscribe</h4>
            <p className="text-primary-foreground/80">
              Get updates on our latest programs and events.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <Button variant="accent" size="sm" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/80">
            &copy; 2025 | All rights reserved by Black Family Education Academy, a 501c3.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;