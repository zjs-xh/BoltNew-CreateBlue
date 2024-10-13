import { Button } from '@/components/ui/button';

const newsItems = [
  {
    id: 1,
    title: 'New Collection Launch',
    date: 'May 15, 2023',
    excerpt: 'Introducing our Spring/Summer collection featuring lightweight indigo-dyed linen pieces.',
  },
  {
    id: 2,
    title: 'Indigo Dyeing Workshop',
    date: 'June 1, 2023',
    excerpt: "Join us for a hands-on workshop where you'll learn the basics of indigo dyeing.",
  },
  {
    id: 3,
    title: 'Sustainability Award',
    date: 'April 22, 2023',
    excerpt: 'Indigo Bloom recognized for its commitment to sustainable practices in textile production.',
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-blue-50 py-16 px-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Latest News</h1>
      <div className="max-w-4xl mx-auto">
        {newsItems.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600 mb-4">{item.date}</p>
            <p className="mb-4">{item.excerpt}</p>
            <Button variant="outline">Read More</Button>
          </div>
        ))}
      </div>
    </div>
  );
}