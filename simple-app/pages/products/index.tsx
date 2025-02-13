import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Products.module.css"; // Ensure correct import path

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
      <h1 className={styles.center}>Products</h1>
      <div className={styles.productList}>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <Link
                href={`/products/${product.id}`}
                aria-label={`View details for ${product.name}`}
              >
                <Image
                  src={product.image}
                  alt={product.name || "Product image"}
                  width={200}
                  height={200}
                  className={styles.productThumbnail}
                />
                <h2>{product.name}</h2>
              </Link>
              <p>{product.description}</p>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </Layout>
  );
};

export default Products;
