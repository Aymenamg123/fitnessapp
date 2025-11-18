import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const questions = [
  {
    id: 1,
    question: 'What is your primary fitness goal?',
    options: ['Build muscle', 'Lose fat', 'Both equally', 'Improve performance'],
  },
  {
    id: 2,
    question: 'How many days per week can you commit to training?',
    options: ['2-3 days', '4-5 days', '6+ days', 'Flexible'],
  },
  {
    id: 3,
    question: 'What best describes your current fitness level?',
    options: ['Beginner', 'Intermediate', 'Advanced', 'Elite'],
  },
  {
    id: 4,
    question: 'How serious are you about transforming your physique?',
    options: ['Somewhat serious', 'Very serious', 'Extremely committed', 'Will do whatever it takes'],
  },
];

export default function Quiz() {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [loading, setLoading] = useState(false);

  const handleAnswer = (answer: string) => {
    setAnswers({
      ...answers,
      [questions[currentQuestion].id]: answer,
    });

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/pre-call', { state: { answers } });
      setLoading(false);
    }, 500);
  };

  const isAnswered = questions[currentQuestion].id in answers;

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
            Qualification
            <span className="block text-electric-teal">Quiz</span>
          </h1>
          <p className="text-xl text-gray-300">
            Help us understand if our program is the right fit for you
          </p>
        </div>

        <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 p-8 md:p-12">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-electric-teal font-bebas text-lg">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-electric-teal transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            <h2 className="font-bebas text-3xl mb-8">
              {questions[currentQuestion].question}
            </h2>

            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className={`w-full p-4 text-left border transition-all duration-300 hover:border-electric-teal ${
                    answers[questions[currentQuestion].id] === option
                      ? 'bg-electric-teal/10 border-electric-teal text-electric-teal'
                      : 'bg-black border-gray-700 text-gray-300 hover:bg-gray-900'
                  }`}
                >
                  <span className="font-semibold">{option}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
              className="flex-1 px-6 py-3 border border-gray-700 text-gray-300 hover:border-electric-teal hover:text-electric-teal disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Back
            </button>

            {currentQuestion === questions.length - 1 ? (
              <button
                onClick={handleSubmit}
                disabled={loading || !isAnswered}
                className="flex-1 px-6 py-3 bg-electric-teal hover:bg-teal-dark disabled:bg-gray-600 text-black font-bold transition-all duration-300 hover:scale-105 uppercase disabled:cursor-not-allowed"
              >
                {loading ? 'Next...' : 'Continue'}
              </button>
            ) : (
              <button
                onClick={() => handleAnswer(answers[questions[currentQuestion].id] || '')}
                disabled={!isAnswered}
                className="flex-1 px-6 py-3 bg-electric-teal hover:bg-teal-dark disabled:bg-gray-600 text-black font-bold transition-all duration-300 hover:scale-105 uppercase disabled:cursor-not-allowed"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
