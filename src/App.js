//import Menu from './Components/Menu/Menu';
import Rotas from './Rotas.js';
import './App.js';

import {lazy, Suspense} from 'react';
const Menu = lazy(()=> import('./Components/code-splitting/Menu/Menu'));


function App() {
  return (
    <div className="App">
      <header>
        <Suspense fallback={<h1 className="display-4 ml-auto mr-auto mt-5">Carregando menu...</h1>}>
          <Menu />
        </Suspense>
        
        <Rotas />
      </header>
      <main>
       
      </main>
      <footer>
       
      </footer>
    </div>
  );
}

export default App;
