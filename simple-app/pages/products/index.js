import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Layout>
      <h1>Product Listing</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Link href={`/products/${product.id}`} legacyBehavior>
              <a>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="product-thumbnail"
                />
                <h2>{product.name}</h2>
              </a>
            </Link>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .product-list {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }
        .product-card {
          border: 1px solid #ccc;
          padding: 20px;
          width: 200px;
          text-align: center;
        }
        .product-thumbnail {
          object-fit: cover;
          object-position: center;
          width: 200px;
          height: 200px;
        }
      `}</style>
    </Layout>
  );
};

export default Products;
