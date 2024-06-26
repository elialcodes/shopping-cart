import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { FiltersProvider } from './context/filtersContext.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  //por defecto envolveríamos App en <React.StrictMode>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  //Pero la envolvermos con un estado global creado con useContex y que nos
  //hemos importado arriba, asi toda nuestra App tiene acceso a ese estado global
  //y no hay que pasarlo por props. Podría ser otra cosa distinta de una estado
  //global, cualquier cosa o dato.
  <FiltersProvider>
    <App />
  </FiltersProvider>
);
