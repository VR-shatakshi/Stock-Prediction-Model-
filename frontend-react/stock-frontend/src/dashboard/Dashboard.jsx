import React ,{useEffect}from 'react'
import axios from 'axios'
import axiosInstance from '../axiosinstance'

const Dashboard = () => {
const accessToken = localStorage.getItem('access_token')
  useEffect (()=>{
    const fetchProtectData = async() =>{
        try{
            const response = await axiosInstance.get('/protected-view/',{
                header:{
                    Authorization: `Bearer ${accessToken}`
                }
            })
            console.log('Success',response.data);
        } catch(error){
          console.error('Error fetching data',error)
        }
    }
    fetchProtectData();

  },[])
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard