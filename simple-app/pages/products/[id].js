import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Product = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/products`)
        .then(response => response.json())
        .then(data => {
          const product = data.find(p => p.id === parseInt(id));
          setProduct(product);
        });
    }
  }, [id]);

  if (!product) {
    return (
      <Layout>
        <h1>Product not found</h1>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1>{product.name}</h1>
      <Image src={product.image} alt={product.name} width={480} height={480} className="product-image" />
      <p>{product.description}</p>
      <style jsx>{`
        .product-image {
          width: 100%;
          height: auto;
        }
      `}</style>
    </Layout>
  );
};

export default Product;
