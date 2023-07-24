import './sidebar.css'

export const Sidebar = () =>{
    return (
        <aside className='sidebar pd-16'>
            <div className='d-flex flex-column align-center gap-medium'>
                <h1><img className="logo"src="https://is1-ssl.mzstatic.com/image/thumb/Purple128/v4/9d/98/d2/9d98d2a6-070a-5b2d-ff1d-7c828422467e/source/512x512bb.jpg" alt ="logo" /> </h1>
                <span>Home</span>
                <span>Archive</span>
                <span>Bin</span>      
            </div>
        </aside>
    )
}