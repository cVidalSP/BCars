import React from 'react';

import MyProvider from './context/context';
import NavBar from './components/navbar/navbar';
import Controller from './controller/contentController';


function App() {
  return (
    <MyProvider>
      <NavBar />
      <Controller />
    </MyProvider>
  );
}

export default App;
