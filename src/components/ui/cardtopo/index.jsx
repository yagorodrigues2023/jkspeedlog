import styles from "./styles.module.css";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegEye } from "react-icons/fa";
import { BsFileEarmarkBarGraph } from "react-icons/bs";


export default function CardsTopo({dados}){
    dados = [
      {  saidas: 3, andamento: 3, total: 20 }

    ]
    
    return(
        <div className={styles.div}>
            <div className= {`alinhamentoColumnCentro ${styles.cards}`}>
                <div className={` alinhamentoRowCentro ${styles.divin}`}>
                    <FaRegEye className={styles.icon}/>
                     <label className={styles.divinLabel}>{dados[0].saidas}</label>
                </div>
               <label className={styles.divEsLabel}>Saidas hoje</label>
            </div>
            <div className= {`alinhamentoColumnCentro ${styles.cards}`}>
                <div className={` alinhamentoRowCentro ${styles.divin}`}>
                    <TbTruckDelivery className={styles.icon}/>
                    <label className={styles.divinLabel}>{dados[0].andamento}</label>
                </div>
                <label className={styles.divEsLabel}> Em andamento</label>
            </div>
            <div className= {`alinhamentoColumnCentro ${styles.cards}`}>
                <div className={` alinhamentoRowCentro ${styles.divin}`}>
                    <BsFileEarmarkBarGraph className={styles.icon}/>
                    <label className={styles.divinLabel}>{dados[0].total}</label>
                </div>
                <label className={styles.divEsLabel}>Total de saida</label>
            </div>           
            
        </div>
    )
}