
import FormLogin from "../../components/form/formlogin"
import logo from '../../img/logo.png';
import styles from "./styles.module.css";


export default function Login(){
    
    return (
    <div className={styles.container}>
        <img src={logo} width='100%' style={{marginBottom: '5rem',}} />
        <FormLogin  />

    </div>
    )   
}