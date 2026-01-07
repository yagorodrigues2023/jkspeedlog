import styles from "./styles.module.css";
import { FaPlus } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import Img from "../img/img";

export default function CardsPerfil({perfil})
 {
  return (
    <div className={styles.div}>
      <div className={`alinhamentoRowEsquerda ${styles.container}`}>
        <Img src={perfil}/>
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
