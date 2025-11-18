import { ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Hero() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900"></div>

      <div
        ref={ref}
        className={`relative z-10 max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-electric-teal/10 border border-electric-teal text-electric-teal text-sm font-semibold tracking-wider uppercase">
            Elite Transformation Program
          </span>
        </div>

        <h1 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 leading-none">
          Transform Your Body,
          <span className="block text-electric-teal">Elevate Your Life</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Premium 1-on-1 coaching for executives and entrepreneurs who demand extraordinary results
        </p>

        <button className="group bg-electric-teal hover:bg-teal-dark text-black font-bold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 uppercase tracking-wider">
          Apply For Coaching
          <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-electric-teal" />
      </div>
    </section>
  );
}
