import '../styles/Reviews.css';
import { useState } from 'react';

interface ReviewsProps {
  productData: Product;
}

function Reviews({ productData }: ReviewsProps): JSX.Element {
  const [comments, setComments] = useState<boolean>(false);

  const handleClickComments = () => {
    if (comments) {
      setComments(false);
    } else {
      setComments(true);
    }
  };

  return (
    <>
      <button onClick={handleClickComments} className="reviews-button">
        Reviews
      </button>
      {comments && (
        <ul className="reviews-comment">
          {productData.reviews.map((review, index) => {
            return (
              <li key={productData.id}>
                <p>
                  Customer {index + 1}: {review.comment}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Reviews;
