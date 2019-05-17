import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
            imageURLInput: '',
            productNameInput: '',
            priceInput: '',
            id: null,
            edit: false,
        }
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.selectedProduct.id !== this.props.selectedProduct.id) {
            const { image_url, name, price, id } = this.props.selectedProduct;
            this.setState ({
                imageURLInput: image_url,
                productNameInput: name,
                priceInput: price,
                id: id,
                edit: true,
            })
        }
    }

    handleInputChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleClearInput = (e) => {
        e.preventDefault();
        this.setState({
            imageURLInput: '',
            productNameInput: '',
            priceInput: '',
            edit: false,
        });
    }

    handleAddProduct = (e) => {
        e.preventDefault();
        const name = this.state.productNameInput;
        const price = this.state.priceInput;
        const image_url = this.state.imageURLInput;
        const {getInventory} = this.props;
        axios.post('/api/product', { name, price, image_url })
            .then(() => {
                getInventory();
                this.handleClearInput(e);
            })
            .catch((err) => {
                alert(err);
            });
    }

    handleUpdateProduct = (e) => {
        e.preventDefault();
        const name = this.state.productNameInput;
        const price = this.state.priceInput;
        const image_url = this.state.imageURLInput;
        const { id } = this.state;
        const {getInventory} = this.props;
        axios.put(`/api/product/${id}`, { name, price, image_url })
            .then(() => {
                getInventory();
                this.handleClearInput(e);
            })
            .catch((err) => {
                alert(err);
            });
    }

    render(){
        return(
            <div>
                <img src={this.state.imageURLInput} />
                <form>
                    <input placeholder="Product Name" name='productNameInput' value={this.state.productNameInput} onChange={this.handleInputChange} />
                    <input placeholder="Price" name='priceInput' value={this.state.priceInput} onChange={this.handleInputChange} />
                    <input placeholder="Image URL" name='imageURLInput' value={this.state.imageURLInput} onChange={this.handleInputChange} />
                    <div>
                        <button onClick={this.handleClearInput}>Cancel</button>
                        {
                            !this.state.edit ?
                            <button onClick={this.handleAddProduct}>Add to Inventory</button>
                            :
                            <button onClick={this.handleUpdateProduct}>Save Changes</button>
                        }
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;