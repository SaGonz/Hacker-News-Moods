import React from 'react';
import '../css/pagination.css';

class Pagination extends React.Component{

    render(){
        return(
            <div className="paginationWrapper">
                <div className="leftArrow"></div>
                <div className="rightArrow"></div>
            </div>
        );
    }
}

export default Pagination;