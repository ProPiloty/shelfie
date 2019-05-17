import React from 'react';

const Product = (props) => {
    const { name, price, imageURL } = props.product;
    return(
        <div>
            <img src={imageURL} />
            <div>
                <h3>{name}</h3>
                <h4>{price}</h4>
            </div>
        </div>
    )

}

export default Product;