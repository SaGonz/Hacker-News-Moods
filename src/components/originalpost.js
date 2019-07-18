import React from 'react';
import Comments from './commentpage';
import '../css/originalpost.css'

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
    shouldComponentUpdate () {
        return true
    }

    getPost = async () => {
        const api_meta_call = await fetch(`https://hacker-news.firebaseio.com/v0/item/${this.props.postId}.json`)
        const meta_response = await api_meta_call.json()
        //console.log(api_meta_call)
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
                <h1>{this.state.metadata.title}</h1>
                <h2><a href={this.state.metadata.url}>{this.state.metadata.type}</a></h2>
                <h3>
                    <ul className="postInfo">
                        <li>Posted by : {this.state.metadata.by}</li>
                        <li>Score : {this.state.metadata.score}</li>
                        <li>  <Comments number={this.state.metadata.descendants}/></li>
                    </ul>
                </h3>
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