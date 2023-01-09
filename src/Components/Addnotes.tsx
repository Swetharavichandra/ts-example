
import * as React from 'react';
import { Note } from '../models/note.interface';

interface IAddnotesProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const Addnotes: React.FunctionComponent<IAddnotesProps> = ({notes,setNotes}) => {
  
    const [error, setError] = React.useState<string>("");
    const titleRef = React.useRef<HTMLInputElement | null>(null);
    const textRef = React.useRef<HTMLInputElement | null>(null);
    const colorRef = React.useRef<HTMLInputElement | null>(null);
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (titleRef.current?.value === "" || textRef.current?.value === "") {
            return setError("All fields are mandatory");
        }
        
        setError("");
        setNotes([...notes, {
            id: (new Date()).toString(),
            title: (titleRef.current as HTMLInputElement).value,
            text: (textRef.current as HTMLInputElement).value,
            color: (colorRef.current as HTMLInputElement).value,
            date: (new Date()).toString()
        }]);
        
        (titleRef.current as HTMLInputElement).value = "";
        (textRef.current as HTMLInputElement).value = "";

    }
    
    return (
    <>
    <h2>Add Notes</h2>
    {error && alert(error)}
    <div>
        <form onSubmit={(e) => handleSubmit(e) }>
            <label>Title</label>
            <br/>
            <input type="text" placeholder='enter title' ref={titleRef}/>
            <br/>
            <br/>
            <label>Description</label>
            <br/>
            <input type="text" placeholder='enter text' ref={textRef} /><br/>
            <br/>
            <label>Color</label>
            <br/>
            <input type="color" id='colorinput' defaultValue="#dfdfdf" placeholder='enter color' ref={colorRef}/>
            <br/>
            <button type='submit'>Submit</button>
            <button type='button' onClick={()=> {throw Error("oops")}}>do not click</button>
        </form>

        
    </div>
    </>
  )
};

export default Addnotes;
