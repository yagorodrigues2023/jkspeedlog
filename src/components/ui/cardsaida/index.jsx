import styles from "./styles.module.css"
//import logo from "../../../img/logoClaro.png"
import Img from "../img/img"
import { GiSteeringWheel } from "react-icons/gi";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { FaStore } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function CardSaida({dados}){
    if (!dados || dados.length === 0) {
    return <p>Nenhum funcionário cadastrado</p>;
  }


    return(
        <div className={`alinhamentoColumnTop ${styles.container}`}>
            {dados.map((dados, index) =>(

            <div key={index} className={`alinhamentoRowEsquerda ${styles.card}`}>
                <Img src={dados.logo}/>
                <div className={`alinhamentoColumnEsquerda ${styles.containerInterno}`}>
                    <div className={`${styles.containerDetalhe}`}>
                        <div className={`alinhamentoRowEsquerda ${styles.containerMotorista}`}>
                           <GiSteeringWheel className={styles.icon} />
                            <label className={styles.label}>{dados.motorista}</label>
                            </div>
                            <label style={{fontSize: "0.7rem",
    color: "var(--corPrimaria)" }} className={`${styles.label}`}>Detalhes</label>                    
                    </div>  
                                    
                    <div className={`alinhamentoRowEsquerda ${styles.containerAjudate}`}>
                        <FaPeopleCarryBox className={styles.icon} />
                        <label className={styles.label}>{dados.ajudate}</label>                      
                    </div>   

                    <div className={`alinhamentoRowEsquerda ${styles.containerDados}`}>
                        <span className={`alinhamentoRowEsquerda `}> <FaStore className={styles.icon}/> <label className={styles.label}>{dados.empresa} </label></span>
                        
                        <span className={`alinhamentoRowEsquerda `}> <FaLocationDot className={styles.icon}/> <label className={styles.label}>{dados.destino} </label></span>

                        <span className={`alinhamentoRowEsquerda `}> <TbTruckDelivery className={styles.icon}/> <label className={styles.label}>{dados.veiculo } </label></span>                                        

                    </div>                       
                </div>
               

            </div>
            ))}
        </div>
    )

}