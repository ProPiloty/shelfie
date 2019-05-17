import React from 'react';

const Product = (props) => {
    const { id, name, price, imageURL } = props.product;
    const { handleDeleteProduct, setSelectedProduct, product } = props;

    return(
        <div>
            <img src={imageURL} />
            <div>
                <div>
                    <h3>{name}</h3>
                    <h4>{price}</h4>
                </div>
                <div>
                    <button onClick={ () => handleDeleteProduct(id) }>Delete</button>
                    <button onClick={() => setSelectedProduct(product)}>Edit</button>
                </div>
            </div>
        </div>
    )
}

export default Product;