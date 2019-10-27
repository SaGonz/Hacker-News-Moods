import React from "react";
//Styles
import '../stylesheets/base/_fonts.scss';
import '../stylesheets/components/_comment.scss'

class Comment extends React.Component {

  constructor(){
    super();

    this.state = {
      metadata : undefined,
      //Stores all the comments of the thread in a String
      ThreadComments : '',
      commentSentiment : 0
    }
  }

  async componentDidMount () {

    let JSONResponse = await this.getPost(this.props.id);
    const sentimentResponse = await this.getSentiment(this.state.metadata.text);

    this.setState((state, props) => {
      return {metadata: JSONResponse, commentSentiment: sentimentResponse}
    });
    console.log('What is metadata? ',this.state.metadata)
    console.log('Thread comments (1)', this.state.ThreadComments)
    this.state.ThreadComments += this.state.metadata.text
    console.log('Thread comments (2)', this.state.ThreadComments)
    
    
  }

  componentDidUpdate() {

    console.log( 'COMMENT props passed from the parent are', this.props)

  }

  async shouldComponentUpdate () {

    const post_metadata = await this.getPost();
    //const sentiment_response = await this.getSentiment(this..title);

    this.setState((state, props) => {
        //return {metadata: post_metadata, title_sentiment: sentiment_response}
        return {metadata: post_metadata}
    })
    return true
  } 

  getSentiment = async ( text ) => {
    const sentiment_call = await fetch('/sentiment/', {
            method: 'POST',
            body: JSON.stringify({'text': text})
        });
    console.log(sentiment_call)
    const sentiment_response = await sentiment_call.json()
    return sentiment_response
  }

  getPost = async (id) => {
    const PostApiCall = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    const PostJSONResponse = await PostApiCall.json()

    return PostJSONResponse;
}

  render(){
    let CommentsString = '';
    if (this.state.metadata) {
      let comments = []
      if (this.state.metadata.kids) {
        for (let comment of this.state.metadata.kids) {
          //if getSentiment(this.state.metadata.text) > 0{}
          /*var mood = {
            background-color: linear-gradient(163deg, rgba(245,84,121,1) 0%, rgba(186,0,0,1) 100%);
            $altColor: linear-gradient(163deg, rgba(143,255,79,1) 0%, rgba(13,176,143,1) 100%);
            $altColor: linear-gradient(146deg, rgba(154,243,245,1) 0%, rgba(6,119,163,1) 100%);
            $altTextColor: -webkit-linear-gradient(163deg, rgba(245,84,121,1) 0%, rgba(186,0,0,1) 100%);
            $altTextColor: -webkit-linear-gradient(163deg, rgba(143,255,79,1) 0%, rgba(13,176,143,1) 100%);
            $altTextColor: -webkit-linear-gradient(146deg, rgba(154,243,245,1) 0%, rgba(6,119,163,1) 100%);
          }*/

          comments.push(<Comment id={comment} /*style={mood}*/></Comment>)
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
    return null;
  }
}

export default Comment;