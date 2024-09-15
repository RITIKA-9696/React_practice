import { MdDelete } from "react-icons/md";
import styles from "./TodoItem.module.css";
function TodoItem({ TodoName, todoDate, onDeleteClick }) {
  return (
    <div className={styles.container}>
      <div className="row kg-row">
        <div className="col-6">{TodoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => onDeleteClick(TodoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
