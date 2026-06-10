import { hashPassword } from '../utils/hashPassword';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function ResetPassword() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        newPassword: "",
        confirmPassword: "",
    });
    

    const[errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!formData.newPassword) {
            newErrors.newPassword = "New password is required";
        } else if (formData.newPassword.length < 6) {
             newErrors.newPassword = "Password must be at least 6 characters" ;
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Confirm password is required";
        } else if (formData.newPassword !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            const savedUser = JSON.parse(localStorage.getItem("user"));
            const resetEmail = localStorage.getItem("resetEmail");

            if (!savedUser || savedUser.email !== resetEmail) {
               alert("Something went wrong. Please try again");
            navigate("/forgot-password");
            return;
            }

            const hashedNewPassword = await hashPassword(formData.newPassword);

            const updateUser = {
                ...savedUser,
                password: hashedNewPassword,
                
            };

            localStorage.setItem("user", JSON.stringify(updateUser));
            localStorage.removeItem("otp");
            localStorage.removeItem("resetEmail");

            alert("Password reset successfully");
            navigate("/login");
        
        } 
    };
    return(
        <div className="min-h-screen bg-gray-100 justify-center items-center flex py-10">
            <form onSubmit={handleSubmit}
                  className="w-[380px] bg-white p-8 rounded-xl shadow-md">

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
                         value={formData.newPassword}
                         onChange={handleChange}
                         name="newPassword"
                         type="password"
                         placeholder="Enter new password"
                         className="w-full border border-gray-300 outline-none focus:ring rounded-md px-4 py-3 mt-2"
                        /> {errors.newPassword && (<p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>)}
                 </div>

                <div className="mb-4">
                    <label className="font-bold text-sm text-gray-400">
                        Confirm Password
                    </label>
                    <input
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm new password"
                      className="w-full border border-gray-300 outline-none focus:ring rounded-md px-4 py-3 mt-2" />
                      {errors.confirmPassword && (<p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>)}

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