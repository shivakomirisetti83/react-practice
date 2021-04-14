import React, { Component } from 'react';
import {connect} from 'react-redux';
import { actions } from '../../Redux/Actions/HomeActions';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title || "Hello World!"}</h1>
                {this.props.title ? (
                    <button onClick={this.props.closeGeod}>Exit Geod</button>
                ) :(
                    <button onClick={()=>
                        this.props.activateGeod({ title: 'I am a geo dude!' })
                
                     }>Click me</button>)
                    }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        title: state.geod.title
    }
}

const mapDispatchToProps = actions


export default connect(mapStateToProps, mapDispatchToProps)(Home);
