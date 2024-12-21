import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-dark to-primary animate-gradient-shift">
      <div className="container px-4 mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Welcome to Your Next Project
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Build something amazing with modern tools and beautiful design
        </p>
        <button className="group inline-flex items-center gap-2 bg-white text-primary-dark px-6 py-3 rounded-lg font-medium transition-all hover:bg-opacity-90">
          Get Started
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};