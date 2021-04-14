import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loginactions} from '../../Redux/Actions/LoginActions';



class Login extends Component{
    constructor() {
        super();
        console.log("I am constrctor")
    }

    componentWillMount() {
        console.log("I am will mount")
    }

    componentDidMount() {
        console.log("I am did mount")
    }

    componentWillReceiveProps(prevProps, nextProps) {
        console.log("props changed")
    }

    shouldComponentUpdate() {
        return false;
    }

    componentDidUpdate() {
        console.log("did update")
    }

    componentWillUnmount() {
        console.log("I am unmouned")
    }

    render (){
        console.log("I am render")
        const {email, password, updateEmail, updatepassword} = this.props;
        return(
            <div className="row1">
                <div className="login">
                <div className="left">
                    <h2>Login</h2>
                    <div className="icon">
                        <a href=""><img src="images/facebook.png" alt="facebook" height="40px" width="40px"/></a>
                        <a href=""><img src="images/twitter.png" alt="twitter" height="40px" width="40px"/></a>
                    </div>
                    <p className="para1">or use your account</p>
                    <form>
                    <input type="text" placeholder="Email" onChange={e => updateEmail(e.target.value)} value={email} />
                    <input type="password" placeholder="Password" onChange={e =>updatepassword(e.target.value)} value={password} />
                    <p>Forgot your password?</p>
                    <button onClick={() => null}>LOG IN</button>
                    </form>
                </div>
                <div className="right">
                    <h1>HTML CSS Login<br></br> Form</h1>
                    <p>This login form is created pure<br/> HTML and CSS. For social icons,<br/> FontAwesome is used. </p>
                </div>
                <div className="clear"></div>

                </div>

            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        email:state.email,
        password:state.password
    }
}

const mapDispatchToProps = loginactions


export default connect(mapStateToProps, mapDispatchToProps)(Login);