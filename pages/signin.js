import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";


function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { data, status } = useSession();
  console.log({ data, status });
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") router.replace("./dashboard");
  }, [status]);

  const loginHandler = async () => {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (!res.error) router.replace("./dashboard");
  };
  return (
    <div>
      <h3>Login Form</h3>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={loginHandler}>Login</button>
    </div>
  );
}

export default SignIn;
