import styles from "./styles.module.css"
import { FaRegEye } from "react-icons/fa";

export default function CardPrincipal({dados}) {

    dados = {
        media: "1,600",
        total: 22,
        dia: "04/01",
        hora: "22:30"
    }
    return(
        <div className= {` alinhamentoColumnTop ${styles.container}`}>
            <div className= {` alinhamentoRowEsquerda ${styles.top}`} >
                <div className= {`alinhamentoColumnEsquerda ${styles.cardIn}`}>
                    <label>Saldo total</label>
                    <label> R$: {dados.media}</label>
                </div>
                <span> <FaRegEye className={styles.icon}/></span>
            </div>
            <span className={styles.line}></span>
            <div className= {`alinhamentoRowEsquerda ${styles.cardGrafico}`}>
                <div className= {`alinhamentoColumnEsquerda ${styles.labelGrafico}`}>
                    <label>Total de saidas</label>
                    <label> {dados.total}</label>
                </div>
                <div className= {`alinhamentoColumnEsquerda ${styles.labelGrafico}`}>
                    <label>Media de saidas</label>
                    <label> R$:{dados.valor}</label>
                </div>
                <div className= {`alinhamentoColumnEsquerda ${styles.labelGrafico}`}>
                    <label>Utima atualização</label>
                    <span className={`alinhamentoRowCentro`}>
                        <label style={{color:"var(--corTexto)" ,marginTop: "0.5rem", fontSize:"1.2rem"}}>Hoje,</label>
                        <label style={{fontSize:"1rem"}}>{dados.hora}</label>
                        
                     </span>
                </div>                                
            </div>         

        </div>
    )
}