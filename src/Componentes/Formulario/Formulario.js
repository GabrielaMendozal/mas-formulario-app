import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstname] = useState(""); // primero es string vacio 
    const [lastName, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmpassword] = useState("");
    const [firstNameError, setfirstNameError] = useState("");
    const [lastNameError, setlastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setconfirmPasswordError] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, username, email, password, confirmPassword }; // vienen datos del formulario
        console.log("Welcome", newUser);
    };
    
    const firstNames = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length < 1) {
            setfirstNameError("First name is required!");
        } else if(e.target.value.length < 2) {
            setfirstNameError("First name must be 2 characters or longer!");// agregar &&
        } else {
            setfirstNameError('');
        }
}
const lastNames = (e) => {
    setLastname(e.target.value);
    if(e.target.value.length < 1) {
        setlastNameError("Last name is required!");
    } else if(e.target.value.length < 2) {
        setlastNameError("Last name must be 2 characters or longer!");
    } else {
        setlastNameError('');
    }
}

const emails = (e) => {
    setEmail(e.target.value);
    if(e.target.value.length < 1) {
        setEmailError("Email is required!");
    } else if(e.target.value.length < 5) {
        setEmailError("Email must be 5 characters or longer!");
    } else {
        setEmailError('');
    }
}

const passwords = (e) => {
    setPassword(e.target.value);
    if(e.target.value.length < 1) {
        setPasswordError("Password is required!");
    } else if(e.target.value.length < 8) {
        setPasswordError("Password must be 8 characters or longer!");
    } else {
        setPasswordError('');
    }
}
const passwordConfirmar = (e) => {
    setConfirmpassword(e.target.value);

    if(password !== e.target.value) { //comparar variables /// el target jala valor instantaneo
        setconfirmPasswordError("Confirm password debe ser igual a password");
    } else {
        setconfirmPasswordError('');
    }
}


    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={firstNames} />
                {
                    firstNameError ?
                    <p>{ firstNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ lastNames } />
                {
                    lastNameError ?
                    <p>{ lastNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Username: </label> 
                <input type="text" onChange={ (e) => setUsername(e.target.value)} value={username} />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ emails } />
                {
                    emailError ?
                    <p>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={passwords} />
                {
                    passwordError ?
                    <p>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ passwordConfirmar }  />
                {
                    confirmPasswordError ?
                    <p>{ confirmPasswordError }</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;