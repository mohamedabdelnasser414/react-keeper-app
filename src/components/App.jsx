import React, { useState } from "react";
import CreateArea from "./CreateArea";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

import "./styles.css";

function App (){
    const [notes, setNotes]= useState([]);

    function addNote(note){
        setNotes(preValue =>[...preValue, note]);
    }


    function deleteNote(id) {
        setNotes(notes.filter((note,index)=> index !== id ))  
    }
 

    
    return <div>
        <Header/>
        <CreateArea 
            onAdd={addNote}
        />
        {notes.map((note,index) => 
             <Note 
            key={index}
            id={index}
            title={note.title} 
            content={note.content} 
            onDelete={deleteNote}
            />
        )}
        <Footer/>
    </div>
}

export default App;