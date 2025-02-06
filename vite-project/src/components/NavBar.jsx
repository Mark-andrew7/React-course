import reactLogo from '../assets/react.svg'

function NavBar() {
    return(
        <header>
            <nav>
            <img src={reactLogo} className="logo" alt="React Logo"></img>
            <span>React Facts</span>
            </nav>
        </header>
    )
}

export default NavBar