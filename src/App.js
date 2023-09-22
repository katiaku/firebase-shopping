import React from 'react';
import { app } from './firebase';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main className='p-6'>
        Welcome to FireShopping
      </main>
    </>
  );
}

export default App;
