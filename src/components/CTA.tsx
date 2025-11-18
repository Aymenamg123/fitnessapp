import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function CTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 px-4 bg-black">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl mb-6">
          Ready To
          <span className="block text-electric-teal">Transform?</span>
        </h2>

        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Take the first step towards the body and energy levels you deserve
        </p>

        <Link to="/quiz" className="group inline-block bg-electric-teal hover:bg-teal-dark text-black font-bold px-10 py-5 text-xl transition-all duration-300 hover:scale-105 uppercase tracking-wider">
          Apply Now
          <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </Link>

        <p className="text-gray-500 text-sm mt-6">
          Applications reviewed within 24 hours
        </p>
      </div>
    </section>
  );
}
