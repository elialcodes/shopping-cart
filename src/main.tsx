import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { FiltersProvider } from './context/filtersContext.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  //por defecto envolveríamos App en <React.StrictMode>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  //pero la envolvermos con un useContext (nos lo hemos importado arriba)
  //para proveerla del estado global, asi toda la App tiene acceso a él
  //y no hay que pasarlo por props.
  //Podría darse el caso que sólo unos componentes determinados necesiten
  //acceso a ese context (y no toda la App) y también podría ser otra cosa
  //distinta de una estado global, un dato, una función...
  <FiltersProvider>
    <App />
  </FiltersProvider>
);
