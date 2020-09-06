import React, { useState } from 'react';
import './Login.css';
import {useSelector,useDispatch} from 'react-redux';
import {ADDUSER} from './Redux/User/UserActions'
import  {useHistory} from 'react-router-dom'


function Login() {

    const users = useSelector((state)=>state.users);
    let dispatch = useDispatch();

    let history = useHistory(); 
    const [Firstname,setFirst]=useState("");
    const [Lastname,setLast]=useState("");
    const [Email,setEmail]=useState("");
    const [Password,setPassword]=useState("");
    const [RePassword,setRePassword]=useState("");
    
    
    const checkEmail = ()=>{
        users.map((user)=>{
            console.log(user.username)
            if(user.username===Email) {alert('This email is already registred try with another email ')}
        })
    }

    const addUser = (values) =>{
        values.preventDefault();
        checkEmail();
        if(Password != RePassword){alert(`passwords do not match`)}
        const adduser={
            username:Email,
            password:Password
        }
        dispatch(ADDUSER(adduser));
        history.push("/login")
    }
    
    return (
            <div className="wrapper">
                <div className="formwrapper">
                    <h3>Sign Up</h3>
                    <form onSubmit={(e)=>addUser(e)}>
                    <div>
                        <label>Firstname</label>
                        <div className="field">
                        <input type="text" value={Firstname} onChange={(e)=>setFirst(e.target.value)}/>
                        </div>
                    </div>
                    <div>
                        <label>Lastname</label>
                        <div className="field">
                        <input type="text" value={Lastname} onChange={(e)=>setLast(e.target.value)}/>
                        </div>
                    </div>    
                    <div>
                        <label>Email</label>
                        <div className="field">
                        <input type="Email" value={Email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                    </div>   
                    <div>
                        <label>Password</label>
                        <div> 
                        <input type="Password" value={Password} onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <div>
                        <label>Re type Password</label>
                        <div> 
                        <input type="Password" value={RePassword} onChange={(e)=>{setRePassword(e.target.value)}}/>
                        </div>
                    </div>       
                    <div className="submit">
                    <button type="submit">Sign Up</button>
                    </div>
                </form>   
            </div>
         </div>
    );
}

export default Login;