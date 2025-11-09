import Link from "next/link";
import styles from "./Header.module.css";
import { FaShoppingCart, FaUser } from "react-icons/fa";

export function Header() {
  return (
    <nav className="headerBase">
      <Link href="/dashboard">
        <span className={styles.logoNav}></span>
      </Link>
      <ul className={styles.ulNav}>
        <li>
          <Link href="/dashboard" className={styles.linkStyles}>
            Inicio
          </Link>
        </li>
        <li>
          <Link href="/dashboard/hombres" className={styles.linkStyles}>
            Hombres
          </Link>
        </li>
        <li>
          <Link href="/dashboard/mujeres" className={styles.linkStyles}>
            Mujeres
          </Link>
        </li>
        <div className={styles.wrapperRightLinks}>
          <li>
            <Link href="/dashboard/carrito" className={styles.linkStyles}>
              <FaShoppingCart />
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.linkStyles}>
              <FaUser />
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}