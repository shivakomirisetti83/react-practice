import React, {Component} from 'react';
import {connect} from 'react-redux';
import CrudActions from '../../Redux/Actions/CrudActions';
class Crud extends Component {
                
        adduser = () => {
            const{users ,name,age,}=this.props;
            const newUsers = [...users, {name, age, edit: false}];
            this.props.adduser(newUsers);
        }

        delete = (i) =>{
            const{users ,name,age,}=this.props;
            const newUsers = users.filter((item, index) => index !==i );
            this.props.adduser(newUsers);
        }

        editClick = (i) => {
            const {users,editable}=this.props;
            const newUsers = users.map((item, index)=> index === i) 
            console.log(newUsers, "ssss");
            this.props.adduser(newUsers);
        }        

        render(){
            const {name,age}=this.props;
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Age</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
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
                                    <td><button >Update</button></td>
                                 </tr>)
                                 
                            );
                        }

                        )}
                    </tbody>
                </table>
                <div>
                    <input type="text" onChange={e=>this.props.updatename(e.target.value)} value={name} />
                    <input type="text" onChange={e=>this.props.updateage(e.target.value)} value={age}/>
                    <button onClick={this.adduser}>Add+</button>
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
        }
}
const mapdispatchToProps = CrudActions


export default connect(mapStateToProps, mapdispatchToProps)(Crud);