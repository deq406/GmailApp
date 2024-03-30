import "./Login.css";

function Login() {

  const handleClick = () => {
    console.log("auth called");
  };
  return (
    <div className="login">
      <h3>ФИТ 3-7-1</h3>
      <button onClick={handleClick}>login</button>
    </div>
  );
}

export default Login;
