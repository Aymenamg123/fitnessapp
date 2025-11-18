import { useScrollAnimation } from '../hooks/useScrollAnimation';

const steps = [
  {
    number: '01',
    title: 'Application',
    description: 'Submit your application and schedule a strategy call',
  },
  {
    number: '02',
    title: 'Strategy Session',
    description: 'Deep dive into your goals, challenges, and create your custom roadmap',
  },
  {
    number: '03',
    title: 'Transformation',
    description: '90-day intensive program with weekly coaching and 24/7 support',
  },
  {
    number: '04',
    title: 'New Standard',
    description: 'Maintain your results with lifetime access to our alumni network',
  },
];

export default function Process() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl mb-6">
            The
            <span className="block text-electric-teal">Process</span>
          </h2>
        </div>

        <div className={`space-y-8 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative flex flex-col sm:flex-row items-start gap-6 p-8 bg-gradient-to-r from-gray-900 to-black border border-gray-800 hover:border-electric-teal transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="font-bebas text-6xl text-electric-teal/20 group-hover:text-electric-teal/40 transition-colors duration-300">
                  {step.number}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bebas text-3xl mb-2 text-white">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
