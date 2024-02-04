import React from "react";
import './Phone.css';
import { BsFillShieldLockFill, BsTelephoneFill } from 'react-icons/bs';
import { CgSpinner } from "react-icons/cg"
import OtpInput from "otp-input-react"
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"
import { toast, Toaster } from "react-hot-toast";


const PhoneOTP = () => {
     const [otp, setOtp] = useState("");
     const [ph, setPh] = useState("");
     const [loading, setLoading] = useState(false);
     const [showOTP, setShowOTP] = useState(false);
     const [user, setUser] = useState(null);


     return (
          <section className="main1">
               <div>
                    {/* <Toaster toastOptions={{ duration: 40000 }} /> */}
                    <div id="recaptcha-container"></div>
                    < div className="main2">
                         <h1 className="main3">
                              Welcome to <br /> FilFlow
                         </h1>

                         <>
                              <div className="main4">
                                   <BsTelephoneFill size={30} />
                              </div>
                              <label htmlFor="otp" className="main5">
                                   Verify your phone number
                              </label>
                              <PhoneInput country={"in"} value={ph} onChange={setPh} />
                              <button className="main7">
                                   {loading && < CgSpinner size={20} className="main8" />}
                                   <span>Send code via SMS</span>
                              </button>
                         </>



                         <>
                              <div className="main4">
                                   <BsFillShieldLockFill size={30} />
                              </div>
                              <label htmlFor="otp" className="main5">
                                   Enter your OTP
                              </label>
                              <OtpInput
                                   value={otp}
                                   onChange={setOtp}
                                   OTPLength={6}
                                   otpType="number"
                                   disabled={false}
                                   autoFocus
                                   className="main6"
                              ></OtpInput>
                              <button className="main7">
                                   {loading && < CgSpinner size={20} className="main8" />}
                                   <span>Verify OTP</span>
                              </button>
                         </> 


                         <h2 className="main9">
                         Login Successful! Please enter OTP to verify your account.
                    </h2>

                    </div>


               </div>

          </section >
     );
};

export default PhoneOTP;
