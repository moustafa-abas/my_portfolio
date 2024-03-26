import { NavLink }from'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Header = () => {
  const [showList, setShowList] = useState(false)
  return (
    <>
<header className='text-capitalize justify-content-center d-md-flex d-none mt-3 mb-4 fs-5'>
<NavLink to='/'  className='link' activeClassName='active'>home</NavLink>
<NavLink to='/projects' className='link'  activeClassName='active'>projects</NavLink>
<NavLink to='/skills' className='link'  activeClassName='active'>skills</NavLink>
</header>
<FontAwesomeIcon icon={faBars} className='fs-1 mt-3 icon d-md-none' onClick={()=>{setShowList(!showList)}}/>
{ showList?
<list className='text-capitalize   d-flex flex-column d-md-none mt-3 mb-4 fs-5'>
<NavLink to='/'  className='link mx-0 mt-3' activeClassName='active'>home</NavLink>
<NavLink to='/projects' className='link mx-0 mt-3'  activeClassName='active'>projects</NavLink>
<NavLink to='/skills' className='link mx-0 mt-3'  activeClassName='active'>skills</NavLink>
</list>:
<></>
}
</>
    )
}

export default Header
