import { useEffect, useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useSignin, useSignup } from "../data/auth";

export const Auth = () => {
  const { auth, signin, loading, error } = useSignin();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, [auth]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return signin({ email, password });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
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
          type="submit"
          disabled={loading}
          value={loading ? "Sending..." : "Login"}
          className="p-2 bg-green-500 text-white rounded-md hover:bg-green-400 hover:shadow-md cursor-pointer disabled:bg-slate-300"
        ></input>
      </form>
      {error && (
        <div className="mt-2 p-2 bg-red-100 text-red-500 rounded-md">
          {error}
        </div>
      )}
    </div>
  );
};

export const Register = () => {
  const { auth, signup, loading } = useSignup();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, [auth]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return signup({ email, password });
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
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
        <input
          type="submit"
          disabled={loading}
          value={loading ? "Sending..." : "Register"}
          className="p-2 bg-green-500 text-white rounded-md hover:bg-green-400 hover:shadow-md cursor-pointer disabled:bg-slate-300"
        ></input>
      </form>
    </div>
  );
};
