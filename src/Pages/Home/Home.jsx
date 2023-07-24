import {Header,InputNotes,Sidebar,Footer} from '../../components'
import { NotesCard } from '../../components/NotesCard/NotesCard';
import { useCtxt } from '../../Context/Context';
import './Home.css'

export const Home = () =>{
     const {addedNotes} = useCtxt();
    return (
        <>
          <Header />
             <div className='d-flex'>
               <div className="aside"> <Sidebar /></div>
               <div className='main d-flex flex-column gap-medium pd-16'>
                 <InputNotes />
                 <div className='main-notes-container pd-16 d-flex flex-column gap-sm'>
                    <h1>Noted</h1>
                    <div className='d-flex gap-medium flex-wrap '>{
                      addedNotes.length >0 ? addedNotes.map((note) => <NotesCard  title={note.title} notes = {note.notesContent} /> ): <p>No notes added</p>
                      }
                    </div>
                 </div>
               </div>
             </div>
           <Footer />
        </>
    )
}


