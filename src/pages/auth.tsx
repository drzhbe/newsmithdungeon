import { useState } from "react";
import { baseUrl } from "../config";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h1>Login</h1>
      <form action={`${baseUrl}/auth/signin`} method="POST">
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

type SignupData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const onSubmit = () => {
    fetch(`${baseUrl}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
      body: JSON.stringify({
        name,
        email,
        password,
        confirmPassword,
      }),
    });
  };
  return (
    <div>
      <h1>Register</h1>
      <input
        type="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Name"
      />
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="Email"
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="Password"
      />
      <input
        type="password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={confirmPassword}
        placeholder="Confirm password"
      />
      <button
        onClick={onSubmit}
        className="p-2 bg-green-500 text-white rounded-md hover:bg-green-400 hover:shadow-md cursor-pointer"
      >
        Register
      </button>
    </div>
  );
};
