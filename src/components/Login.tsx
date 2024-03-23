import React from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/authSlice";

function Login() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(userLogin());
    console.log("auth called");
  };
  return (
    <div className="login">
      <img
        src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202010/Google_Gmail_New_Logo_India_To_1200x768.jpeg?WgdQ3Tx7r4ZssTpgfxm1Iwb5KMAG8S4A&size=770:433"
        alt="gmail logo"
      />
      <button onClick={handleClick}>login</button>
    </div>
  );
}

export default Login;
