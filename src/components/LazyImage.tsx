/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import '../styles/LazyImage.css';

interface LazyImageProps {
  src: string;
  alt: string;
  placeholder: string;
}

function LazyImage({ src, alt, placeholder }: LazyImageProps): JSX.Element {
  const [loaded, setLoaded] = useState<boolean>(false);
  return (
    <div className="image-container">
      <img
        src={placeholder}
        alt=""
        className={`placeholder ${loaded ? 'hidden' : ''}`}
      />
      <img
        src={src}
        alt={alt}
        className={`image ${loaded ? 'visible' : ''}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

export default LazyImage;
