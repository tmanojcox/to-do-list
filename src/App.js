import { useState } from "react";
import {PencilIcon} from "@heroicons/react/24/solid";
function App () {
  const [InputKaValue, setInputKaValue] = useState("");
  const [arrayvalue, setarrayvalue] = useState([]);
  const handlelist = () => {
    
    setarrayvalue([...arrayvalue,InputKaValue]);
    setInputKaValue(""); // Clear the input after adding the item to the list
    
  };
 
  const removeTodo = (index) => {
    
    const newarrayvalue = [...arrayvalue];
    newarrayvalue.splice(index, 1);
    setarrayvalue(newarrayvalue);
  };
  const EditTodo= (index) => {
    const newarrayvalue = [...arrayvalue];
    newarrayvalue[index] = InputKaValue;
  
    setarrayvalue (newarrayvalue)
    setInputKaValue("")
  };
  
  
  return (
    <div className="border p-5">
      <input
        value={InputKaValue}
        onKeyDown={(e)=>e.key === "Enter" && handlelist()}
        onChange={(Event) => setInputKaValue(Event.target.value)}
        type="text"
        className="border rounded-md"
        placeholder="Type your items????"
      />
      <button
        onClick={()=> handlelist("")}
        className="border bg-gray-400 px-1 ml-1 rounded-md"
        
      >
        Submit
      </button>
      <ul>
      {arrayvalue.map((InputKaValue, index) => (
        <li key={index}>{InputKaValue}
         <button className="border p-1 mx-2 rounded-2xl bg-gray-500  " onClick={()=>removeTodo(index)} >Remove</button>
         <button className="border p-1 mx-2 rounded-2xl bg-gray-500  " onClick={()=>EditTodo(index)} ><PencilIcon className="h-3 w-10" /></button>
          
        </li>

      ))}
      
      </ul>
    </div>
  );
}

export default App;
