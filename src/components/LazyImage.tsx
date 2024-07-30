import { useState } from 'react';
import '../styles/LazyImage.css';

interface LazyImageProps {
  src: string;
  alt: string;
  placeholder: string;
  className?: string;
}

function LazyImage({
  src,
  alt,
  placeholder,
  className,
}: LazyImageProps): JSX.Element {
  const [loaded, setLoaded] = useState<boolean>(false);
  return (
    <div className={`image-container ${className}`}>
      <img
        src={placeholder}
        alt="loading..."
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
