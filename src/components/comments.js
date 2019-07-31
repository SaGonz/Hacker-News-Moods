import React from 'react';

//Components
import Comment from './comment';


class Comments extends React.Component {
  
  componentDidUpdate() {

    console.log( 'propse passed from the parent are', this.props)

  }

  render() {

    let commentsString = "";
    let commentsString2 = "";

    if (Object.values(this.props.post).length > 0 && Object.values(this.props.post.kids).length > 0) {
      let initialComments = []
      for (let comment of this.props.post.kids) {
        initialComments.push(<Comment id={comment}></Comment>)

        //console.log('what is comment?', typeof comment);
        //console.log('what is kids then?', typeof this.props.post.kids);
        //commentsString += JSON.stringify(this.props.post.kids); 
        //commentsString2 += String(this.props.post.kids); 
        //console.log('Thanks! What is  Comments String?', commentsString)
        //console.log('Okay, what about Comments String 2?', commentsString2)
      }
      return (
        <div>{initialComments}</div>
      )
    }
    return null
  }

}


export default Comments;
