import React from 'react';
import './Header.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GavelIcon from '@material-ui/icons/Gavel';

function Header() {
    return (
        <div className="header_main">
          <div className="header_left">

            <p><GavelIcon style={{ fontSize: 28}}/>Pseudo Co.<br />Landing Page</p>

          </div>

          <div className="header_right">
            <LinkedInIcon className="header_logos" style={{ fontSize: 30 }}/>
            <GitHubIcon className="header_logos" style={{ fontSize: 27 }}/>
            <InstagramIcon className="header_logos" style={{ fontSize: 30 }}/>
          </div>
        </div>
    )
}

export default Header;
