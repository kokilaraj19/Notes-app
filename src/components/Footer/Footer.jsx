import './Footer.css'
import {useCtxt} from '../../Context/Context'

export const Footer = () =>{
    const {addedNotes,pinnedNotes} = useCtxt();
    return (
        <div className={`footer pd-16 ${addedNotes.length < 5? pinnedNotes.length< 5? 'fix-pos':"":""}`  }>
            <p>Copyrights &copy; reserved 2023.</p>
        </div>
    )
}
