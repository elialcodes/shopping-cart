import '../styles/Reviews.css';
import { useState } from 'react';

interface ReviewsProps {
  productData: Product;
}

function Reviews({ productData }: ReviewsProps): JSX.Element {
  const [showComments, setShowComments] = useState<boolean>(false);

  const handleClickShowComments = () => {
    if (showComments) {
      setShowComments(false);
    } else {
      setShowComments(true);
    }
  };

  return (
    <>
      <button
        onClick={handleClickShowComments}
        className={`reviews-button ${showComments === false ? '' : 'hidden'}`}
      >
        See reviews
      </button>
      <button
        onClick={handleClickShowComments}
        className={`reviews-button ${showComments ? '' : 'hidden'}`}
      >
        Hide reviews
      </button>
      {showComments && (
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
