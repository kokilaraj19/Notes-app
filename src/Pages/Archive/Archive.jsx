import { useCtxt } from "../../Context/Context";
import {Header,Footer,Sidebar,NotesCard} from '../../components/index'
import './Archive.css'
export const Archive = () => {
    const {archivedNotes} = useCtxt();
  return(  <>
      <Header />
      <Sidebar />
      
      <div className="main">
        <h1 className="h1">Archived Notes</h1>
        <div className="d-flex gap-medium flex-wrap">
        {
            archivedNotes.length> 0 ? archivedNotes.map((note) => <NotesCard key={note.id} id={note.id} title={note.title} notes={note.notesContent}/>) : <p>No archived notes</p>
        }
       </div>
      </div>
      <Footer />

    </>
    );

}