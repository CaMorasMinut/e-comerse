import { Header } from "@/components/common/Header";
import styles from "./dashboard.module.css";

export default function DashboardStyle({ children }) {
  return (
    <div className={styles.mainDashboardWrapper}>
      {/* Barra de navegación */}
      <Header />
      <div className={styles.contentDashboardWrapper}>
        {children}
      </div>
    </div>
  );
}