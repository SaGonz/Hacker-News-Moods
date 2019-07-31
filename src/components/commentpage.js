import React from "react";
import { Link } from 'react-router-dom';
//Styles
import '../stylesheets/base/_fonts.scss';
import '../stylesheets/components/_commentpage.scss';
//Components
import Comments from './comments';


class CommentPage extends React.Component {
  
    state = {
        OriginalPost : {}
    }

    async componentDidMount() {
        console.log(this.props.match)

        const OriginalPostMetadata = await this.getPost();
        console.log('original post metadata',OriginalPostMetadata)

        this.setState((state,props) =>{
            return{ OriginalPost : OriginalPostMetadata }
            }
        );
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
            <div>
            <Comments post={this.state.OriginalPost}/>     
            </div>
            <p className="return-link"><Link to="/">return</Link></p>
        </div>
    );
  }
}

export default CommentPage;