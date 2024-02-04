import React, { useState } from "react";
import './LoginSignup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';



// rest of your component code...

const LoginSignup = () => {
     const [action, setAction] = useState('Login');
     return (
          <div className="container">
               <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
               </div>

               <div className="inputs">
                    {action === "Login" ? <div></div> :
                         <div className="input">
                              <FontAwesomeIcon icon={faUser} className="icon" />
                              <input type="text" placeholder="Full Name" />
                         </div>}

                    <div className="input">
                         <FontAwesomeIcon icon={faPhone} className="icon" />
                         <input type="value" value="9822946156" />
                    </div>
                    <div className="input">
                         <FontAwesomeIcon icon={faEnvelope} className="icon" />
                         <input type="email" placeholder="xyz@example.com" />
                    </div>

               </div>
               {action === "Sign Up" ? <div></div> :
                    <div className="forgot-password">Forgot Password? <span>Click Here</span></div>}
               <div className="submit-container">
                    <div className={action == "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Signup</div>
                    <div className={action == "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
               </div>
          </div>
     );
};

export default LoginSignup;
