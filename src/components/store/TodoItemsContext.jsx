import { createContext } from "react";
import { useReducer } from "react";
import { useContext } from "react";

export const TodoItemsContext = createContext({
  TodoItems:[],
    addNewItem:()=>{},
    deleteItem:()=>{},
});

const TodoItemsContextProvider = ({children})=>{
  const TodoItemsReducer = (currTodoItems,action) =>{
    let newTodoItems = currTodoItems
    if(action.type === "New_Item"){
     newTodoItems = [
     ...currTodoItems,{
     Name: action.payload.itemName, Date: action.payload.itemDueDate
    }]
    }
    else if(action.type === "Delete_Item"){
    newTodoItems = currTodoItems.filter(item => item.Name !== action.payload.todoItemName)
    }
    return newTodoItems
  };
    
  const [TodoItems,dispatchTodoItems] = useReducer(TodoItemsReducer,[]);
  
  const addNewItem = (itemName, itemDueDate) =>{
    const newItemAction = {
      type: "New_Item",
      payload:{
        itemName,
        itemDueDate
      }
    };
    dispatchTodoItems(newItemAction)
    
  };

  const deleteItem = (todoItemName) =>{
    const deleteItemAction = {
      type: "Delete_Item",
      payload:{
        todoItemName
      }
    };
    dispatchTodoItems(deleteItemAction)
    };
  return (
    <TodoItemsContext.Provider value={{
    TodoItems,
    addNewItem,
    deleteItem,
  }}>
    {children}
  </TodoItemsContext.Provider>
  )
}

export default TodoItemsContextProvider;