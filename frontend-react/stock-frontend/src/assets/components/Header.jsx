import {useContext}from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { AuthContext } from '../../AuthProvider';
import Dashboard  from '../../dashboard/Dashboard';


const Header = () => {
    const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const handleLogout = ()=>{
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      setIsLoggedIn(false)
      navigate('/login')
    }
  return (
    <>
      <nav className="navbar navbar-expand  bg-dark px-3">
     <a className="navbar-brand" href="">Stock-Prediction Portal <i className="fa-solid fa-arrow-trend-down"></i></a>
     
    <div className="ms-auto">
  {isLoggedIn ? (
    <>
      <button className="btn btn-danger me-2" onClick={handleLogout}>
        Logout
      </button>

      <Link className="btn btn-info" to="/dashboard">
        Dashboard
      </Link>
    </>
  ) : (
    <>
      <Link className="btn btn-outline-info me-2 rounded" to="/login">
        Login
      </Link>
      <Link className="btn btn-info rounded" to="/register">
        Register
      </Link>
    </>
  )}

</div>
   </nav>

    </>
  );
};

export default Header




