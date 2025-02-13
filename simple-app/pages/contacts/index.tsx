import Layout from "../../components/Layout";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <p>Feel free to reach out to us.</p>
      </div>
    </Layout>
  );
};

export default Contact;
