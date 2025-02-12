import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Marketplace</div>
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
