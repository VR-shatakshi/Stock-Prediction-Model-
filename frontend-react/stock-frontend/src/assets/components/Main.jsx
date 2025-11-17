import React from 'react'
import {Link} from 'react-router-dom'
// import Login from './assets/components/Login.jsx';
const Main = () => {
  return (
   <>
     <div className="container mt-5">
      <div className="p-5 text-center bg-light-dark rounded shadow">
        <h1 className='text-light mb-3'>Stock-Prediction App<i class="fa-solid fa-handshake"></i></h1>
        <p className='text-light lead'>Our Stock-Prediction Portal offers a complete set of intelligent tools designed to help users make smarter investment decisions. We provide real-time and historical stock data, interactive charts, and AI-powered price predictions based on advanced machine-learning models. Users can access trend analysis, buy/sell signals, and personalized watchlists to track their favorite stocks effortlessly. With a clean interface, secure login system, and data-driven insights, our portal ensures that both beginners and experienced traders can confidently navigate the stock market and plan their investment strategies with greater accuracy.</p>
        <Link className="btn btn-warning px-4" to ="/dashboard">Explore now </Link>
      </div>
     </div>
   </>
  )
}

export default Main
