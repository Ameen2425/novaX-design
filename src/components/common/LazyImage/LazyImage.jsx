import React, { useState } from "react";
import BrandLogo from "../BrandLogo/BrandLogo";
import "./LazyImage.css";

const LazyImage = ({ src, alt, className = "", wrapperClassName = "", ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <div className={`lazy-image-wrapper ${isLoaded ? "is-loaded" : "is-loading"} ${wrapperClassName}`}>
      {!isLoaded && !isError && (
        <div className="lazy-image-skeleton">
          <div className="lazy-image-watermark">
            <BrandLogo variant="icon" />
          </div>
          <div className="lazy-image-shimmer"></div>
        </div>
      )}

      {isError ? (
        <div className="lazy-image-fallback">
          <BrandLogo variant="icon" />
          <span className="lazy-image-fallback-text">AMEZA</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsError(true)}
          className={`lazy-image-img ${isLoaded ? "loaded" : "loading"} ${className}`}
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImage;
