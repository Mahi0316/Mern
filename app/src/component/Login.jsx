import "./style/Login.css";

function Login() {
  return (
    <div className="login-center">
      <div className="login-box">
        <h1>Login</h1>
        <img src="https://i.scdn.co/image/ab67656300005f1f456f7e545b08728328c20c1c" alt="WWE Logo" style={{ width: "205px", margin: "20px 0" }} />
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </div>
    </div>
  );
}

export default Login;
