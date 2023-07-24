import './Footer.css'
import {useCtxt} from '../../Context/Context'

export const Footer = () =>{
    const {addedNotes,archivedNotes} = useCtxt();
    return (
        <div className={`footer pd-16 ${addedNotes.length < 3 && archivedNotes.length<3 && 'fix-pos'}`  }>
            <p>Copyrights &copy; reserved 2023.</p>
        </div>
    )
}
