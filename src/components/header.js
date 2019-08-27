//Packages
import React from 'react';
import { Link } from 'react-router-dom';
//Styles
import '../stylesheets/base/_fonts.scss';
import '../stylesheets/components/_header.scss';


class Header extends React.Component{
    render(){
        return(
            <div className='header-wrapper'>
                <nav>
                    <h1><Link to="./">Hacker News</Link></h1>
                </nav>
            </div>
        );
    }
}

export default Header;