import React from 'react';
import OriginalPost from './originalpost';
import Pagination from './pagination';

class OriginalPostList extends React.Component{

    constructor (props) {
        super(props)
        // Normally the "this" context is bound to the state of the calling component. In this case though, these functions
        // will be called by child components, but we want to mutate data on the parent. Therefore, we have to bind the "this"
        // context to the parent so we can acccess the parent state and mutate it from the child
        this.changePageUp = this.changePageUp.bind(this)
        this.changePageDown = this.changePageDown.bind(this)

    }

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


    changePageDown () {
        console.log('change page called')
            if (this.state.currentPage > 1) {
                this.setState((state, props) => {
                    return {currentPage: this.state.currentPage - 1}
                })
                this.render()
            }
        }

    changePageUp () {
        console.log('change page up called')
            if (this.state.currentPage < this.state.postIds.length / 5) {
                this.setState((state, props) => {
                    return {currentPage: this.state.currentPage + 1}
                })
                this.render()
        }
        console.log('new page is ', this.state.currentPage)
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
                        <Pagination changePageDown={this.changePageDown} changePageUp={this.changePageUp}/>
                    </div>
                </div>
            );
        } else {
            return null
        }
    }

}

export default OriginalPostList;