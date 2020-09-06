import React,{useState} from 'react';
import './Login.css'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

function Login() {

let history = useHistory();    
const users = useSelector((state)=>state.users);    
const [username,setUsername] = useState("");
const [password,setPassword] = useState("");

const Login = (event) =>{
    event.preventDefault();

    const user1 = users.find((user) => user.username === username)
    
    if(user1==null){alert(`This email is not registered signup first`)}

    else{
        if(user1.password === password){
            history.push("/profile");
        }
        else{alert(`password incorrect`)}
    }
}

    return (
            <div className="wrapper">
                <div className="formwrapper">
                    <h3>Login</h3>
                    <form onSubmit={(e)=>Login(e)}>
                    <div>
                        <label>Email</label>
                        <div className="field">
                        <input type="Email" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                        </div>
                    </div>   
                    <div>
                        <label>Password</label>
                        <div> 
                        <input type="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                    </div>       
                    <div className="submit">
                    <button type="submit">Login</button>
                    </div>
                </form>   
            </div>
         </div>
    );
}

export default Login;