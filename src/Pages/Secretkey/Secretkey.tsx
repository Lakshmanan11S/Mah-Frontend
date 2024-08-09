import "../../assets/App.scss";
import keyimg from "../../assets/Images/key.jpg";
import { useState } from "react";
import { secretKeypageApi } from "./Api";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Secretkey = () => {
  const [Otp, setOtp] = useState<string>("");

  const navigate=useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Otp.trim() === "") {
      toast.error("Please enter the OTP.");
      return;
    }
    try {
      await secretKeypageApi.secretKeyDetails({ Otp });
      navigate('/home');
    } catch (error) {
      console.log("SecretKey Error Found");
    }
  };

  return (
    <>
      <Toaster />
      <div className="Login">
        <div className="row">
          <div className="col-md-6 l-first-page">
            <img src={keyimg} alt="" />
          </div>
          <div className="col-md-6 l-second-page">
            <form onSubmit={handleSubmit}>
              <fieldset>
                <h2>Secret Key</h2>
                <div className="Field">
                  <label>Email Otp</label>
                  <input
                    placeholder="Email Otp"
                    type="number"
                    id="Otp"
                    name="Otp"
                    value={Otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>

                <button type="submit">Submit</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Secretkey;
