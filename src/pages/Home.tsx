import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Transformation from '../components/Transformation';
import Process from '../components/Process';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-black font-montserrat text-white">
      <Hero />
      <Features />
      <Transformation />
      <Process />
      <CTA />
    </div>
  );
}
