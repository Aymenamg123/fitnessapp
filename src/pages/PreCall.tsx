import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function PreCall() {
  const navigate = useNavigate();
  const location = useLocation();
  const { ref, isVisible } = useScrollAnimation();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    experience: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      navigate('/book', { state: { ...formData } });
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-black font-montserrat text-white py-20 px-4">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="mb-12">
          <h1 className="font-bebas text-5xl md:text-6xl mb-6">
            Almost There
            <span className="block text-electric-teal">Tell Us About Yourself</span>
          </h1>
          <p className="text-xl text-gray-300">
            We need a few details before we schedule your strategy call
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 p-8 md:p-12 space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-black border border-gray-700 focus:border-electric-teal text-white px-4 py-3 transition-colors outline-none placeholder-gray-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-black border border-gray-700 focus:border-electric-teal text-white px-4 py-3 transition-colors outline-none placeholder-gray-500"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full bg-black border border-gray-700 focus:border-electric-teal text-white px-4 py-3 transition-colors outline-none placeholder-gray-500"
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              className="w-full bg-black border border-gray-700 focus:border-electric-teal text-white px-4 py-3 transition-colors outline-none placeholder-gray-500"
              placeholder="25"
              min="18"
              max="100"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Years of Training Experience</label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              className="w-full bg-black border border-gray-700 focus:border-electric-teal text-white px-4 py-3 transition-colors outline-none"
            >
              <option value="">Select experience level</option>
              <option value="0-1">Less than 1 year</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5+">5+ years</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-electric-teal hover:bg-teal-dark disabled:bg-gray-600 text-black font-bold py-3 text-lg transition-all duration-300 hover:scale-105 uppercase disabled:cursor-not-allowed"
          >
            {loading ? 'Processing...' : 'Schedule Strategy Call'}
          </button>
        </form>
      </div>
    </div>
  );
}
