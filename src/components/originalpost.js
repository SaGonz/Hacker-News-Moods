//Packages
import React from 'react';
import { Link } from 'react-router-dom';
//Styles
import '../stylesheets/base/_fonts.scss';
import '../stylesheets/components/_originalpost.scss'
//Components
import CommentPage from './commentpage';




class OriginalPost extends React.Component{

    state = {
        metadata: {},
        title_sentiment: {},
    }

    async componentDidMount() {

        //console.log('original post object values', Object.values(this.props))

        const post_metadata = await this.getPost();
        //const sentiment_response = await this.getSentiment(post_metadata.title);

        this.setState((state, props) => {
            //return {metadata: post_metadata, title_sentiment: sentiment_response}
            return {metadata: post_metadata}
        })
    }

    async shouldComponentUpdate () {

        //console.log('original post object values', Object.values(this.props))

        const post_metadata = await this.getPost();
        //const sentiment_response = await this.getSentiment(post_metadata.title);

        this.setState((state, props) => {
            //return {metadata: post_metadata, title_sentiment: sentiment_response}
            return {metadata: post_metadata}
        })
        return true
    }

    getPost = async () => {
        const api_meta_call = await fetch(`https://hacker-news.firebaseio.com/v0/item/${this.props.postId}.json`)
        const meta_response = await api_meta_call.json()

        return meta_response
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

    render(){
        return(
            <div className="postBox">
                <div className="post-title">
                    <p>{this.state.metadata.title} </p>
                    <p><a href={this.state.metadata.url} target="_blank"> {this.state.metadata.type}</a></p>
                </div>
                <div>
                    <ul className="postInfo">
                        <li>Posted by : {this.state.metadata.by}</li>
                        <li>Score : {this.state.metadata.score}</li>
                        <li><Link to={`/comments/`+ this.state.metadata.id} target="_blank" > {this.state.metadata.descendants} comments </Link></li>
                    </ul>
                </div>
                {/*<p>
                     if( {this.state.title_sentiment.sentiment_polarity} > 0 ){

                     }

                     if({this.state.title_sentiment.sentiment_polarity} < 0 ){

                     }

                     if({this.state.title_sentiment.sentiment_polarity} === 0 ){

                     }
                    
                </p>*/}
            </div>
        );
    }
}

export default OriginalPost;