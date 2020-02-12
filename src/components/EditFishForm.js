import React from 'react';

class EditFishForm extends React.Component{

    handleChange = (event) => {
        
        //update that fish
        //1. Take a copy of the current fish
        const updatedFish = {...this.props.fish,
        [event.currentTarget.name]: event.currentTarget.value}
        this.props.updateFish(this.props.index, updatedFish);
    }
    render(){
        return <div className="fish-edit">
            <input type="text" name="name" onChange = {this.handleChange} value={this.props.fishes.name}/>
            <input type="text" name="price" onChange = {this.handleChange} value={this.props.fishes.price}/>
            <select type="text" onChange = {this.handleChange} value = {this.props.fishes.status} name="status" >
            <option value="available">Fresh</option>
            <option value="unavailable">Sold out</option>
            </select>
            <textarea name="desc" onChange = {this.handleChange} value={this.props.fishes.desc}/>
            <input type="text" name="image" onChange = {this.handleChange} value={this.props.fishes.image}/>
            <button onClick={()=> this.props.deleteFish(this.props.index)}>Remove Fish</button>
        </div>
    }
}

export default EditFishForm; 