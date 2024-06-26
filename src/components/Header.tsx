import Filters from './Filters';

// interface HeaderProps {
//   onChangeFilters: (minPrice: number, category: string) => void;
// }

function Header(): JSX.Element {
  return (
    <header>
      <h1>My Ecommerce</h1>
      <Filters />
    </header>
  );
}

export default Header;
