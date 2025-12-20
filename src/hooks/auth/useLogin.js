// src/pages/Auth/useLogin.js
import { useState } from "react";

const useLogin = onLogin => {
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

  return {
    username,
    password,
    error,
    setUsername,
    setPassword,
    handleSubmit
  };
};

export default useLogin;
