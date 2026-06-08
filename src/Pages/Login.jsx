import building from '../assets/building.jpg';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length ===0) {
      const savedUser = JSON.parse(localStorage.getItem("user"));

      if (!savedUser) {
        alert("No account found. Please create an account first.");
        navigate("/register");
        return;
      }

      if (
        savedUser.email === formData.email &&
        savedUser.password === formData.password
      ) {
        alert("Login successful");
        navigate("/dashboard  ");
      } else {
        setErrors({
          login: "Invalid email or password",
        });
      }
    }
  };


  return(
    <div className="bg-slate-300 items-center justify-center min-h-screen flex p-6">

      <form onSubmit={handleSubmit} className="rounded-3xl shadow-2xl w-full max-w-5xl h-[650px]  relative overflow-hidden shadow-2xl  ">
        <img 
          src={building}
          alt="Building Image"
          className="inset-0 absolute w-full h-full object-cover"
        />

        <div className="absolute bg-white/35 inset-0"></div>

        <div className="relative  p-5">
          <h1 className="font-bold text-2xl text-gray-700 ">
            HORIZON

          </h1>

          <p className="text-gray-600 text-xs ">VISTA HOMES</p>
        </div>

          <div className="absolute left-16 top-[120px] w-[340px] bg-white/50 rounded-[30px] shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 text-center ">
              Agent Login
            </h2>

            <p className="text-sm text-center text-gray-500  mb-7">
              Please enter your details
            </p>

            <div className="mb-4">
              <label className="text-sm text-gray-500 pr-42">Email</label>

              <input
                value={formData.email}
                name="email"
                onChange={handleChange}
                type="email"
                placeholder="Enter your email"
                className="mt-2 w-full px-4 py-3  border border-gray-400 rounded-md  focus:ring-gray-400 " /> 
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>} 
            </div>
            <div className="mb-3">

              <label className="text-sm text-gray-500 pr-42">Password</label>

              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                placeholder="********"
                className="mt-2 w-full px-4 py-3  border border-gray-400 rounded-md focus:ring-gray-400" />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>
            <div className="text-right mb-6">
                <Link to="/forgot-password" className="text-sm text-gray-700 underline">
                  Forgot password?
                </Link>
            </div>

             {errors.login && (<p className='text-red-500 text-sm mb-3'>{errors.login}</p>)}

            <button
                 type="submit"
                 className="w-full text-white bg-gray-700 rounded-md font-medium py-3 hover:bg-gray-800 transition">
                
              Sign in
            </button>
            


          </div>
          <div className="absolute z-30  left-24 bottom-10 text-sm text-gray-500">
            Are you new?{" "}
            <Link to="/register" className="font-semibold text-gray-700 underline">
              Create an account
            </Link>
          </div>
        


      </form>
    </div>

  );
}

export default Login;