
import FormLogin from "../../components/forms/formlogin"
import logo from '../../img/logo.png';
import styles from "./styles.module.css";


export default function Login(){
    
    return (
    <div className={`${styles.container} ${styles.no_select}`}>
        <img src={logo} className={styles.logo} width='100%' height='auto'  />
        <FormLogin  />
    </div>
    )   
}