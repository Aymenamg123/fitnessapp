import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Transformation() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl mb-6">
            Who This Is
            <span className="block text-electric-teal">Built For</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            High-performers who refuse to accept mediocrity
          </p>
        </div>

        <div className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-black border border-gray-800 p-8 hover:border-electric-teal transition-all duration-300">
            <h3 className="font-bebas text-3xl mb-4 text-electric-teal">You Are</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-electric-teal mr-3">✓</span>
                Running a 6-7 figure business or leading at executive level
              </li>
              <li className="flex items-start">
                <span className="text-electric-teal mr-3">✓</span>
                Ready to invest in your health and performance
              </li>
              <li className="flex items-start">
                <span className="text-electric-teal mr-3">✓</span>
                Tired of programs that don't fit your demanding schedule
              </li>
              <li className="flex items-start">
                <span className="text-electric-teal mr-3">✓</span>
                Committed to achieving extraordinary physical results
              </li>
            </ul>
          </div>

          <div className="bg-black border border-gray-800 p-8 hover:border-electric-teal transition-all duration-300">
            <h3 className="font-bebas text-3xl mb-4 text-white">You Want</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-electric-teal mr-3">→</span>
                A body that matches your success and ambition
              </li>
              <li className="flex items-start">
                <span className="text-electric-teal mr-3">→</span>
                More energy to dominate your days
              </li>
              <li className="flex items-start">
                <span className="text-electric-teal mr-3">→</span>
                A system that works with your lifestyle, not against it
              </li>
              <li className="flex items-start">
                <span className="text-electric-teal mr-3">→</span>
                Confidence that comes from looking and feeling elite
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
