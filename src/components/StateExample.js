import React from 'react';
import FullName from './FullName';
import FullNameReverse from './FullNameReverse';

class StateExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           firstName: "",
           lastName: ""
        };
    }

    onFirstNameChange = (event) => {
        this.setState({firstName: event.target.value});         
    }

    onLastNameChange = (event) => {
        this.setState({lastName: event.target.value});     
    }

    clickMe = () => {

    }

    render() {
        return (
            <div>
                <input onChange={this.onFirstNameChange} value={this.state.firstName} name="firstName" />
                <input onChange={this.onLastNameChange} value={this.state.lastName} />
                <div>{this.state. firstName} {this.state.lastName}</div>
                <FullName firstName={this.state.firstName} lastName={this.state.lastName} />
                <FullNameReverse firstName={this.state.firstName} lastName={this.state.lastName} />
                <button onClick={this.clickMe}></button>
            </div>
        );
    }
}

export default StateExample;
