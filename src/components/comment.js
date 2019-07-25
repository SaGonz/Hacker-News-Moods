import React from "react";
import '../css/comment.css'

class Comment extends React.Component {

  constructor(){
    super();

    this.state = {
      metadata : undefined,
    }
  }
  async componentDidMount () {
    console.log('The comment prop is', this.props.id)
    let JSONResponse = await this.getPost()
    this.setState((state, props) => {
      return {metadata: JSONResponse}
    });
    
  }

  getPost = async () => {
    const PostApiCall = await fetch(`https://hacker-news.firebaseio.com/v0/item/${this.props.id}.json`)
    const PostJSONResponse = await PostApiCall.json()

    return PostJSONResponse;
}

  render(){
    if (this.state.metadata) {
      let comments = []
      if (this.state.metadata.kids) {
        for (let comment of this.state.metadata.kids) {
          comments.push(<Comment id={comment}></Comment>)
        }
      }
      return (
        <div className="comment">
          <ul>
              <li>id {this.props.id}</li>
              <li>{this.state.metadata.text}</li>
          </ul>
          <p>{/*this.state.metadata.text*/}</p>
          {comments}
        </div>
      );
    }
    return null
  }
}

export default Comment;