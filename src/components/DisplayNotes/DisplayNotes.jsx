import { useCtxt } from "../../Context/Context"
import { NotesCard } from "../NotesCard/NotesCard"


export const DisplayNotes = () =>{
    const {addedNotes} = useCtxt();
    
    return (
        <div className='main-notes-container pd-16 d-flex flex-column gap-sm'>
            <h1>Noted</h1>
            <div className='d-flex gap-medium flex-wrap '>{
                 addedNotes.length > 0 ? addedNotes.map((note) => <NotesCard key={note.id} id={note.id} title={note.title} notes = {note.notesContent} /> ): <p>No notes added</p>
              }
             </div>
        </div>
    )
}