import './sidebar.css'
import {NavLink} from 'react-router-dom'
import {MdHome,MdOutlineArchive,MdDeleteOutline} from 'react-icons/md'

const Tooltip = (props) =>{
  return(
    <span className='tooltip logo-bg'>{props.value}</span>
  )
}
export const Sidebar = () =>{
    return (
        <aside className='sidebar pd-16'>
            <div className='d-flex flex-column align-center gap-medium'>
                <div className='logo'>
                    <img  src="logo.png" alt ="logo" /> 
                </div>
                <div>
                   <ul className=''> 
                    <li className='item'>
                        <NavLink to='/' className={({isActive}) => isActive? "active" : ''}>
                        <MdHome className='icon-2x'/>
                        <Tooltip value="Home" />
                        </NavLink>
                    </li>
                    <li className='item '>
                        <NavLink to='/Archive' className={({isActive}) => isActive? "active" : ''}>
                        <MdOutlineArchive className='icon-2x' />
                        <Tooltip value="Archive"/>
                        </NavLink>
                    </li>
                    <li className='item'>
                        <NavLink to='/Bin' className={({isActive}) => isActive? "active" : ''}>
                        <MdDeleteOutline className='icon-2x' />
                        <Tooltip value="Bin" />
                        </NavLink>
                    </li>
                    
                   </ul>     
                </div> 
            </div>
        </aside>
    )
}