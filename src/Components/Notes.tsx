import * as React from 'react';
import { Note } from '../models/note.interface';

interface INotesProps {
  note:Note,
  handleDelete:(id:string)=>void
}

const Notes: React.FunctionComponent<INotesProps> = ({note,handleDelete}) => {
  return(
    <div>
      <div style={{backgroundColor:note.color}}>
        <h2 style={{color:note.color}}>{note.title}</h2>
        <p>{note.text}</p>
        <h4>{note.date}</h4>
        <button onClick={()=>handleDelete(note.id)}>Delete</button>

      </div>
    </div>
  )
};

export default Notes;
