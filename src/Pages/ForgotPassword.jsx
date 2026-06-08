import { Link } from 'react-router-dom';
function ForgotPassword() {
    return(
        <div className="min-h-screen bg-gray-100 py-10 items-center justify-center flex">
            <form className="w-[380px] bg-white p-8 rounded-3xl shadow-md ">
            <h2 className="font-bold text-center text-2xl mb-2  text-gray-700 ">
                Forgot Password 

            </h2>
            
                <p className="text-sm text-center mb-6 text-gray-300">
                    Enter your registered email

                </p>
                <div className="mb-4">
                    <label className="text-sm text-gray-400 font-bold">Email </label>
                <input 
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 outline-none focus:ring rounded-md px-4 py-3" />
            </div>

            <div className="mb-4">
            <button  
               type="submit"           
               className="text-white bg-gray-600 hover:bg-gray-800  w-full rounded-md py-3 font-semibold">
                Send OTP
            </button>

            
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