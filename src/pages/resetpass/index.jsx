
import FormResetPass from '../../components/forms/formreset';
import logo from '../../img/logo.png';
import styles from "./styles.module.css";


export default function ResetPass(){
    
    return (
    <div className={`${styles.container} ${styles.no_select}`}>
        <img src={logo} className={styles.logo} width='100%' style={{marginBottom: '1rem', marginTop: '3rem'}} />
        <FormResetPass  />
    </div>
    )   
}