import React from 'react'
import './Footer.css'
import Github from "../../assets/github.png"
import Instagram from "../../assets/instagram.png"
import LinkedIn from "../../assets/linkedin.png"
import Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div>
        <div className="Footer-container">
            <hr/>
            <div className="footer">
                <div className="social-links">
                    <a href="https://github.com/rohansaini-02/fit-club-responsive-ui" target="_blank" rel="noreferrer">
                        <img src={Github} alt="" />
                    </a>
                    <img src={Instagram} alt="" />
                    <img src={LinkedIn} alt="" />
                </div>
                <div className="logo-f">
                    <img src={Logo} alt="" />
                </div>
                <div className="blur footer-blur"></div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
