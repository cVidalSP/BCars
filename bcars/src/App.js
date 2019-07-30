import React from 'react';
import MyProvider from './context/context';

import Exibir from './components/teste';

function App() {

  const MyContext = React.createContext();

  return (
    <MyProvider MyContext = { MyContext }>
        <Exibir MyContext = { MyContext }/>
    </MyProvider>
  );
}

export default App;
