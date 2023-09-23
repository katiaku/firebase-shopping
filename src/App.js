import React, { useState, createContext, useContext } from 'react';
import { app } from './firebase';
import Header from './components/Header';
import Home from './routes/Home';
import Login from './routes/Login';

export const AppContext = createContext(null);

function App() {
  const [route, setRoute] = useState("home");
  return (
    <AppContext.Provider value={{ route, setRoute }}>
      <Header />
      <main className='p-6'>
        {route === "home" && <Home />}
        {route === "login" && <Login />}
      </main>
    </AppContext.Provider>
  );
}

export default App;
