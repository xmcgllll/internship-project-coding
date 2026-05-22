import React, { useState } from "react";

export default function Register() {
  const [mode, setMode] = useState("register");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async () => {
    const url =
      mode === "register"
        ? "http://127.0.0.1:5000/register"
        : "http://127.0.0.1:5000/login";

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();
    setMsg(data.msg);
  };

  return (
    <div>
      <h2>{mode === "register" ? "注册" : "登录"}</h2>

      <input
        placeholder="用户名"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="密码"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {mode === "register" ? "注册" : "登录"}
      </button>

      <p onClick={() => setMode(mode === "register" ? "login" : "register")}>
        切换到{mode === "register" ? "登录" : "注册"}
      </p>

      {msg && <p>{msg}</p>}
    </div>
  );
}
