import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",

    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Full name is required"
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        }else if (!formData.email.includes("@") || !formData.email.includes(".")){
            newErrors.email = "Enter a valid email";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        }else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Confirm Password is required";
        }else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            localStorage.setItem("user", JSON.stringify(formData));
            alert("Account created successfully");
            navigate("/login");

        }
    };

    
    return(
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
            <form onSubmit={handleSubmit} className="bg-white p-8 w-[380px] rounded-3xl shadow-md">

            <h2 className="text-2xl text-center font-bold mb-6">Create account </h2>

            <div className="mb-4">
                <label className="font-bold text-sm text-gray-400">Full Name</label>
                <input 
                  value={formData.name}
                  onChange={handleChange}
                  name="name"
                  type="text"
                  placeholder="Enter your Name"
                  className=" w-full px-4 py-3 outline-none rounded-md border border-gray-300 focus:ring " />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div className="mb-4">
                <label className="font-bold text-sm text-gray-400">Email</label>
                <input 
                   value={formData.email}
                   onChange={handleChange}
                   name="email"
                   type="email"
                   placeholder="Enter your mail"
                   className=" w-full px-4 py-3 outline-none rounded-md border border-gray-300 focus:ring" />
                   {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="mb-4">
                <label className="font-bold text-sm text-gray-400">Password</label>
                <input 
                  value={formData.password}
                  onChange={handleChange}
                  name="password"
                  type="password"
                  placeholder="Enter your Password"
                  className=" w-full px-4 py-3 outline-none rounded-md border border-gray-300 focus:ring" />
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            <div className="mb-4">
                <label className="font-bold text-sm text-gray-400">Confirm Password</label>
                <input 
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  className=" w-full px-4 py-3 outline-none rounded-md border border-gray-300 focus:ring  hover:focus:ring-gray-800" />
                  {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
            </div>

            <div className="mb-4">
                <button 
                type="submit"
                
                className=" w-full text-white py-3 bg-gray-600 rounded-md font-semibold hover:bg-gray-800 ">Create Account</button>

            </div>
            <h4 className="mt-4 text-center text-sm text-gray-500 ">Already have an account? {" "} 
                <Link to="/login" className="font-semibold underline text-gray-700">
                  Sign in 
                </Link>
            </h4>
        </form>
        </div>
    );
}

export default Register;
           
   