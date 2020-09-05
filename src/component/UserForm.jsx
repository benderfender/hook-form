import React, {useState} from 'react';

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cwpass, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstname, lastname, email, password, cwpass};
        console.log("Welcome", newUser);
    };

    return(
        <div>
            <form onSubmit = {createUser} className="">
                <div className="form-group">
                    <label>First Name </label>
                    <input className="form-control" type="text" value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Last Name </label>
                    <input className="form-control" type="text" value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Email </label>
                    <input className="form-control" type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Password </label>
                    <input className="form-control" type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Confirm Password </label>
                    <input className="form-control" type="text" value={cwpass} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                </div>
            </form>
            <div>
                <h4>Your Form Data</h4>
                <p>First Name: {firstname}</p>
                <p>Last Name: {lastname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
            </div>

        </div>
    )
}

export default UserForm;