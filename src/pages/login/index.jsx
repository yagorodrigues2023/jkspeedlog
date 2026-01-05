
import FormLogin from "../../components/forms/formlogin"
import logoEscuro from '../../img/logoEscuro.png';
import logoClaro from '../../img/logoClaro.png';
import styles from "./styles.module.css";


export default function Login(){
    const isDark =
    document.documentElement.getAttribute('data-theme') === 'dark';
    
    return (
    <div className={`alinhamentoColumnTop ${styles.container} ${styles.no_select}`}>
        <img src={isDark ? logoEscuro : logoClaro} className={styles.logo} width='100%' height='auto'  />
        <FormLogin  />
    </div>
    )   
}