import { createContext , useContext, useState } from "react";

const Context = createContext();

export const ContextProvider = (props) =>{
    const [title,setTitle] = useState("");
    const [notesContent,setNotesContent] = useState("");
    const [addedNotes,setAddedNotes] = useState(JSON.parse(localStorage.getItem("addedNotes")) || []);
    const [pinnedNotes,setPinnedNotes] = useState(JSON.parse(localStorage.getItem("pinnedNotes"))||[]);
    const [archivedNotes,setArchivedNotes] = useState(JSON.parse(localStorage.getItem("archivedNotes"))||[]);
    const [deletedNotes, setdeletedNotes] = useState(JSON.parse(localStorage.getItem("deletedNotes"))||[]);
    

  return (  
    <Context.Provider value={{title,setTitle,notesContent,setNotesContent,addedNotes,setAddedNotes,pinnedNotes,setPinnedNotes,archivedNotes,setArchivedNotes,deletedNotes,setdeletedNotes}}>
        {props.children}
    </Context.Provider>
    )
}

export const useCtxt = () => useContext(Context);