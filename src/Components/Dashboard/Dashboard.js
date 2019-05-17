import React from 'react';

// COMPONENTS
import Product from '../Product/Product';

const Dashboard = (props) => {
    const mappedProducts = props.inventory.map((product, i) => (
        <Product key={i} product={product} />
    ))

    return(
        <div>
            <p>Dashboard</p>
            {mappedProducts}
        </div>
    )

};

export default Dashboard;