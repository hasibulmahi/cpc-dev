import React, { useState } from "react";
import { Input, message } from "antd";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import NavbarMini from "../../Components/Navbar/NavbarMini";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const formValidate = (
  flags,
  loginType,
  handleRegistration,
  navigate,
  handleLogin,
  location,
  users
) => {
  if (loginType === "Register") {
    document.getElementById("user-name").value === ""
      ? (flags.name = true)
      : (flags.name = false);
  }
  document.getElementById("user-email").value === ""
    ? (flags.email = true)
    : (flags.email = false);
  document.getElementById("user-email").value !== "" &&
  !/@diu\.edu\.bd$/.test(document.getElementById("user-email").value)
    ? (flags.diuMail = true)
    : (flags.diuMail = false);
  document.getElementById("user-pass").value === ""
    ? (flags.pass = true)
    : (flags.pass = false);
  if (loginType === "Register") {
    document.getElementById("user-id").value === ""
      ? (flags.id = true)
      : (flags.id = false);
    document.getElementById("user-phone").value === "" ||
    !/\d/.test(document.getElementById("user-phone").value)
      ? (flags.phone = true)
      : (flags.phone = false);
    document.getElementById("user-pass").value !==
    document.getElementById("user-pass-re").value
      ? (flags.rePass = true)
      : (flags.rePass = false);
  }

  if (Object.values(flags).every((value) => value === false)) {
    if (
      document
        .getElementById("login-page-submit")
        .classList.contains("custom-shake")
    ) {
      document
        .getElementById("login-page-submit")
        .classList.remove("custom-shake");
    }
    const submitType = document
      .getElementById("login-page-submit")
      .innerText.toLowerCase();
    if (submitType === "login") {
      const email = document.getElementById("user-email").value;
      const pass = document.getElementById("user-pass").value;

      //login area
      handleLogin(email, pass, navigate, location);
    } else if (submitType === "register") {
      const name = document.getElementById("user-name").value;
      const email = document.getElementById("user-email").value;
      const pass = document.getElementById("user-pass").value;
      const id = document.getElementById("user-id").value;
      const phone = document.getElementById("user-phone").value;

      //-----------signUp area------------
      const existsFlag = users?.find((x) => x.email === email);
      !existsFlag
        ? handleRegistration(name, email, pass, id, phone, navigate)
        : message.error("Account already exists. Please Login");
    }
  } else {
    document.getElementById("login-page-submit").classList.add("custom-shake");
  }

  return flags;
};

const errorRenderer = (error) => {
  let errorOut = "";
  if (error === "name") {
    errorOut = "Please insert your name";
  } else if (error === "email") {
    errorOut = "Please insert your email";
  } else if (error === "diu-mail") {
    errorOut = "Please insert DIU mail";
  } else if (error === "pass") {
    errorOut = "Please insert password";
  } else if (error === "re-pass") {
    errorOut = "Password didn't match";
  } else if (error === "id") {
    errorOut = "Please a your ID";
  } else if (error === "phone") {
    errorOut = "Please insert your phone no";
  }
  return (
    <>
      <span className="text-xs text-error">({errorOut}) </span>
      <span className="font-bold text-error inline-flex custom-bounce">!</span>
    </>
  );
};

