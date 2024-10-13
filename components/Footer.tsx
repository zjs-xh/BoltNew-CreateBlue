import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Indigo Bloom</h3>
            <p className="text-sm">
              We are passionate about preserving the ancient art of plant-based indigo dyeing
              while innovating for the modern world.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:text-blue-300">Home</Link></li>
              <li><Link href="/products" className="text-sm hover:text-blue-300">Products</Link></li>
              <li><Link href="/news" className="text-sm hover:text-blue-300">News</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-blue-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-blue-300">Facebook</a></li>
              <li><a href="#" className="text-sm hover:text-blue-300">Instagram</a></li>
              <li><a href="#" className="text-sm hover:text-blue-300">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800 text-center">
          <p className="text-sm">&copy; 2023 Indigo Bloom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}