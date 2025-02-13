import Layout from "../components/Layout";
import Image from "next/image";

const Home = () => {
  return (
    <Layout>
      <h1 className="center">Welcome to Our Store</h1>
      <div className="promo-banner">
        <Image
          src="https://images.unsplash.com/photo-1470309864661-68328b2cd0a5"
          alt="Promo Banner"
          layout="responsive"
          width={1200}
          height={200}
        />
      </div>
      <div className="promo-content">
        <h2>Exclusive Offers</h2>
        <p>
          Check out our latest products and exclusive offers. Do not miss out!
        </p>
      </div>
      <div className="promo-banner">
        <Image
          src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
          alt="Promo Banner"
          layout="responsive"
          width={1200}
          height={200}
        />
      </div>
      <style jsx>{`
        .promo-banner {
          margin: 20px 0;
          width: 100%;
        }
        .promo-content {
          text-align: center;
          margin: 40px 0;
        }
        .center {
          text-align: center;
        }
      `}</style>
    </Layout>
  );
};

export default Home;
