import React from "react";

class Comment extends React.Component {

  render(){
    return (
      <div>
        <ul>
            <li>by</li>
            <li>time</li>
        </ul>
        <p>text</p>         
      </div>
    );
  }
}

export default Comment;