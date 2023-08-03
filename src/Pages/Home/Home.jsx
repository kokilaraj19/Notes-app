import {Header,InputNotes,Sidebar,Footer} from '../../components'
import { DisplayNotes } from '../../components/DisplayNotes/DisplayNotes';
import { DisplayPinnedNotes } from '../../components/DisplayPinnedNotes/DisplayPinnedNotes';
import './Home.css'

export const Home = () =>{
   
    return (
        <>
          <Header />
             <div className='d-flex gap-medium'>
               <Sidebar />
               <div className='main d-flex flex-column gap-medium pd-16'>
                 <InputNotes />
                 <DisplayPinnedNotes />
                 <DisplayNotes />
               </div>
             </div>

           <Footer />
        </>
    )
}


