import {Header,InputNotes,Sidebar,Footer} from '../../components'
import { NotesCard } from '../../components/NotesCard/NotesCard';
import { useCtxt } from '../../Context/Context';
import './Home.css'
// import {v4 as uuid} from 'uuid'
// import {Archive} from '../Archive/Archive'

export const Home = () =>{
     const {addedNotes,pinnedNotes} = useCtxt();
    return (
        <>
          <Header />
             <div className='d-flex gap-medium'>
               <Sidebar />
               <div className='main d-flex flex-column gap-medium pd-16'>
                 <InputNotes />
                 <div className='main-notes-container pd-16 d-flex flex-column gap-sm'>
                    {pinnedNotes.length>0? <h1>Pinned Notes</h1> : ""}
                    <div className='d-flex gap-medium flex-wrap '>{
                      pinnedNotes.length > 0 ? pinnedNotes.map((note) => <NotesCard key={note.id} id={note.id} title={note.title} notes = {note.notesContent} /> ): ""
                      }
                    </div>
                 </div>
                 <div className='main-notes-container pd-16 d-flex flex-column gap-sm'>
                    <h1>Noted</h1>
                    <div className='d-flex gap-medium flex-wrap '>{
                      addedNotes.length > 0 ? addedNotes.map((note) => <NotesCard key={note.id} id={note.id} title={note.title} notes = {note.notesContent} /> ): <p>No notes added</p>
                      }
                    </div>
                 </div>
               </div>
               {/* <aside className="important d-flex flex-column align-center border-2px">
                   <h2>Important!!!!</h2>
                   <div className="imporatant-notes">
                    {
                       pinnedNotes.length > 0 ? pinnedNotes.map((note) => <NotesCard key={note.id} id={note.id} title={note.title} notes = {note.notesContent} /> ): ""
                    }
                   </div>
                   
               </aside> */}
             </div>

           <Footer />
        </>
    )
}


