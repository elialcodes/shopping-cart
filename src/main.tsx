import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { FiltersProvider } from './context/filtersContext.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  //por defecto envolveríamos App en <React.StrictMode>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  //Pero la envolvermos con un useContext (nos lo hemos importado arriba)
  //para proveerla del estado global, asi toda la App tiene acceso a él
  //y no hay que pasarlo por props. Podría ser otra cosa distinta de una estado
  //global, cualquier cosa o dato.
  <FiltersProvider>
    <App />
  </FiltersProvider>
);
