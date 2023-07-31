import { useCtxt } from "../../Context/Context";
import {Header,Footer,Sidebar,NotesCard} from '../../components/index'

export const Archive = () => {
    const {archivedNotes,deletedNotes} = useCtxt();
  return(  <>
      <Header />
      <Sidebar />
      <div className="main">
        
        {
            archivedNotes.length> 0 ? archivedNotes.map((note) => <NotesCard key={note.id} id={note.id} title={note.title} notes={note.notesContent}/>) : <p>No archived notes</p>
        }
       
      </div>
      <Footer />

    </>
    );

}