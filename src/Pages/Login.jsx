import React ,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const [User,setUser]=useState({email:"",password:""})

  const navigate = useNavigate();


  const handleInput=(e)=>{
    let name=e.target.name
    let value=e.target.value;
    console.log(name,value)
    setUser({...User,[name]:value})
}
const handleSubmit=(e)=>{
    e.preventDefault();
    let registerdata=JSON.parse(localStorage.getItem("UserData"))
    if( User.email!==registerdata.email || User.password!==registerdata.password)
      
    {
        alert("please fill correct data")
    }
    else
    {
         alert('Login successFully')
         navigate('/')
         
      }

    setUser({email:"",password:""})
    
}
  return (
    <div className="bg-gray-100 pt-12 pb-6 flex items-center justify-center md:mt-0 bg-gradient-to-r from-rose-100 to-teal-100 ">
      <div className=" flex justify-center items-center w-full">
        <form onSubmit={handleSubmit} action="#">
          <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-xl max-w-sm">
            <div className="space-y-4">
              <h1 className="text-center text-2xl font-semibold text-gray-600">
                Login
              </h1>
              <hr />
              <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <input
                  className="pl-2 outline-none border-none w-full"
                  type="email"
                  name="email"
                  value={User.email}
                  onChange={handleInput}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="flex items-center border-2 py-2 px-3 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <input
                  className="pl-2 outline-none border-none w-full"
                  type="password"
                  name="password"
                  id=""
                  placeholder="Password"
                  required
                  value={User.password}
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="flex justify-center items-center mt-4">
              <p className="inline-flex items-center text-gray-700 font-medium text-xs text-center">
                <input
                  type="checkbox"
                  id="rememberMeCheckbox"
                  name="rememberMe"
                  className="mr-2"
                />
                <span className="text-xs font-semibold">Remember me?</span>
              </p>
            </div>

            <button
              type="submit"
              value="login"
              id="login"
              className="mt-6 w-full shadow-xl bg-gradient-to-tr from-blue-600 to-red-400 hover:to-red-700 text-indigo-100 py-2 rounded-md text-lg tracking-wide transition duration-1000"
            >
              Login
            </button>
            <hr />
            <div className="flex justify-center items-center mt-4">
              <p className="inline-flex items-center text-gray-700 font-medium text-xs text-center">
                <span className="ml-2">
                  You don't have an account?
                  <button
                    onClick={() => navigate("/register")}
                    className="text-xs ml-2 text-blue-500 font-semibold"
                  >
                    Register now &rarr;
                  </button>
                </span>
              </p>
            </div>
          </div>
          <ToastContainer/>
        </form>
      </div>
    </div>
  );
};

export default Login;
