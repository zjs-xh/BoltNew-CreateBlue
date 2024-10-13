import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Indigo Bloom
            </Link>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link></li>
              <li><Link href="/products" className="text-gray-600 hover:text-blue-600">Products</Link></li>
              <li><Link href="/news" className="text-gray-600 hover:text-blue-600">News</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
            </ul>
          </nav>
          <Button>Shop Now</Button>
        </div>
      </div>
    </header>
  );
}