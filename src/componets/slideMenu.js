import './style.css'
import { Link } from 'react-router-dom';
function Slidemenu() {
    function myFunction() {
        var element = document.getElementById("slide");
        element.classList.toggle("active");
    }
    return (
        <div className="slidemenu-main">
            <div class="button-section">
                <button class="menu-button" id='menu-button' onClick={myFunction}> menu</button>
            </div>

            <header className="slidemenu" id='slide'>
                <h1>profile</h1>
                <div class="menu_item">
                    <ul>
                        <li>Home</li>
                        <li>Your Resume</li>
                        
                        <li> <Link to="/MakeResume"> Make Resume </Link> </li>
                        <li> <Link to="/about"> About </Link> </li>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default Slidemenu;