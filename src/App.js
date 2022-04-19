import React, { useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  // Whenever a state is change this function always will be get executed
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [msg, setMsg] = useState('Hello Baby!');

  // This peace of code causes infinite loop
  setTimeout(() => {
    setMsg(Math.random().toString());
  }, 1000);

  console.log(msg);

  // To get ride of this problem we use useEffect

  const loginHandler = (email, password) => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
