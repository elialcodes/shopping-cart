import Filters from './Filters';
import { Link } from 'react-router-dom';

function Header(): JSX.Element {
  return (
    <header>
      <Link to="/">
        <h1>Let´s go shopping !</h1>
      </Link>
      <Filters />
    </header>
  );
}

export default Header;
