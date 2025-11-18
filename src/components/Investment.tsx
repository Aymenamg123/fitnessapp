import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function Investment() {
  const { ref, isVisible } = useScrollAnimation();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from('leads').insert([formData]);

      if (error) throw error;

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl mb-6">
            Ready To Get
            <span className="block text-electric-teal">Started?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Apply now to see if you qualify for our exclusive coaching program
          </p>
        </div>

        <div className={`bg-black border-2 border-electric-teal p-8 sm:p-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {submitted ? (
            <div className="text-center py-8">
              <div className="font-bebas text-4xl text-electric-teal mb-4">
                Application Received
              </div>
              <p className="text-gray-300 mb-2">
                Thank you for applying! Our team will review your information and get back to you within 24 hours.
              </p>
              <p className="text-gray-400 text-sm">
                Check your email for updates
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 focus:border-electric-teal text-white px-4 py-3 transition-colors outline-none placeholder-gray-500"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 focus:border-electric-teal text-white px-4 py-3 transition-colors outline-none placeholder-gray-500"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 focus:border-electric-teal text-white px-4 py-3 transition-colors outline-none placeholder-gray-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-electric-teal hover:bg-teal-dark disabled:bg-gray-600 text-black font-bold py-4 text-lg transition-all duration-300 hover:scale-105 uppercase tracking-wider disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting...' : 'Apply Now'}
              </button>

              <p className="text-center text-gray-500 text-sm">
                We respect your privacy. Your information is secure.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
