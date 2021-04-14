import React,{Component} from 'react';
import './Welcome.css';
class WelcomeBackRegister extends Component {
    constructor(props){
        super(props);
       this.state = {
            name:"",
            mobile:"",
            email:"",
            password:"",
            
        };
    }
         Register = ()=>{
                const {name,mobile,email,password}=this.state;
                const userlist = JSON.parse(localStorage.getItem('newData'));
                const newData = userlist.length > 0 ? [...userlist, {name,mobile,email,password} ] : [{name,mobile,email,password}];
                localStorage.setItem('newData', JSON.stringify(newData));
                this.props.history.push('WelcomeBackLogin');
                console.log("register",newData);
        }
        
        
    render(){
        return( 
                    <div>
                    <h2 className="heading">Welcome Back!</h2>
                    <h4 className="CaptionName">Please Enter Your Details</h4>
                    <input type="text" name="name" placeholder="Enter Your Name" onChange={e => this.setState({name:e.target.value})} value={this.state.name}/><br/>
                    <input type="text" name="number" placeholder="Enter Your Number" onChange={e => this.setState({mobile:e.target.value})} value={this.state.mobile}/><br/>
                    <input type="email" name="number" placeholder="Enter Your Email" onChange={e => this.setState({email:e.target.value})} value={this.state.email}/><br/>
                    <input type="password" name="number" placeholder="Enter Password" onChange={e => this.setState({password:e.target.value})} value={this.state.password}/><br/>
                    <button className="btn1" onClick={this.Register}>Register</button>
                    </div>
                                        
        );
    }


}

export default WelcomeBackRegister;