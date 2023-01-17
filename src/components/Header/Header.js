import './Header.css'
import {Home,Person, Message, List, Close, Menu} from '@mui/icons-material';


export  const Header = () => {

  const [toggle,setToggle] = useState(false);

  return (
    <header className='header'>
      <nav className="nav container">
        <a href="index.html" className="nav__logo">Dexpak</a>

        <div className={toggle ? "nav__menu nav__menu__active" :"nav__menu"}>
          <ul className="nav__list">
            <li className="nav__items">
              <a href="#home" className='nav__links'>
                <div className="nav__icon"><Home/></div>Home
              </a>
            </li>

            <li className="nav__items">
              <a href="#about" className='nav__links'>
                <div className="nav__icon"><Person /></div>About
              </a>
            </li>

            <li className="nav__items">
              <a href="#skills" className='nav__links'>
              <div className="nav__icon"><List/></div>Skills
              </a>
            </li>

            <li className="nav__items">
              <a href="#contact" className='nav__links'>
              <div className="nav__icon"><Message/></div>Contact
              </a>
            </li>
          </ul>
        
          <div className="nav__close" onClick={() => setToggle(!toggle)}>
            <Close />
          </div>
          
        </div>
        <div className="nav__toggle" onClick={()=> setToggle(!toggle)}>
          <Menu />
        </div>
      </nav>
    </header>
  )
}

