
import FormLogin from "../../components/form/formlogin"

import styles from "./styles.module.css";


export default function Login(){
    
    return (
    <div className={styles.container}>
        <img src="../../public/logo.png" width='100%' />
        <FormLogin label='Login' />

    </div>
    )   
}