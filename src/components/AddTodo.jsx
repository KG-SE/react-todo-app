import { useContext, useRef } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { TodoItemsContext } from "./store/TodoItemsContext";

function AddTodo(){
  const {addNewItem} = useContext(TodoItemsContext);
  const todoNameElement = useRef("");
  const DueDateElement = useRef("");

  const handleAddButtonClicked = (event) =>{
    event.preventDefault()
    const todoName = todoNameElement.current.value
    const dueDate = DueDateElement.current.value
    todoNameElement.current.value = ""
    DueDateElement.current.value = ""    
    addNewItem(todoName,dueDate)
  };

 return ( 
 <form className="container"
  onSubmit={handleAddButtonClicked}>
 <div className="row kg-row">
    <div className="col-6">
      <input type="text" ref={todoNameElement} placeholder="Enter Todo here"  />
      </div>
    
    <div className="col-4">
      <input type="date" ref={DueDateElement} /> 
    </div>
    <div className="col-2">
      <button className="btn btn-success kg-bt" ><IoAddCircleOutline /></button>
      </div>
  </div>
  </form>
 )
}

export default AddTodo;