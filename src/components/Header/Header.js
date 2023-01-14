import './Header.css'

export  const Header = () => {
  return (
    <header className='header'>
      <nav className='nav container'>
        <a href="index.html" className="nav__logo">Dexpak</a>

        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__items">
              <a href="#home" className='nav__links'>
                <i></i>Home
              </a>
            </li>

            <li className="nav__items">
              <a href="#about" className='nav__links'>
                <i></i>About
              </a>
            </li>

            <li className="nav__items">
              <a href="#skills" className='nav__links'>
                <i></i>Skills
              </a>
            </li>

            <li className="nav__items">
              <a href="#contact" className='nav__links'>
                <i></i>contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

