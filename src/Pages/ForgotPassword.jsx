import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function ForgotPassword() {

    const navigate = useNavigate();

    const [generatedOtp, setGeneratedOtp] = useState("");

    const[email, setEmail] = useState("");
    const[error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.trim()) {
            setError("Email is required");
            setGeneratedOtp("");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            setError("Enter a valid email")
            setGeneratedOtp("");
            return;
        }

        const getUser = JSON.parse(localStorage.getItem("user"));

        if (!getUser || getUser.email !== email) {
            setError("This email is not registered")
            setGeneratedOtp("");
            return;
        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        localStorage.setItem("otp", otp);
        localStorage.setItem("resetEmail", email);

        setError("");
        setGeneratedOtp(otp);

        console.log("OTP:", otp);

       

    };

    return(
        <div className="min-h-screen bg-gray-100 py-10 items-center justify-center flex">
            <form onSubmit={handleSubmit} className="w-[380px] bg-white p-8 rounded-3xl shadow-md ">
            <h2 className="font-bold text-center text-2xl mb-2  text-gray-700 ">
                Forgot Password 

            </h2>
            
                <p className="text-sm text-center mb-6 text-gray-300">
                    Enter your registered email

                </p>
                <div className="mb-4">
                    <label className="text-sm text-gray-400 font-bold">Email </label>
                <input 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 outline-none focus:ring rounded-md px-4 py-3" />

                  {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                  {generatedOtp && (
                    
                    <p className="text-green-500 text-center text-sm mt-2">
                        Your OTP is:
                        <span className="font-bold">{generatedOtp}</span>
                    </p>)}
            </div>

            <div className="mb-4">
            <button  
               type="submit"           
               className="text-white bg-gray-600 hover:bg-gray-800  w-full rounded-md py-3 font-semibold">
                Send OTP
            </button>

             {generatedOtp && (
            <button
                type="button"
                onClick={() => navigate("/verify-otp")}
                className="w-full mt-3 bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700" >
                    Continue to Verify OTP
                </button>
             )}

            
            </div>

            <h4 className="mt-4 text-center text-sm text-gray-500">
                Remember Password?{" "}
                <Link to="/login" className="font-semibold underline text-gray-700">
                Back to login
                </Link>
            </h4>
            </form>
        </div>
    );
}

export default ForgotPassword;   