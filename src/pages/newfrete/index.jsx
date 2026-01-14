import styles from "./styles.module.css";
import BottomNav from "../../components/ui/navi";
import FormFrete from "../../components/forms/formnovofrete";


export default function NewFrete() {

  return (
    <div className={` alinhamentoColumnTop ${styles.div}`}>
        <FormFrete/>
        <BottomNav/>
    </div>
  );
}