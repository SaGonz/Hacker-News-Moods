import React from 'react';
import OriginalPost from './originalpost';

class OriginalPostList extends React.Component{

    state = {
        postIds: [],
        

    }
    
    getPostList = async (response) => {
        const api_call = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
        const data = await api_call.json()
        console.log(api_call)
        return data
    }

    async componentWillMount () {
        const postList = await this.getPostList()
        this.setState((state, props) => {
            return {postIds: postList}
        })
        console.log(this.state.postIds)
    }

    render(){
        if (this.state.postIds.length > 0) {
            const items = []
            for (let postId of this.state.postIds) {
                items.push(<OriginalPost postId={postId}></OriginalPost>)
            }
            return(
                <div>
                    {items}
                </div>
            );
        } else {
            return null
        }
    }

}

export default OriginalPostList;