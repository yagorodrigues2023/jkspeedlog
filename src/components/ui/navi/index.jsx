import { NavLink } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { MdPersonOutline } from "react-icons/md";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineClipboardList } from "react-icons/hi";
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
    to="/faturamento"
        className={({ isActive }) =>
  isActive
    ? `${styles.navItem} ${styles.active}`
    : styles.navItem
}

  >
    <MdOutlineAttachMoney />
  </NavLink>
<div className={`alinhamentoRowCentro ${styles.plus}`}>
    <NavLink style={{color:"var(--corSecundaria)"}} to="/new-frete">
      <FaPlus />
    </NavLink>
</div>

  <NavLink
    to="/relatorios"
        className={({ isActive }) =>
  isActive
    ? `${styles.navItem} ${styles.active}`
    : styles.navItem}>
    <HiOutlineClipboardList />
  </NavLink>
  

  <NavLink
    to="/perfil"
    className={({ isActive }) =>
  isActive
    ? `${styles.navItem} ${styles.active}`
    : styles.navItem
}

  >
    <MdPersonOutline />
  </NavLink>
</nav>

  );
}
