import building from './assets/building.jpg';

function App() {
  return(
    <div className="bg-slate-300 items-center justify-center min-h-screen flex p-6">

      <div className="rounded-3xl shadow-2xl w-full max-w-8xl h-[650px]  relative overflow-hidden shadow-2xl  ">
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

          <p className="text-gray-600 text-x ">VISTA HOMES</p>
        </div>

          <div className="absolute left-16 top-30 w-[340px] bg-white/50 rounded-[30px] shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 text-center ">
              Agent Login
            </h2>

            <p className="text-sm text-center text-gray-500  mb-7">
              Please enter your details
            </p>

            <div className="mb-4">
              <label className="text-sm text-gray-500 pr-42">Username</label>

              <input
                type="text"
                placeholder="Leo_Tolstay03"
                className="mt-2 w-full px-4 py-3  border border-gray-400 rounded-md  focus:ring-gray-400 " />  
            </div>
            <div className="mb-3">

              <label className="text-sm text-gray-500 pr-42">Password</label>

              <input
                type="password"
                placeholder="********"
                className="mt-2 w-full px-4 py-3  border border-gray-400 rounded-md focus:ring-gray-400" />
            </div>
            <div className="text-right mb-6">
                <a href="#" className="text-sm text-gray-700 underline">
                  Forgot password?
                </a>
            </div>

            <button className="w-full text-white bg-gray-700 rounded-md font-medium py-3 hover:bg-gray-800 transition">
              Sign in
            </button>
            


          </div>
          <div className="absolute z-30  left-24 bottom-17 text-sm text-gray-500">
            Are you new?
            <a href="#" className="font-semibold text-gray-700 underline">
              Create an account
            </a>
          </div>
        


      </div>
    </div>

  );
}

export default App;
