import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => dispatch(push("/"))}>sign in</button>
    </div>
  );
};

export default Login;
