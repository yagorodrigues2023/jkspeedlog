import styles from "./styles.module.css"
import { FaRegEye } from "react-icons/fa";

export default function CardPrincipal({dados}) {

    dados = {
        valor: "20,000",
        total: 22,
        dia: "04/01",
        hora: "22:30"
    }
    return(
        <div className= {` alinhamentoColumnTop ${styles.container}`}>
            <div className= {` alinhamentoRowEsquerda ${styles.top}`} >
                <div className= {`alinhamentoColumnEsquerda ${styles.cardIn}`}>
                    <label>Saldo total</label>
                    <label> R$: {dados.valor}</label>
                </div>
                <span> <FaRegEye className={styles.icon}/></span>
            </div>
            <span className={styles.line}></span>
            <div className= {`alinhamentoRowEsquerda ${styles.cardGrafico}`}>
                <div className= {`alinhamentoColumnEsquerda ${styles.labelGrafico}`}>
                    <label>Saldo total</label>
                    <label> R$: {dados.valor}</label>
                </div>
                <div className= {`alinhamentoColumnEsquerda ${styles.labelGrafico}`}>
                    <label>Saldo total</label>
                    <label> R$: {dados.valor}</label>
                </div>
                <div className= {`alinhamentoColumnEsquerda ${styles.labelGrafico}`}>
                    <label>Saldo total</label>
                    <label> R$: {dados.valor}</label>
                </div>                                
            </div>         

        </div>
    )
}