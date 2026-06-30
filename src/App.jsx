import Heading from "./components/Heading";
import AddTodo from "./components/AddTodo";
import Todoitems from "./components/TodoItems";
import WelcomeSms from "./components/WelcomeMsg";
import TodoItemsContextProvider from "./components/store/TodoItemsContext";
import "./App.css";
function App(){
  


  return (
  <div className="container">
  <TodoItemsContextProvider>
  <Heading />
   <AddTodo />
    <Todoitems />
    <WelcomeSms />
  </TodoItemsContextProvider>  
  </div>
  )
}

export default App;