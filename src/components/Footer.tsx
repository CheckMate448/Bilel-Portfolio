import { Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">Bilel Gnaouia</h3>
            <p className="text-muted-foreground">
              Graphic & UI/UX Designer passionate about crafting creative visuals 
              and intuitive digital experiences that inspire and engage.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="hover-lift">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <nav className="flex flex-col space-y-2">
              <span className="text-muted-foreground">Graphic Design</span>
              <span className="text-muted-foreground">UI/UX Design</span>
              <span className="text-muted-foreground">Brand Identity</span>
              <span className="text-muted-foreground">Creative Consulting</span>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Bilel Gnaouia. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>in Tunisia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
