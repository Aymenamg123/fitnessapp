export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-black border-t border-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-bebas text-2xl text-electric-teal">
            ELITE FITNESS
          </div>

          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-electric-teal transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-electric-teal transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-electric-teal transition-colors">Contact</a>
          </div>
        </div>

        <div className="text-center mt-8 text-sm text-gray-600">
          © {new Date().getFullYear()} Elite Fitness Transformation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
