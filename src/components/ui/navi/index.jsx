import { NavLink } from "react-router-dom";
import { GoHome } from "react-icons/go";
import styles from "./styles.module.css"

export default function BottomNav() {
    
  return (
<nav className={styles.bottomNav}>
  <NavLink
    to="/home"
        className={({ isActive }) =>
  isActive
    ? `${styles.navItem} ${styles.active}`
    : styles.navItem
}

  >
    <GoHome />
  </NavLink>

  <NavLink
    to="/relatorios"
        className={({ isActive }) =>
  isActive
    ? `${styles.navItem} ${styles.active}`
    : styles.navItem
}

  >
    <GoHome />
  </NavLink>

  <NavLink
    to="/perfil"
    className={({ isActive }) =>
  isActive
    ? `${styles.navItem} ${styles.active}`
    : styles.navItem
}

  >
    <GoHome />
  </NavLink>
</nav>

  );
}
