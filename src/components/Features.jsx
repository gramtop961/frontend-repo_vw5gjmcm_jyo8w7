import { Shield, Rocket, Star } from 'lucide-react';

const features = [
  {
    title: 'Production-ready',
    description: 'Best practices baked in: accessibility, performance, and clean design patterns.',
    icon: Shield,
  },
  {
    title: 'Blazing fast',
    description: 'Optimized for speed with modern tooling and zero-config performance tweaks.',
    icon: Rocket,
  },
  {
    title: 'Loved by users',
    description: 'Delightful micro-interactions and a thoughtful UI that users actually enjoy.',
    icon: Star,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need to ship</h2>
          <p className="mt-3 text-gray-600">Build with confidence using a carefully curated set of components and sensible defaults.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-1 text-gray-600">{f.description}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              <div className="mt-4 text-sm text-gray-500">No setup headaches. Just start building.</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
