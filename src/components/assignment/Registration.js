import React from 'react';
import {connect} from 'react-redux';
import {registrationactions} from '../../Redux/Actions/RegistrationActions';


const Reg = ({firstname,lastname,dob,email,gender,contact,updatefname,updatelname,updatedateofbirth,updategender,updateemail,updatecontact,seedetails,showresults}) =>{

            const changeFirstName = (e) =>{
                updatefname(e.target.value);
                seedetails(false);
                
            }

            const changelastName = (e) =>{
                updatelname(e.target.value);
                seedetails(false);
            }

            const changedateofbirth = (e) =>{
                updatedateofbirth(e.target.value);
                seedetails(false);
            }

            const changeGender = (e) =>{
                updategender(e.target.value);
                seedetails(false);
            }

            const changeEmail = (e) =>{
                updateemail(e.target.value);
                seedetails(false);
                
            }

            const changeContact = (e) =>{
                updatecontact(e.target.value);
                seedetails(false);
            }
            
            

            return (
                <div>
                    
                    <fieldset className="set">
                        <legend className="legend">Registration Form</legend>
                            <label>First Name:</label>
                            <input type="text" value={firstname} onChange={changeFirstName} /><br/>

                            <label>Last Name:</label>
                            <input type="text" value={lastname} onChange={changelastName} /><br/>

                            <label>Date of birth:</label>
                            <input type="date" value={dob} onChange={changedateofbirth} /><br/>
                        
                            <label>Gender:</label>
                            <input type="radio" id="male" name="gender" value="Male" onChange={changeGender}/>
                            <label for="male">Male</label><br/>
                            <input type="radio" id="female" name="gender" value="Female" onChange={changeGender}/>
                            <label for="female">Female</label><br/>
                            <input type="radio" id="others" name="gender"value="Others" onChange={changeGender}/>
                            <label for="others">Others</label><br/>

                            <label>Email:</label>
                            <input type="email" value={email} onChange={changeEmail}/><br/>

                            <label>Contact:</label>
                            <input type="tel" value={contact} onChange={changeContact}/><br/>

                            <button className="btn22" onClick={()=>seedetails(true)}>See Your Details</button>   
                        </fieldset> 
                    
                        {showresults &&
                    <div className="result">
                        <h2>FirstName :{firstname}</h2>
                        <h2>LastName :{lastname}</h2>
                        <h4>Date Of Birth :{dob}</h4>
                        <h4>Gender :{gender}</h4>
                        <h4>Email :{email}</h4>
                        <h4>Contact :{contact}</h4>
                    </div>}
                </div>
            );
}
    
    const mapStateToProps = (state) =>{
        return{
            firstname:state.registration.firstname,
            lastname:state.registration.lastname,
            dob:state.registration.dob,
            gender:state.registration.gender,
            email:state.registration.email,
            contact:state.registration.contact,
            showresults:state.registration.showresults
        }
    }
    const mapDispatchToProps = registrationactions

export default connect (mapStateToProps , mapDispatchToProps)(Reg);




