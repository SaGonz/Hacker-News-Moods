import React from "react";
import '../css/commentpage.css';
import Comment from './comment';
import { Link } from 'react-router-dom';

class CommentPage extends React.Component {
  

    async componentDidMount() {
        console.log(this.props.match)
    }

    getPost = async () => {
        const PostApiCall = await fetch(`https://hacker-news.firebaseio.com/v0/item/${this.props.match.params.postId}.json`)
        const PostJSONResponse = await PostApiCall.json()

        return PostJSONResponse;
    }

    getNun = async () => {
        const Comments = await this.getPost();
        const CommentList = Comments.kids;
        console.log('kids2',Comments);
        console.log('commentlist1',CommentList);
        return Comments;
    }

    render(){
        return (
        <div className="comment-page-wrapper">
            <div className="comment-page-header">
                <h1>Comment page:</h1>
                <p> id: {this.props.match.params.postId} {console.log(this.getNun())}</p>
            </div>
            <div className="comment-list">
            <Comment/>     
            </div>
            <Link to="/">return</Link>
        </div>
    );
  }
}

export default CommentPage;