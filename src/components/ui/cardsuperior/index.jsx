import styles from "./styles.module.css";
import { FaPlus } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";

export default function CardsPerfil({perfil})
 {
  return (
    <div className={styles.div}>
      <div className={`alinhamentoRowEsquerda ${styles.container}`}>
        <img className={`alinhamentoColumnCentro ${styles.containerCirculo}`} src={perfil} alt="perfil" />
        <div className={`alinhamentoRowEsquerda ${styles.containerDireita}`}>
          <div className={`alinhamentoColumnCentro ${styles.containerCirculo}`} >
              <FaPlus className={styles.icon} />
          </div>
          <div className={`alinhamentoColumnCentro ${styles.containerCirculo}`} >
              <IoMdNotifications className={styles.icon} />
            
          </div>

        </div>

      </div>

      
    </div>
  );
}
