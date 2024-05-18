import React from "react";
import loginIcons from "../assest/signin.gif";

const Login = () => {
  return (
    <section id="login">
      <div className="mx-auto container p-4">
        <div className="bg-white p-2 py-5 w-full max-w-md mx-auto ">
          <div className="w-20 h-20 mx-auto">
            <img src={loginIcons} alt="login icon" className="" />
          </div>
          <form>
            <div>
              <label>Email:</label>
              <div className=" bg-slate-100 p-2">
                <input
                  type="email"
                  className=" w-full h-full outline-none"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div>
              <label>Password:</label>
              <div className=" bg-slate-100 p-2">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full h-full outline-none"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
