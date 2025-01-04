import {Link, BrowserRouter as Router} from 'react-router-dom'
let App = ()=> {

    return <div> <Router>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="./index" className="navbar-brand"> Logo </Link>
            <div className="ml-auto">
               <ul className="navbar-nav">
                <li> <Link to="./index" className="nav-link"> Home </Link> </li>
                <li> <Link to="./index" className="nav-link"> About </Link> </li>
                <li> <Link to="./index" className="nav-link"> Services </Link> </li>
                <li> <Link to="./index" className="nav-link"> Contact </Link> </li>
               </ul>
            </div>
        </nav>
        </Router>
    </div>
}
export default App;