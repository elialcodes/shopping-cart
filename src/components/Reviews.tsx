import '../styles/Reviews.css';

interface ReviewsProps {
  productData: Product;
}

function Reviews({ productData }: ReviewsProps): JSX.Element {
  return (
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
  );
}

export default Reviews;
