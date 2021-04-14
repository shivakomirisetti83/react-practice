import React, {Component} from 'react';


class LoginFail extends Component{

    Pagechange = () =>{
        this.props.history.push('WelcomeBackLogin');
    }
        render(){
            return(
                <div>
                    <h1 className="Sucusess">
                    Welcome Back!<br/>
                    Your Login was Fail.
                    </h1>
                    <h3>Please <a onClick={this.Pagechange}>Tryagain</a></h3>
                </div>
            );
        }
}

export default LoginFail;