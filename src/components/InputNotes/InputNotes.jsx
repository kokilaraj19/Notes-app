import './InputNotes.css'
import {FaPlus} from "react-icons/fa"
import { useCtxt } from '../../Context/Context'
import {v4 as uuid} from 'uuid'


export const InputNotes = () =>{
    const {title, setTitle, notesContent, setNotesContent, addedNotes, setAddedNotes} = useCtxt();
    let isSet = false;
    const addingNotes = () =>{
        
        setAddedNotes([...addedNotes,{id: uuid(),title,notesContent}]);
        setTitle("");
        setNotesContent("")

     }
    //  console.log(addedNotes);
     

    return (
        <div className="d-flex flex-column input-container border-2px">
            <input className="border-bottom" onChange={(e) => setTitle(e.target.value) } type="text" placeholder="Subject" value={isSet ? "": title}/>
            <textarea onChange={(e) => setNotesContent(e.target.value)}  rows={10} placeholder='Type here....' value={notesContent}/>
            <button onClick = {addingNotes} className={`add-notes pd-8 ds ${title===""||notesContent==="" ? "": "logo-bg"}`} disabled = {title === "" || notesContent === ""}><FaPlus width="2rem" /></button>
        </div>
    )
}