import { useNavigate } from "react-router-dom";
import styles from "./NewProject.module.css";
import ProjectForm from "../project/ProjectForm";

function NewProject() {
  const history = useNavigate();

  function createPost(project) {
    // initialize cots and services
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        //redirect
        history("/projects", { message: "Projeto criado com sucesso" });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar projeto</h1>
      <p>Crie um projeto para depois adicionar os serviços!</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
    </div>
  );
}

export default NewProject;
