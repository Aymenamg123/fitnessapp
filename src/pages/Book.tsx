import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Book() {
  const navigate = useNavigate();
  const location = useLocation();
  const { ref, isVisible } = useScrollAnimation();
  const [loading, setLoading] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');

  const timeSlots = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTime) return;

    setLoading(true);
    setTimeout(() => {
      navigate('/thank-you', { state: { time: selectedTime, ...location.state } });
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
            Pick Your
            <span className="block text-electric-teal">Strategy Call Time</span>
          </h1>
          <p className="text-xl text-gray-300">
            Choose a time that works best for you. The call will take 30 minutes.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 p-8 md:p-12">
          <div className="mb-8">
            <h2 className="font-bebas text-2xl mb-6">Select a Time Slot</h2>
            <div className="grid grid-cols-2 gap-4">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={`p-4 border transition-all duration-300 ${
                    selectedTime === time
                      ? 'bg-electric-teal/10 border-electric-teal text-electric-teal'
                      : 'bg-black border-gray-700 text-gray-300 hover:border-electric-teal hover:bg-gray-900'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-black border border-gray-700 p-6 mb-8">
            <h3 className="font-bebas text-lg mb-2 text-electric-teal">Your Call Details</h3>
            <p className="text-gray-400">
              {location.state?.name && `Name: ${location.state.name}`}
            </p>
            <p className="text-gray-400">
              {location.state?.email && `Email: ${location.state.email}`}
            </p>
            {selectedTime && (
              <p className="text-gray-400 mt-2">
                <span className="text-electric-teal">Time: </span>{selectedTime}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading || !selectedTime}
            className="w-full bg-electric-teal hover:bg-teal-dark disabled:bg-gray-600 text-black font-bold py-3 text-lg transition-all duration-300 hover:scale-105 uppercase disabled:cursor-not-allowed"
          >
            {loading ? 'Confirming...' : 'Confirm Booking'}
          </button>
        </form>
      </div>
    </div>
  );
}
