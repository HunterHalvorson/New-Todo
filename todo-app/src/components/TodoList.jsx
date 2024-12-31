import TodoCard from "./TodoCard";

export default function TodoList(props){

  const {handleCompleteTodo, todos, selectedTab, handleDeleteTodo} = props;


  
  const filterTodosList = selectedTab === 'All' ? 
      todos 
      : selectedTab === 'Completed' ? 
        todos.filter(val => val.completed):
          todos.filter(val => !val.completed);
  

  return(
    <>
      {filterTodosList.map((todo, todoIndex) => {
        return(
          <TodoCard key = {todoIndex} todoIndex = {todoIndex} todo = {todo} handleDeleteTodo = {handleDeleteTodo} handleCompleteTodo = {handleCompleteTodo}/>
        );
      })}
    </>
  );
}