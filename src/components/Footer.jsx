import { Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} VibeLaunch. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a aria-label="GitHub" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50">
              <Github className="h-5 w-5 text-gray-700" />
            </a>
            <a aria-label="Twitter" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50">
              <Twitter className="h-5 w-5 text-gray-700" />
            </a>
            <a aria-label="Email" href="mailto:hello@example.com" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50">
              <Mail className="h-5 w-5 text-gray-700" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
