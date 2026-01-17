import styles from "./styles.module.css";
import BottomNav from "../../components/ui/navi";
import FormPage from "../../components/forms/formpage";


export default function NewFrete() {

  return (
    <div className={` alinhamentoColumnTop ${styles.div}`}>
        <FormPage/>
        <BottomNav/>
    </div>
  );
}