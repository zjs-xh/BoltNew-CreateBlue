import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50">
      <div className="relative h-screen">
        <Image
          src="https://5b0988e595225.cdn.sohucs.com/images/20190829/a84240a434434b8cbc2d0d9db23b1b04.jpeg"
          alt="Chinese indigo dyed fabric"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-8">
          <h1 className="text-5xl font-bold mb-4">Welcome to Indigo Bloom</h1>
          <p className="text-xl mb-8 max-w-2xl text-center">
            Discover the ancient art of plant-based indigo dyeing, reimagined for the modern world.
            Our sustainable practices and innovative techniques bring timeless beauty to your wardrobe.
          </p>
          <Button asChild>
            <Link href="/products">Explore Our Products</Link>
          </Button>
        </div>
      </div>

      {/* Rest of the component remains unchanged */}
    </div>
  );
}