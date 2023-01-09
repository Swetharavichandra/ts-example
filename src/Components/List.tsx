import * as React from 'react';
import { Note} from '../models/note.interface';
import Notes from './Notes';


interface IListProps {
    notes: Note[],
    setNotes:React.Dispatch<React.SetStateAction<Note[]>>
}

const  List: React.FunctionComponent<IListProps> = ({notes,setNotes}) => {
  const handleDelete=(id:string)=>{
    setNotes(notes.filter(note => note.id !== id));
    console.log("delete",id)
  }
  
    const renderNotes=():JSX.Element[]=>{
    return notes.map(note=>{
         return <Notes key ={note.id} note={note} handleDelete={handleDelete}/>
    })
  }
  
    return(
        <>
    <h1>Notes</h1>
    <div>
    { renderNotes() }
    </div>
    
    </>

  )
};

export default  List;
