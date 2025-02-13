import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface ProductPageProps {
  product: Product;
}

const ProductPage = ({ product }: ProductPageProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading product...</p>;
  }

  return (
    <Layout>
      <div className="product-detail">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="product-image"
        />
        <h1>{product.name}</h1>
        <p>{product.description}</p>
      </div>

      <style jsx>{`
        .product-detail {
          text-align: center;
          padding: 20px;
        }
        .product-image {
          object-fit: cover;
          border-radius: 8px;
        }
      `}</style>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("http://localhost:3000/api/products");
  const products: Product[] = await response.json();

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch("http://localhost:3000/api/products");
  const products: Product[] = await response.json();
  const product = products.find((p) => p.id === Number(params?.id));

  if (!product) {
    return { notFound: true };
  }

  return {
    props: { product },
    revalidate: 10, // Revalidate at most every 10 seconds
  };
};

export default ProductPage;
