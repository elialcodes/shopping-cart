/* eslint-disable react/react-in-jsx-scope */
import { Rating } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import '../styles/Rate.css';

interface RateProps {
  productData: Product;
}

function Rate({ productData }: RateProps): JSX.Element {
  return (
    <>
      <span className="span-rating">Rating: {productData.rating}</span>
      {/* componente importado de una librería y personalizado con corazones */}
      <Rating
        name="customized-color"
        value={productData.rating}
        max={5}
        getLabelText={(value: number) =>
          `${value} Heart${value !== 1 ? 's' : ''}`
        }
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        sx={{
          '& .MuiRating-iconFilled': {
            color: 'red',
          },
          '& .MuiRating-iconEmpty': {
            color: 'grey',
          },
        }}
        readOnly
      />
    </>
  );
}

export default Rate;
