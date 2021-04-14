import React, {Component} from 'react';
import Mul from '../Mul';


class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: 10
        };
    }

    handleChange = (e) => {
        this.setState({name: e.target.value});
    }

    render() {
        return(
            <div className="row2">
                <input type="text" onChange={this.handleChange} />
                <div>{this.state.name} {this.state.age}</div>
                <Mul name={this.state.name} age={this.state.age} />
                <div className="container">
                    <div className="left">
                        <h1 className="head">Based on<br/>Boostrap 4</h1>
                        <p>We blend insights and strategy to create digital products for<br/> forward-thinking organisations.</p>
                        <button class="btn1">GET STARTED</button>
                        <button class="btn2">DOWNLOAD</button>
                    </div>
                        
                </div>
                <div className="right">
                        <img src="images/img3.png" alt="Image"/>
                    </div>
                    <div className="clear"></div>
            </div>            
        );
    }

}
export default Banner;