import React, {Component} from 'react';
import './App.css';

// COMPONENTS
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';

class App extends Component {
  constructor(){
    super();

    this.state = {
      inventory: [
        {name: 'product1', price: 20, imageURL: ''},
        {name: 'product2', price: 20, imageURL: ''},
        {name: 'product3', price: 20, imageURL: ''},
      ],
    }
  }

  render(){

    const {inventory} = this.state;

    return (
      <div className="App">
        <Header />
        <section>
          <Dashboard inventory={inventory} />
          <Form />
        </section>
      </div>
    );
  }
}

export default App;
