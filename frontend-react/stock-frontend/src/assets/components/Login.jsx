import React,{useContext, useState} from 'react'
import axios from "axios";
import { AuthContext } from '../../AuthProvider';
import { data, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading,setLoading] = useState(false)
  const [error, setError]  = useState('')
  const navigate = useNavigate()
  const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext)

  const handleLogin = async(e) =>{
    e.preventDefault();
    setLoading(true);
  const userData = {username , password}
  console.log('userData==>',userData)
  try{
    const response = await axios.post('http://127.0.0.1:8000/api/v1/api/token/',userData)
    localStorage.setItem('accessToken',response.data.access)
     localStorage.setItem('refreshToken',response.data.refresh)
     console.log('Login successful');
     setIsLoggedIn(true)
     navigate('/dasboard')
  }catch(error){
     console.error('invalid credentials')
     setError('Invalid Credentials')
  }finally{
    setLoading(false)
  }
  }

  return (
    <>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h3 className="text-light text-center rounded mt-5">
            Login to Our Portal
          </h3>

          <form onSubmit={handleLogin}>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter your Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />


            <input
              type="password"
              className="form-control mb-3"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" className="btn btn-info d-block mx-auto mb-3">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login