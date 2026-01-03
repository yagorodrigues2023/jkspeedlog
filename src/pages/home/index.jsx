import styles from "./styles.module.css"
import Cards from "../../components/ui/cards"
import logo from "../../img/logoClaro.png"

export default function Home(){
    
    return(
        <div className={styles.div}>
            <Cards
            img={logo}
            nome = 'juan dos santos' 
            funcao = "MOTORISTA" />
                        <Cards
            img={logo}
            nome = 'juan dos santos' 
            funcao = "MOTORISTA" />

        </div>
    )
}
