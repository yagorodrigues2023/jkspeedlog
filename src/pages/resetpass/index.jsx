
import FormResetPass from '../../components/forms/formreset';
import logo from '../../img/logo.png';
import styles from "./styles.module.css";


export default function ResetPass(){
    
    return (
    <div className={styles.container}>
        <img src={logo} width='100%' style={{marginBottom: '5rem', marginTop: '2rem'}} />
        <FormResetPass  />
    </div>
    )   
}