import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ todoItems }) => {
  return (
    <div className={styles.ItemsContainer}>
      {todoItems.map((item) => (
        <TodoItem todoDate={item.dueDate} TodoName={item.name}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
