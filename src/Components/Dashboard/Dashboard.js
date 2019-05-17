import React, {Component} from 'react';
import axios from 'axios';

// COMPONENTS
import Product from '../Product/Product';

class Dashboard extends Component {
    constructor(props){
        super(props);
    }
    
    handleDeleteProduct = (id) => {
        const { getInventory } = this.props;
        axios.delete(`/api/product/${id}`)
            .then(() => {
                getInventory();
            })
            .catch((err) => {
                alert(err);
            });
    }
    
    render(){
        const { inventory, setSelectedProduct } = this.props;
        const mappedProducts = inventory.map((product, i) => (
            <Product key={i} product={product} handleDeleteProduct={this.handleDeleteProduct} setSelectedProduct={setSelectedProduct} />
        ))
        
        return(
            <div>
                <p>Dashboard</p>
                {mappedProducts}
            </div>
        )
    }

};

export default Dashboard;