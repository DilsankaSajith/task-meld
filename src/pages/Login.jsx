import { useState } from "react";
import { login } from "../services/apiAuth";
import { useLogin } from "../features/authentication/useLogin";
import SpinnerMini from "../ui/SpinnerMini";

function Login() {
  const [email, setEmail] = useState("dilsanka@example.com");
  const [password, setPassword] = useState("Dilsanka@39");
  const { login, isLoading } = useLogin();

  const handleSubmit = function (e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  };

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            disabled={isLoading}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            disabled={isLoading}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button disabled={isLoading}>
          {!isLoading ? "Log in" : <SpinnerMini />}
        </button>
      </form>
    </div>
  );
}

export default Login;
