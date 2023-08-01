import './NotesCard.css'
import {MdDeleteOutline, MdOutlineArchive,MdUnarchive} from 'react-icons/md'
import {BsPin,BsPinFill} from 'react-icons/bs'
// import { useState } from 'react'


import { useCtxt } from '../../Context/Context'

export const NotesCard = (props)=>{
    // const [isPinned,setIsPin] = useState("false");
  
    const {addedNotes,setAddedNotes,pinnedNotes,setPinnedNotes,archivedNotes,setArchivedNotes,deletedNotes,setdeletedNotes} = useCtxt();
    const {id,title,notes} = props;
    

    const FindtheValue = (notes,id) => {
             return  notes.some((note) => note.id === id)
    }

    // const isPinned = FindisPinned(pinnedNotes,id)

    const pinnedHandler = (id) => {
        //   console.log(id);
          const FilteredArray = addedNotes.filter((note) => note.id === id);
          setPinnedNotes([...pinnedNotes, ...FilteredArray])
          setAddedNotes(addedNotes.filter((note) => note.id !== props.id))
          
    }
    

    const unPinnedHandler = (id) =>{
        const FilteredArray = pinnedNotes.filter((note) => note.id === id);
        setAddedNotes([...addedNotes, ...FilteredArray])
        setPinnedNotes(pinnedNotes.filter((note) => note.id !== id))
    }

    const archivedHandler = (id) =>{
        
        if(FindtheValue(pinnedNotes,id) ){
            const FilteredArray = pinnedNotes.filter((note) => note.id === id)
            setArchivedNotes([...archivedNotes, ...FilteredArray])
            setPinnedNotes(pinnedNotes.filter((note) => note.id !==id))
        }
        else{
            const FilteredArray = addedNotes.filter((note) => note.id === id);
            setArchivedNotes([...archivedNotes, ...FilteredArray])
            setAddedNotes(addedNotes.filter((note) => note.id !==id))
        } 
        
          
    }
    const unarchiveHandler = (id) => {
        const FilteredArray = archivedNotes.filter((note) => note.id === id);
        setAddedNotes([...addedNotes,...FilteredArray])
        setArchivedNotes(archivedNotes.filter((note) => note.id !== id))
    }

    const setContent = (notes,id) => {
        const FilteredArray = notes.filter((note) => note.id === id);
        setdeletedNotes([...deletedNotes,...FilteredArray]);

    }
   
    const deleteHandler = (id) =>{
          if(FindtheValue(addedNotes,id)){
            setContent(addedNotes,id)
            setAddedNotes(addedNotes.filter((note)=> note.id !==id))
          }
          else if(FindtheValue(pinnedNotes,id)){
            setContent(pinnedNotes,id)
            setPinnedNotes(pinnedNotes.filter((note) => note.id !==id))
          }
          else if(FindtheValue(archivedNotes,id)){
            setContent(archivedNotes,id)
            setArchivedNotes(archivedNotes.filter((note) => note.id !== id))
          }
        
    }
    // console.log(deletedNotes);

    return (
        <div key={props.id} className="Notes-Container border-2px">
            <div className='subject-container pd-16 logo-bg d-flex j-between'>
                <p>{title}</p>
                 <span className='icon icon-1x'>                 
                   { FindtheValue(deletedNotes,id) ? "" : FindtheValue(archivedNotes,id) ? "" : FindtheValue(pinnedNotes,id) ? <BsPinFill onClick={() => unPinnedHandler(id)}/> :
                   <BsPin onClick={() => pinnedHandler(id)} />}
                 </span>
            </div>
            <div className='content-container d-flex flex-column gap-sm pd-8'>
                <p>{notes}</p>
                <span className='d-flex icon icon-1x'>
                  {FindtheValue(deletedNotes,id) ? (<MdDeleteOutline onClick={() => deleteHandler(id)} />): (<MdDeleteOutline onClick={() => deleteHandler(id)} />)}
                  {FindtheValue(deletedNotes,id) ? "" : !FindtheValue(archivedNotes,id) ? <MdOutlineArchive onClick={()=> archivedHandler(id)} /> : <MdUnarchive onClick={() => unarchiveHandler(id)}/>}   
                </span>
            </div>
            {/* {console.log(props.title)} */}
        </div>
    )
}