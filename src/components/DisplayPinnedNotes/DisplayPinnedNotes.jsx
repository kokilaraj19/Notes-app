import { useCtxt } from "../../Context/Context"
import { NotesCard } from "../NotesCard/NotesCard";

export const DisplayPinnedNotes = () =>{
    const {pinnedNotes} = useCtxt();
    return(
        <div className='main-notes-container pd-16 d-flex flex-column gap-sm'>
            {pinnedNotes.length>0? <h1>Pinned Notes</h1> : ""}
            <div className='d-flex gap-medium flex-wrap '>{
                pinnedNotes.length > 0 ? pinnedNotes.map((note) => <NotesCard key={note.id} id={note.id} title={note.title} notes = {note.notesContent} /> ): ""
               }
            </div>
        </div>
    )
}