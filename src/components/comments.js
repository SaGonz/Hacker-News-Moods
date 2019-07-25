import React from 'react';

//Components
import Comment from './comment';


class Comments extends React.Component {
  
  componentDidUpdate() {

    console.log( 'propse passed from the parent are', this.props
     )

  }
  //

  render() {
    if (Object.values(this.props.post).length > 0 && Object.values(this.props.post.kids).length > 0) {
      let initialComments = []
      for (let comment of this.props.post.kids) {
        initialComments.push(<Comment id={comment}></Comment>)
      }
      return (<div>{initialComments}</div>)
    }
    return null
  }

}


export default Comments;
