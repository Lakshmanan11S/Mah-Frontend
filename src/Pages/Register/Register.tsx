import { Link} from "react-router-dom";
import "../../assets/App.scss";
import img from '../../assets/Images/register.jpg';
import { useState } from "react";
import { registerpageapi } from "./Api";
import { Toaster } from "react-hot-toast";

const initialStage = {
  userName: "",
  Email: "",
  PhoneNo: "",
  Password: ""
};

const Register = () => {
  const [registerData, setRegisterData] = useState(initialStage);



  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await registerpageapi.registerDetails(registerData);
    } catch (error) {
      console.log("Register Error found");
    }
  };

  return (
    <>
      <Toaster />
      <div className="Register">
        <div className="row">
          <div className="col-md-6 first-page">
            <img src={img} alt="Register" />
          </div>
          <div className="col-md-6 second-page">
            <form onSubmit={handleSubmit}>
              <fieldset>
                <h2>Sign Up</h2>
                <div className="Field">
                  <label>
                    Name <sup>*</sup>
                  </label>
                  <input 
                    placeholder="Name" 
                    className="form-control" 
                    type="text" 
                    id="userName" 
                    name="userName" 
                    value={registerData.userName} 
                    onChange={inputChange} 
                    required 
                  />
                </div>
                <div className="Field">
                  <label>
                    Email address <sup>*</sup>
                  </label>
                  <input 
                    placeholder="Email address"
                    className="form-control" 
                    type="email" 
                    id="Email" 
                    name="Email" 
                    value={registerData.Email} 
                    onChange={inputChange} 
                    required
                  />
                </div>
                <div className="Field">
                  <label>PhoneNo</label>
                  <input 
                    placeholder="PhoneNo"
                    className="form-control" 
                    type="number" 
                    id="PhoneNo" 
                    name="PhoneNo" 
                    value={registerData.PhoneNo} 
                    onChange={inputChange} 
                    required 
                  />
                </div>
                <div className="Field">
                  <label>
                    Password <sup>*</sup>
                  </label>
                  <input 
                    placeholder="Password"
                    className="form-control" 
                    type="password" 
                    id="Password" 
                    name="Password" 
                    value={registerData.Password} 
                    onChange={inputChange} 
                    required 
                  />
                </div>
                <button type="submit">Create account</button>
                <div style={{ marginTop: "5px", display: "flex" }}>
                  <h5>You Have Already Register?</h5>{" "}
                  <Link to={'/login'} style={{ textDecoration: "none" }}>Click me...</Link>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
