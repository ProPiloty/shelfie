import React, {Component} from 'react';

class Form extends Component {
    constructor(){
        super();

        this.state = {
            imageURLInput: '',
            productNameInput: '',
            priceInput: null,
        }
    }

    handleInputChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleCancelInput = (e) => {
        e.preventDefault();
        this.setState({
            imageURLInput: '',
            productNameInput: '',
            priceInput: null,
        })
    }

    render(){
        return(
            <div>
                <form>
                    <input name='imageURLInput' value={this.state.imageURLInput} onChange={this.handleInputChange} />
                    <input name='productNameInput' value={this.state.productNameInput} onChange={this.handleInputChange} />
                    <input name='priceInput' value={this.state.priceInput} onChange={this.handleInputChange} />
                    <div>
                        <button onClick={this.handleCancelInput}>Cancel</button>
                        <button>Add to Inventory</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;