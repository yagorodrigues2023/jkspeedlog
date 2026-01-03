import styles from "./styles.module.css"
import Cards from "../../components/ui/cardfuncao"
import CardsFuncao from "../../components/ui/cardsuperior";
import logo from "../../img/logoClaro.png"

export default function Home() {
  const funcionarios = [
    { nome: "Juan dos Santos", funcao: "MOTORISTA", img: logo },
    { nome: "Maria Silva", funcao: "AJUDANTE", img: logo },
    { nome: "Carlos Pereira", funcao: "SUPERVISOR", img: logo },
  ];

  return (
    <div className={styles.div}>
        <CardsFuncao perfil={logo}/>
        <Cards funcionarios={funcionarios} />
    </div>
  );
}