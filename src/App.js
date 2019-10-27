//Packages
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Styles
import './App.scss';

//Components
import Header from './components/header';
import OriginalPostList from './components/originalpostlist';
import CommentPage from './components/commentpage';

class App extends React.Component {

  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }
  
  render(){

    const PUBLIC_URL = "https://sagonz.github.io/Hacker-News-Moods/";

    return(
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        <Header/>

        <Switch>
          <Route exact path="./" component={OriginalPostList}/>
          <Route path="./comments/:postId" component={CommentPage}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }

}


export default App;
