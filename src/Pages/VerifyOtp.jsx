import { Link } from 'react-router-dom';
function VerifyOtp() {
    return(
        <div className="w-full bg-gray-100  justify-center items-center flex min-h-screen">
            <form className="w-[380px] bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-center font-bold text-gray-600 text-2xl mb-2">
                OTP Verification
            </h2>

            <p className="text-sm text-center text-gray-400 mb-6">
                Enter the OTP sent to your email
            </p>

            <div className="mb-4">
                <label className="font-bold text-sm text-gray-400">OTP</label>
                <input 
                   name="otp"
                   type="text"
                   maxLength="6"
                   placeholder="Enter OTP"
                   className="w-full border border-gray-300 outline-none focus:ring rounded-md px-4 py-3 mt-2" />


            </div>

            <div className="mb-4">
            <button 
               type="submit"
            
               className=" w-full rounded-md px-4 py-3 mt-2 bg-gray-600 text-white hover:bg-gray-800 ">
                Verify OTP
            </button>
            </div>

            <h4 className="mt-4 text-center text-sm text-gray-500">
                Wrong email?{" "}
                <Link 
                   to="/forgot-password"
                   className="font-semibold underline text-gray-700">
                    Go Back
                   </Link>
            </h4>
            </form>
        </div>
    );
}

export default VerifyOtp;