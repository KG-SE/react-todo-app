import styles from './WelcomeMsg.module.css';
import { useContext } from 'react';
import { TodoItemsContext } from './store/TodoItemsContext';
const WelcomeSms = () =>{
  const {TodoItems} = useContext(TodoItemsContext);
  
  return TodoItems.length === 0 && <p className={`${styles["welcome-container"]}`}>Enjoy your day👍</p>
}

export default WelcomeSms;