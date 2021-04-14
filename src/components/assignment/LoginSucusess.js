import React, {Component} from 'react';


class LoginSucusess extends Component{
    constructor(props){
        super(props);
    }
    
            
            Pagechange = () =>{
                this.props.history.push('WelcomeBackLogin');
            }
        render(){
            const{location} =this.props
            const{state:{name,mobile,email}}=location;
            return(
                <div>
                    <h1 className="Sucusess">Welcome <span>{name}!</span></h1>
                    <div className="list">
                    <h2>Your Registered Details:</h2>
                    <hr/>
                    <h3>Name: <span>{name}</span></h3>
                    <h3>Mobile: <span>{mobile}</span></h3>
                    <h3>Email Id: <span>{email}</span></h3>
                    </div>
                    <button className="btn2" onClick={this.Pagechange} >Log Out</button>
                </div>
            );
        }
}

export default LoginSucusess;