import React from 'react';
import apiURL from '../api';

export class ItemForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            errors: {},
            formIsValid: null
        }
    }


    handleChange(field, err) {
        let fields = this.state.fields;
        fields[field] = err.target.value;
        this.setState({fields});
    }

    async itemSubmit(err) {
        try {
            await fetch(`${apiURL}/items`,  {
                method: 'POST',
                headers: {
               'Content-Type': 'application/json',
               },
                body: JSON.stringify(this.state.fields),
            });
            alert("Item Added! Reloading Inventory...");
        } catch (err) {
            console.log(err);
        }
    }

    validate() {
        let fields = this.state.fields;
        let erros = {};
        let isValid = true;

        if(fields["title"] === undefined) isValid = false;
        else if(fields["title"].trim() === "") isValid = false;

        if(fields["price"] === undefined) isValid = false;
        else if(fields["price"].trim() === "") isValid = false;

        if(fields["category"] === undefined) isValid = false;
        else if(fields["category"].trim() === "") isValid = false;

        this.setState({isValid});
    }

    render() {
        return <div>
            <form name="itemform" className="itemform" onSubmit = {this.itemSubmit.bind(this)}>
                <h3 className="form-header">Add Item To Inventory!!!</h3>
                <input type="text" placeholder="Item Name" onChange={this.handleChange.bind(this, "title")} value={this.state.fields["name"]}/>
                <br/>
                <input type="number" placeholder="Price" onChange={this.handleChange.bind(this, "price")} value={this.state.fields["price"]}/>                
                <br/>
                <input type="text" placeholder="Category" onChange={this.handleChange.bind(this, "category")} value={this.state.fields["category"]}/>                
                <br/>
                <textarea cols="20" rows="4" placeholder="Description" onChange={this.handleChange.bind(this, "description")}>
                    {this.state.fields["description"]}
                </textarea>
                <br/>
                <button id="submit" value="submit" onClick={() => addItem(item)}>Add Item</button>
            </form>
        </div>;
    }
}
