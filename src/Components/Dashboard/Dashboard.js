import React, {Component} from 'react';

// COMPONENTS
import Product from '../Product/Product';

class Dashboard extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <p>Dashboard</p>
                <Product />
            </div>
        )
    }
};

export default Dashboard;