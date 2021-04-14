import React,{Component} from 'react';

import './Welcome.css';
class WelcomeBackLogin extends Component {
    constructor(props){
        super(props);
       this.state = {
            email:"",
            password:"",
            
        };
    }
         Login = ()=>{
            
            const ReceiveData = JSON.parse(localStorage.getItem('newData'));
            const{name, mobile,email}=this.props;
            console.log("login",ReceiveData);
            for(let i=0; i<=ReceiveData.length-1;i++){
                if(this.state.email === ReceiveData[i].email && this.state.password === ReceiveData[i].password){
                    this.props.history.push('LoginSucusess', {...ReceiveData[i]});
                    break;
                }else{
                    this.props.history.push('LoginFail');
                }
            }

         }

        Pagechange = () =>{
            this.props.history.push('WelcomeBackRegister');
        }
    render(){
        return( 
                    <div>
                    <h2 className="heading">Welcome Back!</h2>
                    <h4 className="CaptionName">please login to your account</h4>
                    <input type="text" name="name" placeholder="Enter Your Email" onChange={e => this.setState({email:e.target.value})} value={this.state.name}/><br/>
                    <input type="password" name="number" placeholder="Enter Password" onChange={e => this.setState({password:e.target.value})} value={this.state.password}/><br/>
                    <button  className="btn1"onClick={this.Login}>Login</button>
                    <h4>or</h4>
                    <a onClick={this.Pagechange}><h2>Register</h2></a>
                    </div>
                
        );
    }


}

export default WelcomeBackLogin;