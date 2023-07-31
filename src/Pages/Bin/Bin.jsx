import {useCtxt} from '../../Context/Context'
import {Header,Footer,Sidebar, NotesCard } from '../../components/index';


export const Bin = () =>{
    const {deletedNotes} = useCtxt();

    return(
        <>
         <Header />
             <div className='d-flex'>
               <div className="aside"> <Sidebar /></div>
                {
                   deletedNotes.length> 0 ? deletedNotes.map((note) => <NotesCard key={note.id} id={note.id} title={note.title} notes={note.notesContent}/>) : <p>No archived notes</p>
                }
            </div>
         <Footer />

        </>
    )


}