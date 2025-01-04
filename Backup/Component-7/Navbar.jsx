import React from 'react'
class Navbar extends React.Component {
    
    render () {
    return <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
      <a href="#" className='navbar-brand'> Logo </a>
      <div className='ml-auto'>
        <ul className='navbar-nav'>
            <li> <a className='nav-link'> Home </a></li>
            <li> <a className='nav-link'> About </a></li>
            <li> <a className='nav-link'> Service </a></li>
            <li> <a className='nav-link'> Contact </a></li>
        </ul>
      </div>
    </nav>
    }
}
export default Navbar;