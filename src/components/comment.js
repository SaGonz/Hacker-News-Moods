import React from "react";
import '../css/comment.css'

class Comment extends React.Component {

  constructor(){
    super();

    this.state = {
      metadata : undefined,
    }
  }

  async componentDidMount(){

    const commentMetaData = await this.getComment()

    this.setState((state,props) => {
      return {metadata : commentMetaData}
    })
  }

  async getComment(){
    //parse prop from parent element for the item id (same as post)
    const apiMetaCall = await fetch(`https://hacker-news.firebaseio.com/v0/item/20466181.json`)
    const metaResponse = await apiMetaCall.json()

    return metaResponse
  }

  render(){
    return (
      <div>
        <ul>
            <li>by {/*this.state.metadata.by*/}</li>
            <li>time {/*this.state.metadata.time*/}</li>
        </ul>
        <p>{/*this.state.metadata.text*/}</p>         
      </div>
    );
  }
}

export default Comment;