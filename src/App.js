import React, {Component} from 'react';
import axios from'axios';

// STYLESHEETS
import './reset.css';
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
      selectedProduct: {},
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

  setSelectedProduct = (product) => {
    this.setState ({
      selectedProduct: product,
    })
  }

  render(){

    const { inventory, selectedProduct } = this.state;

    return (
      <div className="App">
        <Header />
        <section className="dashAndForm">
          <Dashboard inventory={inventory} getInventory={this.componentDidMount} setSelectedProduct={this.setSelectedProduct} />
          <Form getInventory={this.componentDidMount} selectedProduct={selectedProduct}/>
        </section>
      </div>
    );
  }
}

export default App;
