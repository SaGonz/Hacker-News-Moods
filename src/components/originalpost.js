import React from 'react';
import Comments from './comments';

class OriginalPost extends React.Component{

    state = {
        metadata: {},
    }
    async componentDidMount() {

        console.log('original post object values', Object.values(this.props))

        const post_metadata = await this.getPost();

        this.setState((state, props) => {
            return {metadata: post_metadata}
        })
    }
    shouldComponentUpdate () {
        return true
    }

    getPost = async (response) => {
        const api_meta_call = await fetch(`https://hacker-news.firebaseio.com/v0/item/${this.props.postId}.json`)
        const meta_response = await api_meta_call.json()
        console.log(api_meta_call)
        return meta_response
    }

    render(){
        return(
            <div>
                <h1>{this.state.metadata.title}</h1>
                <h2><a href={this.state.metadata.url}>{this.state.metadata.type}</a></h2>
                <h3>
                    <ul>
                        <li>Posted by : {this.state.metadata.by}</li>
                        <li>Score : {this.state.metadata.score}</li>
                        <li>  <Comments number={this.state.metadata.descendants}/></li>
                    </ul>
                      
                </h3>
            </div>
        );
    }
}

export default OriginalPost;