import { useState } from "react";
import styles from "./styles.module.css"
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { GraficoLinha } from "../grafico";


export default function CardPrincipal({dados}) {
    dados = {
        valor: "20.000",
        media: "1.600",
        total: 22,
        dia: "04/01",
        hora: "22:30"
    }
    const [visivel, setVisivel] = useState(false)
    return(
        <div className= {`alinhamentoColumnTop ${styles.container}`}>
            <div className= {` alinhamentoRowEsquerda ${styles.top}`} >
                <div className= {`alinhamentoColumnEsquerda ${styles.cardIn}`}>
                    <label>Saldo total</label>
                    <label> R$: {!visivel ?  dados.valor : "******" }</label>
                </div>
                <span onClick={()=> setVisivel(!visivel)}> 
                    {!visivel ?
                        <FaRegEye className={styles.icon}/>:
                        <FaRegEyeSlash className={styles.icon}/>
                    }
                    </span>
            </div>
            <span className={styles.line}></span>
            <div className= {`alinhamentoRowCentro ${styles.cardGrafico}`}>
                <div className= {`alinhamentoColumnEsquerda ${styles.labelGrafico}`}>
                    <label>Total de saidas</label>
                    <label>{dados.total}</label>
                </div>
                <div className= {`alinhamentoColumnEsquerda ${styles.labelGrafico}`}>
                    <label>Media de saidas</label>
                    <label>R$: {dados.media}</label>
                </div>
                <div className= {`alinhamentoColumnEsquerda ${styles.labelGrafico}`}>
                    <label>Utima atualização</label>
                    <span styles={`alinhamentoColumnEsquerda ${styles.labelGrafico}`}>
                        <label style={{color:"var(--corTexto)" ,marginTop: "0.5rem", fontSize:"1.2rem"}}>Hoje,</label>
                        <label style={{fontSize:"1rem"}}>{dados.hora}</label>
                     </span>
                </div>                             
            </div>
            <div className=" alinhamentoRowEsquerda " style={{width:"100%", marginTop:"1rem"}}><GraficoLinha />   </div>           
        </div>
    )
}