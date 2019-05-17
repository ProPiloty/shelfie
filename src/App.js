import React, {Component} from 'react';
import axios from'axios';
import './App.css';

// COMPONENTS
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';

class App extends Component {
  constructor(){
    super();

    this.state = {
      inventory: [],
    }
  }

  componentDidMount = () =>{
    axios.get('/api/inventory')
      .then((res) => {
        this.setState({
          inventory: res.data,
        })
      })
      .catch((err) => {
        alert(err);
      })
  }

  render(){

    const {inventory} = this.state;

    return (
      <div className="App">
        <Header />
        <section>
          <Dashboard inventory={inventory} />
          <Form getInventory={this.componentDidMount}/>
        </section>
      </div>
    );
  }
}

export default App;
