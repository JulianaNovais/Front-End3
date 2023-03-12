//import "./styles.css";

import styles from "./styles.module.css";

function Card(props) {
  const { usuario } = props;

  return (
    <div className={usuario.ativo ? styles.rowGreen : styles.rowRed}>
      <li>
        <h2>{usuario.name}</h2>
        <p>{usuario.turma}</p>
      </li>
    </div>
  );
}

export default Card;
