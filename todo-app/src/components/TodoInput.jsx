import { useState } from "react";

export default function TodoInput(props){

  const {handleAddTodo} = props;
  const [inputVal, setInputVal] = useState('');

  return(
    <div className = 'input-container'>
      <input value = {inputVal} onChange = {(e) => {setInputVal(e.target.value)}} type="text" placeholder="Add task"/>
      <button onClick = {() => {
        if(!inputVal){return}
        handleAddTodo(inputVal)
        setInputVal('');}}
        >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}