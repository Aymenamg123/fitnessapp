import { Trophy, Target, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  {
    icon: Trophy,
    title: 'Elite Results',
    description: 'Proven systems that deliver measurable transformations in 90 days or less',
  },
  {
    icon: Target,
    title: 'Personalized Strategy',
    description: 'Custom nutrition and training protocols designed specifically for your lifestyle',
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Optimize energy, focus, and physique without sacrificing your career',
  },
];

export default function Features() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-b from-gray-900 to-black border border-gray-800 hover:border-electric-teal transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <feature.icon className="w-12 h-12 text-electric-teal mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bebas text-2xl mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
