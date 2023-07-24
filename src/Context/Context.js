import { createContext , useContext, useState } from "react";

const Context = createContext();

export const ContextProvider = (props) =>{
    const [title,setTitle] = useState("");
    const [notesContent,setNotesContent] = useState("");
    const [addedNotes,setAddedNotes] = useState([]);
    const [archivedNotes,setArchivedNotes] = useState([]);

  return (  
    <Context.Provider value={{title,setTitle,notesContent,setNotesContent,addedNotes,setAddedNotes,archivedNotes,setArchivedNotes}}>
        {props.children}
    </Context.Provider>
    )
}

export const useCtxt = () => useContext(Context);