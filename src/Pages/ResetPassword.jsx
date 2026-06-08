import { Link } from 'react-router-dom';
function ResetPassword() {
    return(
        <div className="min-h-screen bg-gray-100 justify-center items-center flex py-10">
            <form className="w-[380px] bg-white p-8 rounded-xl shadow-md">

                <h2 className="text-center font-bold text-xl text-gray-600 mb-2">
                    Reset Password
                </h2>

                <p className="text-sm text-gray-400 mb-6 text-center">
                    Create your new password
                </p>

                 <div className="mb-4">
                      <label className="font-bold text-sm text-gray-400">
                           New Password
                      </label>
                      <input
                         name="newPassword"
                         type="password"
                         placeholder="Enter new password"
                         className="w-full border border-gray-300 outline-none focus:ring rounded-md px-4 py-3 mt-2"
                        />
                 </div>

                <div className="mb-4">
                    <label className="font-bold text-sm text-gray-400">
                        Confirm Password
                    </label>
                    <input
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm new password"
                      className="w-full border border-gray-300 outline-none focus:ring rounded-md px-4 py-3 mt-2" />

                </div>

                <div className="mb-4">
                    <button
                      type="submit"
                      className="w-full rounded-md px-4 py-3 mt-2 text-white bg-gray-600 hover:bg-gray-800 font-semibold">
                        Reset Password
                    </button>
                </div>

                <h4 className="mt-4 text-center text-sm text-gray-500">
                    Remember password?{" "}
                    <Link to="/login" className="font-semibold underline text-gray-700">
                       Back to Login
                    </Link>
                </h4>
            </form>
        </div>
 );

}

export default ResetPassword;