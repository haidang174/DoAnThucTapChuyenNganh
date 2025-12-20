// src/pages/Auth/Register.jsx
import useRegister from "../../hooks/auth/useRegister";
import "./Auth.css";

const Register = ({ onRegister, switchToLogin }) => {
  const { username, email, password, confirmPassword, error, setUsername, setEmail, setPassword, setConfirmPassword, handleSubmit } = useRegister(onRegister);

  return (
    <div className="auth-page">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Đăng ký</h1>

          <div className="input-box">
            <input type="text" placeholder="Tên người dùng" value={username} onChange={e => setUsername(e.target.value)} />
            <i className="bx bxs-user"></i>
          </div>

          <div className="input-box">
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <i className="bx bxs-envelope"></i>
          </div>

          <div className="input-box">
            <input type="password" placeholder="Mật khẩu" value={password} onChange={e => setPassword(e.target.value)} />
            <i className="bx bxs-lock"></i>
          </div>

          <div className="input-box">
            <input type="password" placeholder="Xác nhận mật khẩu" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
            <i className="bx bxs-lock-alt"></i>
          </div>

          {error && <div className="error">{error}</div>}

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
