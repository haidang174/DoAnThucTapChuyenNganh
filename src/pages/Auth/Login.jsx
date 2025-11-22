import { useState } from "react";
import "./Auth.css";

const Login = ({ onLogin, switchToRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!username || !password) {
      setError("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    setError("");
    onLogin({ username, password });
  };

  return (
    <div className="auth-page">
      {/* Form */}
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Đăng nhập</h1>

          <div className="input-box">
            <input type="text" placeholder="Tên người dùng" value={username} onChange={e => setUsername(e.target.value)} required />
            <i className="bx bxs-user"></i>
          </div>

          <div className="input-box">
            <input type="password" placeholder="Mật khẩu" value={password} onChange={e => setPassword(e.target.value)} required />
            <i className="bx bxs-lock-alt"></i>
          </div>

          {error && <div className="loi">{error}</div>}

          <button type="submit" className="btn">
            Đăng nhập
          </button>

          <div className="register-link">
            <p>
              Chưa có tài khoản? <span onClick={switchToRegister}>Đăng ký</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
