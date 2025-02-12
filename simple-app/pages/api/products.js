const products = [
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
];

export default function handler(req, res) {
  res.status(200).json(products);
}
