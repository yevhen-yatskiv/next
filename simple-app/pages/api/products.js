const products = [
  {
    id: 1,
    name: 'AirPods Pro 2', 
    description: 'Pro-level Active Noise Cancellation. Now with a clinical-grade Hearing Aid feature.',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-pro-2-hero-select-202409'
  },
  {
    id: 2,
    name: 'AirPods Max',
    description: 'AirPods Max deliver stunningly detailed, high-fidelity audio. Personalized Spatial Audio with dynamic head tracking for sound that surrounds you.',
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-202409-midnight_FV1'
  },
  {
    id: 3,
    name: 'AirPods 4', 
    description: 'Two models redesigned for exceptional fit and audio performance. Available with Active Noise Cancellation — a first for this design.',
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-4-select-202409_FV1'
  },
];

export default function handler(req, res) {
  res.status(200).json(products);
}
