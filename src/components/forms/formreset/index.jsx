import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../../ui/input";
import Button from "../../ui/butom";
import styles from "./styles.module.css";

export default function FormResetPass(){
    const navigate = useNavigate()
    const [email, setEmail]= useState('')

  
    
    function reset(e){
        e.preventDefault();
        console.log(email)
    }

    return(
        <form className={` alinhamentoColumnCentro ${styles.container}`} onSubmit={reset} >
            <label className={styles.label}>Redefinir a senha</label>
            <Input
            label ="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=""
            />
            <Button
            label="Enviar"
            width='250px'
            height='50px'
            borderRadius='10px'
            onClick={reset}
            />
            <label onClick={() => navigate("/")} className={styles.reset}>Já tem cadastro ? Clique aqui </label>
        </form>
        
    )
}