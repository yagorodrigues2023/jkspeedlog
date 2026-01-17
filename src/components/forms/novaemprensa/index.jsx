import styles from "./styles.module.css";
import {DropList,DropListNew} from "../../ui/droplist";
import Input from "../../ui/input";
import { useState } from "react";
import Button from "../../ui/butom";



export default function FormEmpresa (){

    const [ nome, setNome] = useState("");
    const [ cpf, setCpf] = useState("")


    function enviar(e){
    e.preventDefault();
    console.log({nome,cpf})}


    return(
        <form onSubmit={enviar}  className={` alinhamentoColumnTop ${styles.form}`}>
            <Input 
                label="Razão social"
                type="text"
                value={nome}
                onChange={(e)=> setNome(e.target.value)}
                placeholder=""
                fontsize={"1.2rem"}
                fontweight={"200"}
                margin={"0rem"}
            />            
            <Input 
                label="CNPJ"
                type="text"
                value={cpf}
                onChange={(e)=> setCpf(e.target.value)}
                placeholder=""
                fontsize={"1.2rem"}
                fontweight={"200"}
                margin={"0rem"}
            />
            <Button
            borderRadius={"15px"}
            height={"2.5rem"}
            width={"80%"}
            label={"Enviar"}/>    
        </form>           
    )
}