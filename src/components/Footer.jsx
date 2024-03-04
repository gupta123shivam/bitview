import { FaDiscord } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <>
      <footer>
        <div className='footer-content'>
          <div className='footer-content__socials'>
            <FaTwitter className='footer-icon' />
            <FaDiscord className='footer-icon' />
            <FaFacebook className='footer-icon' />
            <FaYoutube className='footer-icon' />
          </div>
          <div className='footer-content__text'>
            <p>Privacy</p>
            <p>Terms of Use</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
