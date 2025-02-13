import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import logo from "../public/logo.svg";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image src={logo} alt="Marketplace" className={styles.logoImage} />
        <div className={styles.logoText}>Marketplace</div>
      </div>
      <nav className={styles.nav}>
        <Link href="/" legacyBehavior>
          <a className={styles.navLink}>Home</a>
        </Link>
        <Link href="/products" legacyBehavior>
          <a className={styles.navLink}>Products</a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a className={styles.navLink}>Contact</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
