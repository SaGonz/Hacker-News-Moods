import React from 'react';
import '../stylesheets/components/pagination.scss';

class Pagination extends React.Component{

    state = {}

    render(){
        return(
            <div className="paginationWrapper">
                <div className="leftArrow" onClick={this.props.changePageDown}>&lt;</div>
                <div className="rightArrow" onClick={this.props.changePageUp}>&gt;</div>
            </div>
        );
    }
}

export default Pagination;