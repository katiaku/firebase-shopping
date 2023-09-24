import React, { useState, createContext, useContext } from 'react';
import { app, messaging } from './firebase';
import Header from './components/Header';
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';
import { Toaster, toast } from 'react-hot-toast';
import { onMessage } from "firebase/messaging"

export const AppContext = createContext(null);

onMessage(messaging, payload => {
  // console.log('New notification', payload);
  toast.custom(t => (
    <div className='bg-sky-300 p-4 rounded-lg shadow-lg'>
      <h1 className="text-lg text-sky-700 font-semibold">{payload.notification.title}</h1>
      <p className='text-sm text-sky-500'>{payload.notification.body}</p>
    </div>
    )
  );
})

function App() {
  const [route, setRoute] = useState("home");
  const [user, setUser] = useState(null);

  return (
    <AppContext.Provider value={{ route, setRoute, user, setUser }}>
      <Toaster />
      <Header />
      <main className='p-6'>
        {route === "home" && <Home />}
        {route === "login" && <Login />}
        {route === "register" && <Register />}
        {user && <p>Logged in: {user.email}</p>}
      </main>
    </AppContext.Provider>
  );
}

export default App;
