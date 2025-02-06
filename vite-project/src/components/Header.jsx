import globeIcon from '../images/globe.png';

function Header() {
    return(
        <>
            <header>
                <img src={globeIcon} ></img>
                <h1>my travel journal</h1>
            </header>
        </>
    )
}

export default Header;