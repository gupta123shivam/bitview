import { IoMenuSharp } from 'react-icons/io5'
import { RxCross2 } from 'react-icons/rx'
import { RiDiscordLine } from 'react-icons/ri'
import { SlSocialYoutube } from 'react-icons/sl'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [sticky, setSticky] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  const handleScroll = () => {
    setSticky(Boolean(window.scrollY > 105))
  }

  window.addEventListener('scroll', handleScroll)

  const goTop = () => {
    window.scrollTo({
      top: (0, 0),
      behavior: 'smooth',
    })
  }

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu)
  }

  return (
    <>
      <nav className={sticky ? 'sticky-nav' : ''}>
        <div className='navbar'>
          <Link to='/'>
            <p onClick={goTop}>COINDOM</p>
          </Link>
          <ul>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#market'>Market</a>
            </li>
            <li>
              <a href='#choose-us'>Choose Us</a>
            </li>
            <li>
              <a href='#join'>Join</a>
            </li>
          </ul>
          <span>
            <SlSocialYoutube />
            <RiDiscordLine />
            {/* mobile */}
            <IoMenuSharp
              onClick={toggleMobileMenu}
              className='hamburger-menu'
            />
          </span>
        </div>
      </nav>

      {/* mobile navigation */}
      <div className={`mobile-nav ${mobileMenu ? 'mobile-up' : ''}`}>
        <RxCross2 onClick={toggleMobileMenu} className='close-mobile' />
        <ul>
          <li onClick={toggleMobileMenu}>
            <a href='#home'>Home</a>
          </li>
          <li onClick={toggleMobileMenu}>
            <a href='#market'>Market</a>
          </li>
          <li onClick={toggleMobileMenu}>
            <a href='#choose-us'>Choose Us</a>
          </li>
          <li onClick={toggleMobileMenu}>
            <a href='#join'>Join</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
