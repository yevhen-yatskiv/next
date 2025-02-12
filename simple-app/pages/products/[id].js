import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <h1>Product Details for {id}</h1>
      <p>Details about product {id} will be displayed here.</p>
    </Layout>
  );
};

export default ProductDetails;
