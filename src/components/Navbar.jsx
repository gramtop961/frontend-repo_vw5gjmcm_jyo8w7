import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-500 text-white">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="text-lg">VibeLaunch</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#get-started" className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 transition-colors">
              Get Started
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#get-started"
                className="rounded-md bg-gray-900 px-3 py-2 text-white hover:bg-gray-800"
                onClick={() => setOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
