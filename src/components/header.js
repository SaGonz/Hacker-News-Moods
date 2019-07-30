import React from 'react';
import '../stylesheets/components/header.scss';

class Header extends React.Component{
    render(){
        return(
            <div className='header-wrapper'>
                <nav>
                    <h1>Hacker News</h1>
                </nav>
            </div>
        );
    }
}

export default Header;