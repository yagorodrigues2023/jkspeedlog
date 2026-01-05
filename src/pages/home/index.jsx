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
        <span className={`alinhamentoRowEsquerda`}
        style={{width: "90%", color:"var(--corTexto)", fontWeight:"500"}}>
          <label>Fucionarios</label>
          <label className={styles.funcionarios} >Ver todos</label>
        </span>

        <Cards funcionarios={funcionarios} />

        <span className={`alinhamentoRowEsquerda`}
        style={{width: "90%", color:"var(--corTexto)", fontWeight:"500"}}>
          <label>Ultimas saidas</label>
          <label className={styles.ver} >Ver todas</label>
        </span>        
    </div>
  );
}