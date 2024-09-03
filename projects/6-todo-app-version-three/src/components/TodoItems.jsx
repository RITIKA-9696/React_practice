import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={styles.ItemsContainer}>
      {todoItems.map((item, key) => (
        <TodoItem
          todoDate={item.dueDate}
          key={item.name}
          TodoName={item.name}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
