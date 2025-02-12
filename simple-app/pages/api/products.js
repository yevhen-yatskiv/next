export default function handler(req, res) {
  const products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1' },
    { id: 2, name: 'Product 2', description: 'Description of Product 2' },
    // ...more products
  ];

  res.status(200).json(products);
}
