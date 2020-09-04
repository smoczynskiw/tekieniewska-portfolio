import React from 'react'
import logoPic from '../../assets/logo.jpeg'
import styles from './styles.js'
import SocialButton from '../SocialButton'

const { main, logo, navLink, navLinksWrapper, socialButtonsWrapper } = styles

const Navbar = ({ links, socials }) => (
  <div style={main}>
    <img style={logo} src={logoPic} />
    <div style={navLinksWrapper}>
      {links.map(link => <a style={navLink}>{link}</a>)}
    </div>
    <div style={socialButtonsWrapper}>
      {socials.map(social => <SocialButton icon={social} />)}
    </div>
  </div>
)


export default Navbar