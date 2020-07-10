import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  state = {
    monsters: [],
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
      .catch((error) => console.log('fetch error ', error));
  }

  render() {
    return (
      <div className='App'>
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    );
  }
}

export default App;
