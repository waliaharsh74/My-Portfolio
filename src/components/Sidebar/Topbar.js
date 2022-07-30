import './Topbar.scss'
// import LogoS from '../../assets/images/W.svg'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
// import { Person, Mail } from '@material-ui/icons'

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <Link className="logo2" to="/">
              {/* <img src={LogoS} alt="Logo" /> */}
              <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
            </Link>
          </a>
          <nav>
            <NavLink exact="true" activeclassname="active" to="/">
              <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink
              activeclassname="active"
              className="about-link"
              to="/about"
            >
              <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink
              activeclassname="active"
              className="portfolio-link"
              to="/portfolio"
            >
              <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
            </NavLink>
            <NavLink
              activeclassname="active"
              className="contact-link"
              to="/contact"
            >
              <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  )
}
