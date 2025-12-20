import useLogin from "../../hooks/auth/useLogin";
import "./Auth.css";

const Login = ({ onLogin, switchToRegister }) => {
  const { username, password, error, setUsername, setPassword, handleSubmit } = useLogin(onLogin);

  return (
    <div className="auth-page">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Đăng nhập</h1>

          <div className="input-box">
            <input type="text" placeholder="Tên người dùng" value={username} onChange={e => setUsername(e.target.value)} />
            <i className="bx bxs-user"></i>
          </div>

          <div className="input-box">
            <input type="password" placeholder="Mật khẩu" value={password} onChange={e => setPassword(e.target.value)} />
            <i className="bx bxs-lock-alt"></i>
          </div>

          {error && <div className="error">{error}</div>}

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
