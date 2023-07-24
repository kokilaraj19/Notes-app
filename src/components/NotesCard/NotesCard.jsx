import './NotesCard.css'
import {MdDeleteOutline, MdOutlineArchive} from 'react-icons/md'


// import { useCtxt } from '../../Context/Context'

export const NotesCard = (props)=>{
    // const printSomething = (e)=> {
    //       console.log(e)
    // }
    // const {archivedNotes,setArchivedNotes} = useCtxt();

    const archiveHandler = () => {
    }

    return (
        <div className="Notes-Container border-2px">
            <div className='subject-container d-flex j-between'>
                <p>{props.title}</p>
                 <span><MdDeleteOutline /><MdOutlineArchive onClick={archiveHandler} /></span>
            </div>
            <div className='content-container'>
                <p>{props.notes}</p>
                <p>Mark as important</p>
            </div>
        
        </div>
    )
}