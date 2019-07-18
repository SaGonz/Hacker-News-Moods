import React from 'react';
import OriginalPost from './originalpost';

class OriginalPostList extends React.Component{

    state = {
        postIds: [],
        pageSize: 5,
        currentPage: 1,
    }
    
    getPostList = async (response) => {
        const api_call = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
        const data = await api_call.json()
        console.log(api_call)
        return data
    }

    currentPageIds () {
        console.log(this.state.currentPage, this.state.pageSize)
        const lowerBound = (this.state.currentPage - 1) * this.state.pageSize
        const upperBound = this.state.currentPage * this.state.pageSize
        console.log(upperBound, lowerBound)
        return this.state.postIds.slice(lowerBound, upperBound)
    }

    async componentWillMount () {
        const postList = await this.getPostList()
        this.setState((state, props) => {
            return {postIds: postList}
        })
    }

    render(){
        if (this.state.postIds.length > 0) {
            const items = []
            for (let postId of this.currentPageIds()) {
                items.push(<OriginalPost postId={postId}></OriginalPost>)
            }

            return(
                <div>
                    <div>
                        {items}
                    </div>
                    <div>
                        <footer></footer>
                    </div>
                </div>
            );
        } else {
            return null
        }
    }

}

export default OriginalPostList;