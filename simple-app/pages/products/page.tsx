import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Products = () => {
  interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
  }

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) throw new Error("Failed to fetch products");

        const data = await response.json();
        setProducts(data);
      } catch (err: unknown) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <Layout>
      <h1 className="center">Products</h1>
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <Link
                href={`/products/${product.id}`}
                aria-label={`View details for ${product.name}`}
              >
                <a>
                  <Image
                    src={product.image}
                    alt={product.name || "Product image"}
                    width={200}
                    height={200}
                    className="product-thumbnail"
                  />
                  <h2>{product.name}</h2>
                </a>
              </Link>
              <p>{product.description}</p>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>

      <style jsx>{`
        .product-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 20px;
          padding: 20px;
        }
        @media (min-width: 1200px) {
          .product-list {
            grid-template-columns: repeat(5, 1fr);
          }
        }
        .product-card {
          border: 1px solid #ccc;
          padding: 15px;
          text-align: center;
          border-radius: 10px;
          background-color: rgb(233, 244, 233);
          transition: transform 0.2s ease-in-out;
        }
        .product-card:hover {
          transform: scale(1.05);
        }
        .product-thumbnail {
          object-fit: cover;
          width: 100%;
          height: auto;
          border-radius: 8px;
        }
        .center {
          text-align: center;
        }
      `}</style>
    </Layout>
  );
};

export default Products;
