import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const SignIn = () => {
  const {
    signInUsingGoogle,
    handleEmailChange,
    handlePasswordChange,
    createNewUser,
    error,
    setError,
    setIsLoading,
    handleNameChange,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleGoogleSignIn = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };
  const handleRegistration = (e) => {
    e.preventDefault();
    createNewUser()
      .then((result) => {
        history.push(redirect_uri);
      })
      .catch((err) => setError(err.message))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="mb-5 mt-5">
      <h4>Please Sign up</h4>
      <form onSubmit={handleRegistration}>
        <div className="row mb-3">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              onBlur={handleNameChange}
              placeholder="write your name"
              type="Name"
              className="form-control"
              id="inputName"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              onBlur={handleEmailChange}
              placeholder="write your email"
              type="email"
              className="form-control"
              id="inputEmail3"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              onBlur={handlePasswordChange}
              placeholder="enter your password"
              type="password"
              className="form-control"
              id="inputPassword3"
              required
            />
          </div>
        </div>
        <div className="row mb-3 text-danger d-flex justify-content-center">
          {error}
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
      <h6>or</h6>
      <button onClick={handleGoogleSignIn} className="btn  btn-primary">
        Sign up with Google
      </button>
      <br />
      <Link to="/login">Already Registered</Link>
    </div>
  );
};

export default SignIn;
