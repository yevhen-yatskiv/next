import { NextApiRequest, NextApiResponse } from 'next';

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: 'AirPods Pro 2', 
    description: 'Pro-level Active Noise Cancellation. Now with a clinical-grade Hearing Aid feature.',
    image: 'https://images.unsplash.com/photo-1675703342284-cf59dc6f98e3'
  },
  {
    id: 2,
    name: 'AirPods Max',
    description: 'AirPods Max deliver stunningly detailed, high-fidelity audio. Personalized Spatial Audio with dynamic head tracking for sound that surrounds you.',
    image: 'https://images.unsplash.com/photo-1628116709703-c1c9ad550d36'
  },
  {
    id: 3,
    name: 'AirPods 4', 
    description: 'Two models redesigned for exceptional fit and audio performance. Available with Active Noise Cancellation — a first for this design.',
    image: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5'
  },
  {
    id: 4,
    name: 'iPhone 13 Pro',
    description: 'A dramatically more powerful camera system. A display so responsive, every interaction feels new again. The world’s fastest smartphone chip.',
    image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7'
  },
  {
    id: 5,
    name: 'MacBook Pro 16"',
    description: 'The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros.',
    image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7'
  },
  {
    id: 6,
    name: 'iPad Pro',
    description: 'The ultimate iPad experience with the most advanced technology. Discover the most powerful iPad ever.',
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8'
  },
  {
    id: 7,
    name: 'Apple Watch Series 7',
    description: 'The largest, most advanced Always-On Retina display. Breakthrough health innovations. Up to 33% faster charging.',
    image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7'
  },
  {
    id: 8,
    name: 'Apple TV 4K',
    description: 'The new Apple TV 4K brings the best of TV together with your favorite Apple devices and services — in a powerful experience that will transform your living room.',
    image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7'
  },
  {
    id: 9,
    name: 'HomePod mini',
    description: 'Room-filling sound, an intelligent assistant, and smart home control. All private and secure.',
    image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7'
  },
  {
    id: 10,
    name: 'AirTag',
    description: 'Lose your knack for losing things. AirTag is an easy way to keep track of your stuff.',
    image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7'
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(products);
}
