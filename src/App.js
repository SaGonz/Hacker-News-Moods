import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import OriginalPostList from './components/originalpostlist';

class App extends React.Component {

  render(){
    return(
      <div>
        <Header/>
        <OriginalPostList/>
      </div>
    );
  }

}


export default App;
