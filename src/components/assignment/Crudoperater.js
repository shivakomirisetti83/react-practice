import React, {Component} from 'react';
import {connect} from 'react-redux';
import CrudActions from '../../Redux/Actions/CrudActions';
class Crud extends Component {
                
        adduser = () => {
            const{users ,name,age,}=this.props;
            const newUsers = [...users, {name, age, edit: false}];
            this.props.adduser(newUsers);
            this.props.updatename("")
            this.props.updateage("")
        }

        delete = (i) =>{
            const{users ,name,age,}=this.props;
            const newUsers = users.filter((item, index) => index !==i );
            this.props.adduser(newUsers);
        }

        editClick = (i) => {
            const {users:{name},users,edit}=this.props;
            const newUsers = users.map((item, index)=> index == i ?{...item, editable: true}:{...item, editable:false}) 
            this.props.adduser(newUsers);
            this.props.updatename(newUsers[i].name)
            this.props.updateage(newUsers[i].age)
            this.props.button(false);  
            this.input.focus();         
            
        }     
        
        update = (i) =>{
            const {users,name,age} = this.props;
            console.log(i);
            const updatedUser = users.map((item,index) => index == i ? {...item, name:name, age:age,editable:false}:{...item})
            console.log(updatedUser)
            this.props.adduser(updatedUser);
            this.props.updatename("")
            this.props.updateage("")
            this.props.button(true);
            

            
        }

        render(){
            const {name,age}=this.props;
        return (
            <div>
                <table>
                    <thead className="thead-crud">
                        <tr>
                            <td>Name</td>
                            <td>Age</td>
                            <td colSpan="2">Action</td>
                        </tr>
                    </thead>
                    <tbody className="tbody-crud">
                        {this.props.users.map((item,index) =>{
                            const{name,age, editable} = item;
                            return(
                                !editable ?(
                                <tr>
                                    <td>{name}</td>
                                     <td>{age}</td>
                                    <td><button onClick={()=> this.editClick(index)}>Edit</button></td>
                                    <td><button onClick={()=>this.delete(index)}>Delete</button></td>
                                 </tr>
                                 ):(
                                    <tr>
                                    <td>{name}</td>
                                     <td>{age}</td>
                                    <td><button onClick={()=>this.update(index)}>Update</button></td>
                                 </tr>)
                                 
                            );
                        }

                        )}
                    </tbody>
                </table>
                <br/>
                <div>
                    <input type="text" onChange={e=>this.props.updatename(e.target.value)} value={name} name="name" ref={(input) => { this.input = input; }} autoFocus placeholder="Name" />
                    <input type="text" onChange={e=>this.props.updateage(e.target.value)} value={age} name="age" placeholder="Age"/>
                    {this.props.addbutton && (<button onClick={this.adduser}>Add+</button>) }
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
        return{
            users:state.crud.users,
            name:state.crud.adduser.name,
            age: state.crud.adduser.age,
            update:state.crud.update,
            editable: state.crud.adduser.editable,
            addbutton:state.crud.addbutton,
        }
}
const mapdispatchToProps = CrudActions


export default connect(mapStateToProps, mapdispatchToProps)(Crud);