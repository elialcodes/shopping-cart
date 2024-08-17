/* eslint-disable react/react-in-jsx-scope */
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { HashRouter } from 'react-router-dom';
import { FiltersProvider } from './context/filtersContext.tsx';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import './index.css';

//creamos una instancia del QueryCliente
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  //por defecto envolveríamos App en <React.StrictMode>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  // envolvemos con el HashRouter toda la aplicación para que pueda trabajar con rutas
  <HashRouter>
    {/* envolvemos la aplicación con el QueryClient (importado arriba) para que su 
    children tenga acceso a los datos devueltos de la api, funciona como useContext */}
    <QueryClientProvider client={queryClient}>
      {/* envolvemos App con un useContext (importado arriba) para proveerla del estado 
      global filters, asi toda la App tiene acceso a él y no hay que pasarlo por props.
      Podría darse el caso que sólo unos componentes determinados necesiten acceso a ese
      context (y no toda la App) y también podría ser otra cosa distinta de un estado global, un
      dato, una función... */}
      <FiltersProvider>
        <App />
      </FiltersProvider>
    </QueryClientProvider>
  </HashRouter>
);
