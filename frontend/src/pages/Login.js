import React, { useState } from "react";
import loginIcons from "../assest/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log("data login", data);
  return (
    <section id="login">
      <div className="mx-auto container p-4">
        <div className="bg-white p-2 py-5 w-full max-w-sm mx-auto ">
          <div className="w-20 h-20 mx-auto">
            <img src={loginIcons} alt="login icon" className="" />
          </div>
          <form className="flex flex-col gap-3">
            <div>
              <label>Email:</label>
              <div className=" bg-slate-100 p-2">
                <input
                  type="email"
                  className=" w-full h-full outline-none bg-transparent"
                  placeholder="Enter your email address"
                  onChange={handleOnChange}
                  name="email"
                  value={data.email}
                />
              </div>
            </div>
            <div>
              <label>Password:</label>
              <div className=" bg-slate-100 p-2 flex ">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full h-full outline-none bg-transparent"
                  onChange={handleOnChange}
                  name="password"
                  value={data.password}
                />
                <div
                  className="cursor-pointer text-xl text-gray-600"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
              <Link
                to={`/forgot-password`}
                className="block w-fit ml-auto hover:underline hover:text-red-600"
              >
                Forgot password
              </Link>
            </div>
            <div>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-105 transition-all mx-auto block mt-4">
                Login
              </button>
            </div>
          </form>
          <p className="my-6">
            Don't have account ?{" "}
            <Link to={"/sign-up"} className="text-red-600 hover:text-red-700">
              {" "}
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
