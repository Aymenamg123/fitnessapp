import { useLocation, Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ThankYou() {
  const location = useLocation();
  const { ref, isVisible } = useScrollAnimation();
  const time = location.state?.time || '';

  return (
    <div className="min-h-screen bg-black font-montserrat text-white py-20 px-4 flex items-center">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto w-full transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <CheckCircle className="w-24 h-24 text-electric-teal animate-pulse" />
          </div>

          <h1 className="font-bebas text-5xl md:text-6xl mb-6">
            You're All Set
            <span className="block text-electric-teal">Strategy Call Confirmed</span>
          </h1>

          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 p-8 md:p-12 mb-8">
            <h2 className="font-bebas text-2xl mb-6">Call Details</h2>

            <div className="space-y-4 text-left mb-8">
              <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                <span className="text-gray-400">Name</span>
                <span className="text-electric-teal font-semibold">{location.state?.name || 'N/A'}</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                <span className="text-gray-400">Email</span>
                <span className="text-electric-teal font-semibold">{location.state?.email || 'N/A'}</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                <span className="text-gray-400">Phone</span>
                <span className="text-electric-teal font-semibold">{location.state?.phone || 'N/A'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Call Time</span>
                <span className="text-electric-teal font-semibold">{time}</span>
              </div>
            </div>

            <div className="bg-black border border-electric-teal/20 p-6 mb-8">
              <h3 className="font-bebas text-lg mb-3 text-electric-teal">What To Expect</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex gap-2">
                  <span className="text-electric-teal">•</span>
                  <span>We'll discuss your current situation and goals</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-electric-teal">•</span>
                  <span>Identify your biggest barriers to transformation</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-electric-teal">•</span>
                  <span>Create a custom roadmap for your results</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-electric-teal">•</span>
                  <span>Discuss if our program is the right fit</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-400 mb-6">
              A calendar invite has been sent to <span className="text-electric-teal">{location.state?.email}</span>. Check your email and add it to your calendar.
            </p>
          </div>

          <Link
            to="/"
            className="inline-block bg-electric-teal hover:bg-teal-dark text-black font-bold px-8 py-4 transition-all duration-300 hover:scale-105 uppercase tracking-wider"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
