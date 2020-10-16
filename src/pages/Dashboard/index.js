import React from 'react';
import {useLocation} from 'react-router-dom'

function Dashboard() {
  const location = useLocation();
  console.log(location.hash);
  const [fullHash] = location.hash.split('&');
  // const accessToken = fullHash.slice(1, fullHash.length);
  const accessToken = fullHash.split('=');

  console.log(accessToken[1]);



  return <div>Soy un Dashboard</div>
}

export default Dashboard;