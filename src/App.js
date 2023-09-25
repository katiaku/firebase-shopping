import React, { useState, createContext, useContext } from 'react';
import { app, messaging } from './firebase';
import Header from './components/Header';
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';
import Shopping from './routes/Shopping';
import { Toaster, toast } from 'react-hot-toast';
import { onMessage } from "firebase/messaging"
import Footer from './components/Footer';
import TaskList from './components/TaskList';

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
      <div className='h-screen'>
      <Toaster />
        <Header />
        <main className='px-6 pt-24 pb-20'>
          {route === "home" && <Home />}
          {route === "login" && <Login />}
          {route === "register" && <Register />}
          {route === "shopping" && <Shopping />}
          {route === "tasklist" && <TaskList />}
          {user && <p>Logged in: {user.email}</p>}
        </main>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
