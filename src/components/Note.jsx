import "./Note.css";

function Note (props){
    return <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={()=>props.onDelete(props.id)}> <i  className="fas fa-trash-alt fa-3x"></i></button>
    </div>
}

export default Note ;