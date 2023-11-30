
import React from 'react'
import UserResult from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'
function Home() {
  return (
    <div>
      <div className='mb-20'>
        <img src={require("../assets/github_banner.png")} />
      </div>
      <UserSearch />
      <UserResult />
    </div>
  );
}

export default Home
