import styles from "./styles.module.css"
import Cards from "../../components/ui/cardfuncao"
import logo from "../../img/logoClaro.png"
import Cardstopo from "../../components/ui/cardtopo";
import CardsPerfil from "../../components/ui/cardsuperior";
import CardPrincipal from "../../components/ui/cardprincipal";

export default function Home() {
  const funcionarios = [
    { nome: "Juan dos Santos", funcao: "MOTORISTA", img: logo },
    { nome: "Maria Silva", funcao: "AJUDANTE", img: logo },
    { nome: "Carlos Pereira", funcao: "SUPERVISOR", img: logo },
  ];

  return (
    <div className={` alinhamentoColumnTop ${styles.div}`}>
        <CardsPerfil perfil={logo}/>
        <Cardstopo />
        <CardPrincipal />
        <Cards funcionarios={funcionarios} />
    </div>
  );
}