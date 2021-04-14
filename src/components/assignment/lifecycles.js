import React from 'react';

class ComponentLifeCycle extends React.Component {
    constructor() {
        super();
        console.log("I am constrctor")

        this.state = {
            data : 0,
        }
        this.setNewNumber = this.setNewNumber .bind(this) ;
        this.setOldNumber = this.setOldNumber .bind(this);
    }
    setNewNumber () {
        this.setState({data: this.state.data+ 1})
    }
    setOldNumber (){
        this.setState({data:this.state.data - 1})
    }

    render (){
        return(
            <div>
                <button onClick={this.setNewNumber}>Increment</button>
                <button onClick={this.setOldNumber}>Decrement</button>
                <Content mynumber = {this.state.data}></Content>
            </div>
        );
    }
}


class Content extends React.Component {

        componentWillMount () {
            console.log('Component Will Mount');
        }

        componentDidMount () {
            console.log('Component Did Mount');
        }

        componentWillReceiveProps (newProps) {
            console.log('Will Receive Props')
            console.log(newProps)
        }

        shouldComponentUpdate (newProps, newState) {
            return true;
        }

        componentWillUpdate (nextProps, nextState){
            console.log('Will Update!');
            console.log(nextProps)
            console.log(nextState)
        }

        componentDidUpdate (prevProps, prevState){
            console.log('Did Update!')
            console.log(prevProps)
            console.log(prevState)
        }
        
        componentWillUnmount (){
            console.log('Component Will Unmount!');
        }

        render(){
            return(
                <div>
                    <h1>{this.props.mynumber}</h1>
                </div>
            );
        }

}

export default ComponentLifeCycle;