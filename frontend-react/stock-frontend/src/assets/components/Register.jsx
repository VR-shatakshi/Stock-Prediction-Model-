import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = async (e) => {
    e.preventDefault();

    const userData = {
      username,
      email,
      password,
    };

    console.log("userData ==>", userData);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/register/",
        userData
      );
      console.log("response.data ==>", response.data);
      console.log("Registration successful");
    } catch (error) {
      console.log(
        "Registration error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h3 className="text-light text-center rounded mt-5">
            Create an Account
          </h3>

          <form onSubmit={handleRegistration}>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter your Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="email"
              class="form-control mb-3"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" className="btn btn-info d-block mx-auto mb-3">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
