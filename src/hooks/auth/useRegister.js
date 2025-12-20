import { useState } from "react";

const useRegister = onRegister => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Mật khẩu không khớp!");
      return;
    }

    setError("");
    onRegister({
      username,
      email,
      password
    });
  };

  return {
    username,
    email,
    password,
    confirmPassword,
    error,
    setUsername,
    setEmail,
    setPassword,
    setConfirmPassword,
    handleSubmit
  };
};

export default useRegister;
