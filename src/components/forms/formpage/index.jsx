import styles from "./styles.module.css";
import logo from "../../../../src/img/logoClaro.png";
import FormFrete from "../novofrete";
import FormEmpresa from "../novaemprensa";
import FormFuncionario from "../novofuncionario";
import CardsPerfil from "../../ui/cardsuperior";
import {DropList,DropListNew} from "../../ui/droplist";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
//import FormEmpresa from "../novaempresa";



export default function FormPage(){

    
    const forms ={
        data: ["Novo Frete","Novo Funcionario",'Nova Empresa']
    }      
    
    //const [ result, setResult] = useState("")
    const [ form, setForm] = useState("")

   
    const COMPONENTES = {
        'Novo Frete': FormFrete,
        'Novo Funcionario': FormFuncionario,
        'Nova Empresa': FormEmpresa,
        }

    const Componente = COMPONENTES[form]

    
    return(
    <div className={` alinhamentoColumnTop ${styles.div}`}>
        <CardsPerfil perfil={logo}/>
        <div className={"alinhamentoRowEsquerda"} style={{width:"100%"}}> 
            <span className="alinhamentoRowCentro" style={{width:"91%"}}>
            <DropListNew className={styles.drop}
                label={"Selecione o Formulario"}
                sethook={setForm}
                hook={form}
                dados={forms}               
            />
            </span>
        <IoIosArrowDown  className={styles.icon}/>
        </div>
        {Componente ? <Componente /> : <FormFrete /> }
        </div>
    )
}