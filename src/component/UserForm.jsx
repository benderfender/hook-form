import React, {useState} from 'react';

const UserForm = (props) => {
    
    const [regform,setRegform] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        cwpass: ""
    });

    const[display,setDisplay] = useState(null);

    const handleRegform = (e) => {
        setRegform({
            ...regform,
            [e.target.name]: e.target.value
        })
    }

    const createUser = (e) => {
        e.preventDefault();
        setDisplay(regform);
        setRegform({
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            cwpass: ""
        });
    };

    const nameValid = (name) => {
        if(name.length <2 && name.length !==0) {
            return false;
        } 
        return true;
    }
    const passwordValid = (name) => {
        if(name.length <4 && name.length !==0) {
            return false;
        } 
        return true;
    }
    const cwpassValid = (name) => {
        if(regform.password !== regform.cwpass && name.length !==0) {
            return false;
        } 
        return true;
    }

    return(
        <div>
            <form onSubmit = {createUser} className="col-5 mx-auto my-5">
                <h2>Registeration Form</h2>
                <div className="form-group">
                    <label>First Name </label>
                    <input className="form-control" type="text" name="firstname" value={regform.firstname} onChange={handleRegform} placeholder="Enter Your First Name"/>
                    {nameValid(regform.firstname)?"":<p class="alert alert-danger" role="alert">Must contain at least 2 characters!!!!</p>}
                </div>
                <div className="form-group">
                    <label>Last Name </label>
                    <input className="form-control" type="text" name="lastname" value={regform.lastname} onChange={handleRegform} placeholder="Enter Your Last Name"/>
                    {nameValid(regform.lastname)?"":<p class="alert alert-danger" role="alert">Must contain atleast 2 characters!!!!</p>}
                </div>
                <div className="form-group">
                    <label>Email </label>
                    <input className="form-control" type="text" name="email" value={regform.email} onChange={handleRegform} placeholder="Enter Your Email"/>
                    {nameValid(regform.email)?"":<p class="alert alert-danger" role="alert">Must contain atleast 2 characters!!!!</p>}
                </div>
                <div className="form-group">
                    <label>Password </label>
                    <input className="form-control" type="text" name="password" value={regform.password} onChange={handleRegform} placeholder="Enter Your Password"/>
                    {passwordValid(regform.password)?"":<p class="alert alert-danger" role="alert">Must be atleast 4 characters long!!!!</p>}
                </div>
                <div className="form-group">
                    <label>Confirm Password </label>
                    <input className="form-control" type="text" name="cwpass" value={regform.cwpass} onChange={handleRegform} placeholder="Confirm Password"/>
                    {cwpassValid(regform.cwpass)?"":<p class="alert alert-danger" role="alert">Not Matching!!!!</p>}
                </div>
                <input type="submit" class="btn btn-dark btn-outline-light btn-block" value="Register" />
            </form>
            {
                display ?
                <div class="alert alert-success" role="alert">
                    <h4 class="alert-heading">Your Form Data</h4>
                    <p>First Name: {display.firstname}</p>
                    <p>Last Name: {display.lastname}</p>
                    <p>Email: {display.email}</p>
                    <p>Password: {display.password}</p>
                </div> : null
            }
        </div>
    )
}


export default UserForm;