const Login = () => {
  const { handleRegistration, handleLogin, users } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [loginType, setLoginType] = useState("Login");
  const [formError, setFormError] = useState({
    name: false,
    email: false,
    diuMail: false,
    id: false,
    phone: false,
    pass: false,
    rePass: false,
  });

  useDocumentTitle(`DIU CPC - ${loginType}`);
  return (
    <div className="bg-slate-100 dark:bg-slate-900 dark:text-slate-200 min-h-screen">
      {/* Navbar */}
      <div>
        <div className="hidden xl:block">
          <Navbar></Navbar>
          <div className="h-12 2xl:h-16"></div>
        </div>
        <div className="xl:hidden">
          <NavbarMini></NavbarMini>
        </div>
      </div>

      <div className="mt-5 md:mt-16 min-h-[50vh] md:min-h-[70vh]">
        <div className="bg-white dark:bg-slate-800 w-11/12 xl:w-2/3 rounded-md shadow-sm p-3 mx-auto grid grid-cols-1 xl:grid-cols-2 gap-y-5 xl:gap-5">
          <div className="text-center xl:text-left xl:px-5 xl:py-5">
            <h1 className="text-2xl font-semibold text-slate-600 dark:text-slate-200">
              {loginType === "Login" ? "Welcome" : "Hello There"}
            </h1>
            <p className="font-semibold text-slate-500 dark:text-slate-300 mt-1">
              Please {loginType === "Login" ? "login" : "register"} to continue
            </p>
            <div className="divider before:bg-slate-200 dark:before:bg-slate-700 after:bg-slate-200 dark:after:bg-slate-700 xl:hidden mb-0"></div>
          </div>

          <div>
            <div>
              {loginType === "Register" ? (
                <>
                  {/* Name */}
                  <div>
                    <label className="label">
                      <span className="label-text text-slate-700 dark:text-slate-300 font-medium">
                        Name{" "}
                        {formError.name === true ? errorRenderer("name") : ""}
                      </span>
                    </label>
                    <Input
                      placeholder="Insert Your Name"
                      className="rounded-md"
                      id="user-name"
                      autoComplete="off"
                    />
                  </div>
                </>
              ) : (
                ""
              )}
              {/* Email */}
              <div className="mt-3 first:mt-0">
                <label className="label">
                  <span className="label-text text-slate-700 dark:text-slate-300 font-medium">
                    Email{" "}
                    {formError.email === true ? errorRenderer("email") : ""}
                    {formError.diuMail === true
                      ? errorRenderer("diu-mail")
                      : ""}
                  </span>
                </label>
                <Input
                  placeholder="Insert @diu.edu.bd email only"
                  className="rounded-md"
                  id="user-email"
                  autoComplete="off"
                />
              </div>
              {loginType === "Register" ? (
                <>
                  {/* ID */}
                  <div className="mt-3">
                    <label className="label">
                      <span className="label-text text-slate-700 dark:text-slate-300 font-medium">
                        ID {formError.id === true ? errorRenderer("id") : ""}
                      </span>
                    </label>
                    <Input
                      placeholder="Insert ID (Ex. 201-15-12345)"
                      className="rounded-md"
                      id="user-id"
                      autoComplete="off"
                    />
                  </div>
                  {/* Phone No */}
                  <div className="mt-3">
                    <label className="label">
                      <span className="label-text text-slate-700 dark:text-slate-300 font-medium">
                        Phone No{" "}
                        {formError.phone === true ? errorRenderer("phone") : ""}
                      </span>
                    </label>
                    <Input
                      placeholder="Insert Phone No"
                      className="rounded-md"
                      id="user-phone"
                      autoComplete="off"
                    />
                  </div>
                </>
              ) : (
                ""
              )}
              {/* Password */}
              <div className="mt-3">
                <label className="label">
                  <span className="label-text text-slate-700 dark:text-slate-300 font-medium">
                    Password{" "}
                    {formError.pass === true ? errorRenderer("pass") : ""}
                    {formError.rePass === true ? errorRenderer("re-pass") : ""}
                  </span>
                </label>
                <Input.Password
                  placeholder="Insert Password"
                  className="rounded-md"
                  id="user-pass"
                  autoComplete="off"
                />
              </div>
              {loginType === "Register" ? (
                <>
                  {/* Re Password */}
                  <div className="mt-3">
                    <label className="label">
                      <span className="label-text text-slate-700 dark:text-slate-300 font-medium">
                        Retype Password{" "}
                        {formError.pass === true ? errorRenderer("pass") : ""}
                        {formError.rePass === true
                          ? errorRenderer("re-pass")
                          : ""}
                      </span>
                    </label>
                    <Input.Password
                      placeholder="Insert Password"
                      className="rounded-md"
                      id="user-pass-re"
                      autoComplete="off"
                    />
                  </div>
                </>
              ) : (
                ""
              )}

              {/* New User */}
              <div className="mt-5 text-center">
                <button
                  className="text-slate-500 hover:text-orange-500 transition ease-in-out duration-500"
                  onClick={() => {
                    loginType === "Login"
                      ? setLoginType("Register")
                      : setLoginType("Login");
                  }}
                >
                  {loginType === "Login"
                    ? "New user? Create an account"
                    : "Already have an account? Login here"}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-11/12 xl:w-2/3 p-3 mx-auto flex items-center justify-center">
          <button
            id="login-page-submit"
            className="btn btn-sm text-white hover:text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 border-none"
            onClick={() => {
              const validatedError = formValidate(
                formError,
                loginType,
                handleRegistration,
                navigate,
                handleLogin,
                location,
                users
              );
              setFormError({ ...formError, ...validatedError });
            }}
          >
            {loginType === "Login" ? "Login" : "Register"}
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Login;
