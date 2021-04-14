import React, {Component} from 'react';

const fruits = ['mango', 'banana', 'apple', 'grape', "kiwi"];

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            count: 0
        }
    }

    onChange = (e) => {
        this.setState({name: e.target.value});
    }

    onFuckMeClick = () => {
        this.setState({count: this.state.count + 1});
    }
    render() {
        return(
            <div>
            <ul>
                {fruits.map((item, index) => <li key={index}>{index + 1} {item} </li>)}    
            </ul>
            <input 
                type = "text" 
                value = {this.state.name}  
                onChange={this.onChange}
            />
            <button onClick={this.onFuckMeClick}>fuck me</button>
            {this.state.count}
            </div>
        )
    }
}

export default List;
