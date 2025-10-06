import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.jpeg";  // Ensure this path matches the exact filename
import ThemeToggle from "./ThemeToggle";
import { openPrintableCV } from "@/utils/generateCV";
import CVDownload from "./CVDownload";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="absolute top-6 right-6 z-20">
          <ThemeToggle />
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Photo */}
          <div className="relative">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/20 hover-glow">
              <img 
                src={profilePhoto} 
                alt="Bilel Gnaouia - Graphic Designer UI/UX Designer"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-white font-bold text-sm">IT</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-hero">
                  Hello, I'm{" "}
                  <span className="text-gradient">Bilel Gnaouia</span>
                </h1>
                <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                  Graphique Designer & UI/UX Designer from Tunisia
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Passionate about design, creativity, and user experience. 
                I craft modern visuals and intuitive interfaces that blend aesthetic appeal with functional excellence.
                Dedicated to transforming ideas into engaging designs, I bring brands and digital products to life through innovative graphic design and seamless UI/UX solutions.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="btn-hero">
                  View My Work
                </Button>
                <CVDownload />
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start">
                <Button variant="outline" size="icon" className="hover-lift">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-accent-success rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-3/4 right-10 w-6 h-6 bg-accent-warning rounded-full animate-pulse opacity-60 delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse opacity-40 delay-2000"></div>
    </section>
  );
};

export default Hero;