import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import OriginalPostList from './components/originalpostlist';
import Pagination from './components/pagination';

class App extends React.Component {

  //For pagination : https://jasonwatmore.com/post/2017/03/14/react-pagination-example-with-logic-like-google
  constructor(){
    super();

    // an example array of 150 items to be paged
    var exampleItems = OriginalPostList.data;

    this.state = {
        exampleItems: exampleItems,
        pageOfItems: []
    };

    // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }
  //

  render(){
    return(
      <div>
        <Header/>
        <OriginalPostList/>
        <div>
          {this.state.pageOfItems.map(item => <div key={item.id}>{item.name}</div>)}
        </div>
        <Pagination/>
      </div>
    );
  }

}


export default App;
