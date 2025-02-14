import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Header.module.css";
import Image from "next/image";
import logo from "../public/logo.svg";

const Header: React.FC = () => {
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  const handleLogoClick = () => {
    if (!isHomePage) {
      router.push("/");
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image
          src={logo}
          alt="Marketplace"
          className={styles.logoImage}
          onClick={handleLogoClick}
          style={{ cursor: isHomePage ? "default" : "pointer" }}
        />
        {isHomePage ? (
          <span className={styles.logoText}>Marketplace</span>
        ) : (
          <Link href="/" className={styles.logoText}>
            <span>Marketplace</span>
          </Link>
        )}
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
