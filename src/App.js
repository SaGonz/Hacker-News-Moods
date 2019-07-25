//Packages
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Styles
import './App.css';

//Components
import Header from './components/header';
import OriginalPostList from './components/originalpostlist';
import CommentPage from './components/commentpage';


class App extends React.Component {

  constructor(){
    super();
  }

  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }
  

  render(){
    return(
      <BrowserRouter>
      <div>
        <Header/>

        <Switch>
          <Route exact path="/" component={OriginalPostList}/>
          <Route path="/comments" component={CommentPage}/>
        </Switch>

        <div>
          {/*this.state.pageOfItems.map(item => <div key={item.id}>{item.name}</div>)*/}
        </div>
      </div>
      </BrowserRouter>
    );
  }

}


export default App;
