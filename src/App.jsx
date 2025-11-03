import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="pricing" className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple pricing</h2>
              <p className="mt-3 text-gray-600">Start free, upgrade when you’re ready. No credit card required.</p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: 'Hobby', price: '$0', features: ['Basic components', 'Community support', 'MIT license'] },
                { name: 'Pro', price: '$19', features: ['All components', 'Email support', 'Commercial use'] },
                { name: 'Team', price: '$49', features: ['Everything in Pro', 'Priority support', 'Team seats'] },
              ].map((tier) => (
                <div key={tier.name} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold">{tier.name}</h3>
                  <p className="mt-2 text-3xl font-bold">{tier.price}<span className="text-base font-medium text-gray-500">/mo</span></p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#get-started" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800">
                    Choose {tier.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
