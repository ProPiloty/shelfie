import React, {Component} from 'react';

import './Header.css';

class Header extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div className="Header">
                <img src="https://raw.githubusercontent.com/ProPiloty/simulation-1/master/assets/shelfie_icon.png" className="shelfieLogo" />
                <h1 className="siteTitle">Shelfie</h1>
            </div>
        )
    } 
}

export default Header;