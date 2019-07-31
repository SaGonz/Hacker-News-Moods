import React from "react";
//Styles
import '../stylesheets/base/_fonts.scss';
import '../stylesheets/components/_comment.scss'

class Comment extends React.Component {

  constructor(){
    super();

    this.state = {
      metadata : undefined,
    }
  }
  async componentDidMount () {

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
          comments.push(<Comment id={comment} className="childComment" ></Comment>)
        }
      }
      return (
        <div className="comment">
          <ul>
              <li><b>{this.state.metadata.by}</b></li>
              <li>
                <p dangerouslySetInnerHTML={{__html : this.state.metadata.text}}/>
              </li>
          </ul>
          {comments}
        </div>
      );
    }
    return null
  }
}

export default Comment;