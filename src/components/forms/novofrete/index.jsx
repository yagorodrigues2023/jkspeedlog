import styles from "./styles.module.css";
import {DropList,DropListNew} from "../../ui/droplist";
import Input from "../../ui/input";
import { useState } from "react";
import Button from "../../ui/butom";



export default function FormFrete(){

    const empresas = {
        data: ["Elis","Vouga","Dinis",]
    }    

    const utilitarios = {
        data: ["VUC","Van","Fiorino","Moto",]
    }

    const dados ={
        data: ["wilson","kelli",'julio',"layon"]
    }

    const ajudantes ={
        data: ["Juan","Kelli",'Lulio',"Yago","Claudio","Não"]
    }
    
    const [ motorista, setmotorista] = useState("");
    const [ empresa, setEmpresa] = useState("");
    const [ rota, setRota] = useState("")
    const [ destino, setDestino] = useState("")
    const [ veiculo, setVeiculo] = useState("")
    const [ ajudante, setAjudante] = useState("")
    const [ placa, setPlaca] = useState("")


    function enviar(e){
    e.preventDefault();
    let i = {motorista,rota,empresa,destino,veiculo,ajudante,placa}
    console.log(i)
}


    return(
<form onSubmit={enviar}  className={` alinhamentoColumnTop ${styles.form}`}>
            <DropList label={"Motorista"}
                    sethook={setmotorista}
                    hook={motorista}
                    dados={dados} 
            />

            <DropList label={"Empresa"}
                    sethook={setEmpresa}
                    hook={empresa}
                    dados={empresas} 
            />

            <Input 
                label="Placa"
                type="text"
                value={placa}
                onChange={(e)=> setPlaca(e.target.value)}
                placeholder=""
                fontsize={"1.2rem"}
                fontweight={"200"}
                margin={"0rem"}
            />            
            <Input 
                label="Rota"
                type="text"
                value={rota}
                onChange={(e)=> setRota(e.target.value)}
                placeholder=""
                fontsize={"1.2rem"}
                fontweight={"200"}
                margin={"0rem"}
            />
            <Input 
                label="Destino"
                type="text"
                value={destino}
                onChange={(e)=> setDestino(e.target.value)}
                placeholder=""
                fontsize={"1.2rem"}
                fontweight={"200"}
                marginButom={"0rem"}
            />   
            <DropList label={"Veiculo"}
                    sethook={setVeiculo}
                    hook={veiculo}
                    dados={utilitarios}
            /> 

            <DropList label={"Ajudante"}
                    sethook={setAjudante}
                    hook={ajudante}
                    dados={ajudantes}
            /> 
            <Button
            borderRadius={"15px"}
            height={"2.5rem"}
            width={"80%"}
            label={"Enviar"}/>    
        </form>     
    )
}