import "../../assets/App.scss";
import logimg from '../../assets/Images/login.jpg'
import { useState } from "react";
import { loginpageapi } from "./Api";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const[loginData,setLoginData]=useState({
    Email:"",
    Password:""
  })

  const navigate=useNavigate()

  const inputChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=e.target
    setLoginData({...loginData,[name]:value})
  }

  const handleSubmit=async(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    try{
      await loginpageapi.loginDetails(loginData) 
      navigate('/secretkey')
    }catch(error){
      console.log("Login error found")
    }
  }
   

  return (
    <>
    <Toaster/>
    <div className="Login">
        <div className="row">
            <div className="col-md-6 l-first-page">
                <img src={logimg} alt=""/>
            </div>
            <div className="col-md-6 l-second-page">
          <form onSubmit={handleSubmit}>
            <fieldset>
              <h2>Login</h2>
              <div className="Field">
                <label>
                  Email address <sup>*</sup>
                </label>
                <input placeholder="Email address"
                className="form-control"
                id="Email"
                name="Email"
                type="email"
                value={loginData.Email}
                onChange={inputChange}
                required
                />
              </div>
              <div className="Field">
                <label>
                  Password <sup>*</sup>
                </label>
                <input type="password"
                 placeholder="Password"
                 id="Password"
                 name="Password"
                 className="form-control"
                 value={loginData.Password} 
                 onChange={inputChange}
                 required/>
              </div>
             <button type="submit" >Login</button>
            </fieldset>
          </form>
        </div>
        </div>
        </div>
     
        </>
  );
};
export default Login;
