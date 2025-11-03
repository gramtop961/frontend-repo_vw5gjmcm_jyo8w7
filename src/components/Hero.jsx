import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-200/60 via-white to-white" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-28 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200">
            <Sparkles className="h-4 w-4" /> New: Faster launches, smoother onboarding
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Launch beautiful products in days, not months
          </h1>
          <p className="mt-6 text-lg text-gray-600 sm:text-xl">
            Ship a polished experience with a modern design system, animations, and production-ready components out of the box.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-white hover:bg-gray-800 shadow-lg shadow-gray-900/10"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-gray-900 hover:bg-gray-50"
            >
              Explore Features
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {['Stripe-like polish', 'Fast by default', 'Accessible', 'Responsive'].map((item) => (
            <div key={item} className="rounded-xl border border-gray-200 bg-white/60 p-4 text-center text-sm text-gray-700 shadow-sm">
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
