import Image from 'next/image';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 1,
    name: 'Indigo Dyed Scarf',
    description: 'Soft, lightweight scarf with a beautiful indigo pattern.',
    price: 49.99,
    image: 'https://img1.baidu.com/it/u=3941965864,843075014&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
  },
  {
    id: 2,
    name: 'Shibori T-Shirt',
    description: 'Cotton t-shirt with a unique shibori indigo design.',
    price: 39.99,
    image: 'https://img.mp.itc.cn/upload/20170712/eab4cadc1c8b4a0e99f8dfd6f61b8afc_th.jpg',
  },
  {
    id: 3,
    name: 'Indigo Throw Pillow',
    description: 'Decorative throw pillow with an intricate indigo pattern.',
    price: 29.99,
    image: 'https://img2.baidu.com/it/u=1621816084,2681825023&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=646',
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-blue-50 py-16 px-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="relative h-64 mb-4">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
              <Button>Add to Cart</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}