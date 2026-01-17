import { firebaseSignIn } from "../../../firebase/AuthService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../ui/input/index";
import Button from"../../ui/butom";
import styles from "./styles.module.css";




export default function FormLogin(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [erro, setErro] = useState('');




    const enviar = async (e) => {
        e.preventDefault();
        try{
            await firebaseSignIn({
                email,
                password: pass,

            });
            navigate("/home");
        } catch (err){
            setErro("E-mail ou senha invalidos",err)
            console.log(erro)
        }
    };
 
   
    return(
        <form className={` alinhamentoColumnCentro ${styles.container}`} onSubmit={enviar}>
            
            <label className={ styles.label}>Login</label>
           
            <Input 
            label="E-mail"
            type="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            placeholder=""
            />

            <Input 
            label="Senha"
            type="password"
            value={pass}
            onChange={(e)=> setPass(e.target.value)}
            placeholder=""
            />
             <label onClick={() => navigate("/reset-password")} className={ styles.reset}>Esqueceu a Senha ? Clique aqui</label>
            <Button
            label='Entrar'
            onClick={enviar}
            width= '250px'
            height='50px'
            borderRadius='10px'
             />
        </form>
    )
}