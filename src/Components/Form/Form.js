import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(){
        super();

        this.state = {
            imageURLInput: '',
            productNameInput: '',
            priceInput: '',
        }
    }

    handleInputChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleClearInput = (e) => {
        e.preventDefault();
        this.setState({
            imageURLInput: '',
            productNameInput: '',
            priceInput: '',
        })
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
                alert(err)
            });
    }

    render(){
        return(
            <div>
                <form>
                    <input name='productNameInput' value={this.state.productNameInput} onChange={this.handleInputChange} />
                    <input name='priceInput' value={this.state.priceInput} onChange={this.handleInputChange} />
                    <input name='imageURLInput' value={this.state.imageURLInput} onChange={this.handleInputChange} />
                    <div>
                        <button onClick={this.handleClearInput}>Cancel</button>
                        <button onClick={this.handleAddProduct}>Add to Inventory</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;