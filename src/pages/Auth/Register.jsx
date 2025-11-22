import { useState } from "react";
import "./Auth.css";

const Register = ({ onRegister, switchToLogin }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Mật khẩu không khớp!");
      return;
    }
    setError("");
    onRegister({ username, email, password, birthDate });
  };

  return (
    <div className="auth-page">
      {/* Form */}
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Đăng ký</h1>

          <div className="input-box">
            <input type="text" placeholder="Tên người dùng" value={username} onChange={e => setUsername(e.target.value)} required />
            <i className="bx bxs-user"></i>
          </div>

          <div className="input-box">
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
            <i className="bx bxs-envelope"></i>
          </div>

          <div className="input-box">
            <input type="password" placeholder="Mật khẩu" value={password} onChange={e => setPassword(e.target.value)} required />
            <i className="bx bxs-lock"></i>
          </div>

          <div className="input-box">
            <input type="password" placeholder="Xác nhận mật khẩu" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
            <i className="bx bxs-lock-alt"></i>
          </div>

          <div className="input-box">
            <input type="date" value={birthDate} onChange={e => setBirthDate(e.target.value)} required />
            <i className="bx bxs-calendar"></i>
          </div>

          {error && <div className="loi">{error}</div>}

          <button type="submit" className="btn">
            Đăng ký
          </button>

          <div className="register-link">
            <p>
              Đã có tài khoản? <span onClick={switchToLogin}>Đăng nhập</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
