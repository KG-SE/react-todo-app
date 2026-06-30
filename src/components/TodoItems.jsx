import { useContext } from 'react';
import Todoitem from './TodoItem';
import { TodoItemsContext } from './store/TodoItemsContext';
function Todoitems(){

  const {TodoItems} = useContext(TodoItemsContext);
  
  
return (
  <>
  {TodoItems.map(items =>(
    <Todoitem key={items.Name} todoName = {items.Name} todoDate = {items.Date} />
  )) }
  </>
)
}

export default Todoitems;