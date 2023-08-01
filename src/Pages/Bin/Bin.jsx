import {useCtxt} from '../../Context/Context'
import {Header,Footer,Sidebar, NotesCard } from '../../components/index';


export const Bin = () =>{
    const {deletedNotes} = useCtxt();

    return(
        <>
         <Header />
         <Sidebar />
             <div className='main'>
                <h1 className='h1'>Deleted Notes</h1>
                <div className="d-flex gap-medium flex-wrap">
                {
                   deletedNotes.length> 0 ? deletedNotes.map((note) => <NotesCard key={note.id} id={note.id} title={note.title} notes={note.notesContent}/>) : <p>No archived notes</p>
                }
                </div>
            </div>
         <Footer />

        </>
    )


}