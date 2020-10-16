import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom'

function Dashboard() {
  const location = useLocation();
  const [fullHash] = location.hash.split('&');
  // const accessToken = fullHash.split('=');
  // console.log(accessToken[1]);
  const [,accessToken] = fullHash.split('=');
  console.log(accessToken);

  const userDataApi = 'https://api.spotify.com/v1/me/';
  const userPlaylistsApi = 'https://api.spotify.com/v1/me/playlists';
  const userRecentlyPlayedApi = 'https://api.spotify.com/v1/me/player/recently-played';


    const [userData, setUserData] = useState();
  const [userPlaylists, setUserPlaylists] = useState();
    const [userRecentlyPlayed, setUserRecentlyPlayed] = useState();
  

    useEffect(()=> {
        fetchData(userDataApi, setUserData);
      fetchData(userPlaylistsApi, setUserPlaylists);
        fetchData(userRecentlyPlayedApi, setUserRecentlyPlayed);
      
    },[accessToken]);

    async function fetchData(url, setter) {
        const data = await fetch(
            url,
            {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
            })
        const dataJson = await data.json();
        setter(dataJson)
    }

  console.log(userData);
  console.log(userPlaylists);
  console.log(userRecentlyPlayed);
  

  return <div>Soy un Dashboard</div>
}

export default Dashboard;