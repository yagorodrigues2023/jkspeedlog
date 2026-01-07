import styles from "./styles.module.css"
import Cards from "../../components/ui/cardfuncao"
import logo from "../../img/logoClaro.png"
import Cardstopo from "../../components/ui/cardtopo";
import CardsPerfil from "../../components/ui/cardsuperior";
import CardPrincipal from "../../components/ui/cardprincipal";
import CardSaida from "../../components/ui/cardsaida";

export default function Home() {
  const funcionarios = [
    { nome: "Juan dos Santos", funcao: "MOTORISTA", img: logo },
    { nome: "Maria Silva", funcao: "AJUDANTE", img: logo },
    { nome: "Carlos Pereira", funcao: "SUPERVISOR", img: logo },
  ];
  const dados =[
        {logo: logo, motorista: "Wilson Rodrigues", ajudate: "Juan", empresa: "Elis", destino: "São Paulo", veiculo: "VUC"},
        {logo: logo, motorista: "Maria Silva", ajudate: "Kelli", empresa: "Elis", destino: "São Paulo", veiculo: "VUC"},
        {logo: logo, motorista: "Maria Silva", ajudate: "Kelli", empresa: "Elis", destino: "São Paulo", veiculo: "VUC"},
        {logo: logo, motorista: "Maria Silva", ajudate: "Kelli", empresa: "Elis", destino: "São Paulo", veiculo: "VUC"}

  ]

  return (
    <div className={` alinhamentoColumnTop ${styles.div}`}>
        <CardsPerfil perfil={logo}/>
        <Cardstopo />
        <CardPrincipal />
        <span className={` ${styles.ver}`}>
          <label>Fucionarios</label>
          <label style={{ fontSize:"0.9rem"}}>Ver todos</label>
        </span>

        <Cards funcionarios={funcionarios} />

        <span className={` ${styles.ver}`}>
          <label>Ultimas saidas</label>
          <label style={{ fontSize:"0.9rem"}}>Ver todas</label>
        </span> 
        <CardSaida dados={dados} />    
    </div>
  );
}