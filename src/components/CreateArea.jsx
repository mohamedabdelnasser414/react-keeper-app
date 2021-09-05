import { useState } from "react";
import "./CreateArea.css";

function CreateArea(props) {

  const [note , setNote] = useState({
    title:"",
    content:""
   });

  function handleChange (event) {
    const {name,value} = event.target;

    setNote( preValue => {
        return { 
            ...preValue,
            [name]:value
        }
    });
   }

   function handleSubmit(event) {
        event.preventDefault();
        if(note.title === ""){
            alert("please add note Title");
        }else if (note.content ===""){
            alert("please add note content")
        }else{
            props.onAdd(note);
            setNote({
            title:"",
            content:""
        });
        }    
   }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content}/>
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
