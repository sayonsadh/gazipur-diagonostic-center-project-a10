import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";

const Login = () => {
  const {
    signInUsingGoogle,
    handleEmailChange,
    handlePasswordChange,
    error,
    processLogIn,
    setError,
    setIsLoading,
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_uri);
      })
      .finally(() => setIsLoading(false));
  };
  const handleEmailSignIn = (e) => {
    e.preventDefault();
    processLogIn()
      .then((result) => {
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="mb-5 mt-5">
      <h2>Please login</h2>
      <form onSubmit={handleEmailSignIn}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label fs-5">
            Email address
          </label>
          <input
            onBlur={handleEmailChange}
            type="email"
            className="form-control w-50 mx-auto"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="write your email"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label fs-5">
            Password
          </label>
          <input
            onBlur={handlePasswordChange}
            type="password"
            className="form-control w-50 mx-auto"
            id="exampleInputPassword1"
            placeholder="enter your password"
          />
        </div>
        <div className="row mb-3 text-danger d-flex justify-content-center">
          {error}
        </div>
        <button
          onClick={handleEmailSignIn}
          type="submit"
          className="btn btn-primary mb-2"
        >
          Submit
        </button>
      </form>
      <p>or</p>
      <button onClick={handleGoogleSignIn} className="btn  btn-primary ">
        Continue with Google
      </button>
      <br />
      <Link to="/signin">Register Now</Link>
    </div>
  );
};

export default Login;
