import Filters from './Filters';

interface HeaderProps {
  onChangeFilters: (minPrice: number, category: string) => void;
}

function Header({ onChangeFilters }: HeaderProps): JSX.Element {
  return (
    <header>
      <h1>My Ecommerce</h1>
      <Filters onChangeFilters={onChangeFilters} />
    </header>
  );
}

export default Header;
