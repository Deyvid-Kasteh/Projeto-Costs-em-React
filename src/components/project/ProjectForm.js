import Input from "../form/input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./ProjectForm.module.css";

function ProjectForm({btnText}) {
  return (
    <div>
      <form className={styles.form}>
        <Input
          type="text"
          text="Nome do projeto"
          name="name"
          placeholder="insira o nome do projeto"
        />
        <Input
          type="number"
          text="Orçamento do projeto"
          name="budget"
          placeholder="insira orçamento total"
        />
        <Select name="category_id" text="Selecione a categoria" />
        <SubmitButton text={btnText} />
      </form>
    </div>
  );
}

export default ProjectForm;
