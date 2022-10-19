import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton: React.FC = () => {
  return (
    <div className="sushi-block-wrapper">
      <ContentLoader
      className="sushi-block"
      speed={2}
      width={280}
      height={425}
      viewBox="0 0 280 425"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect
        x="0"
        y="30"
        rx="30"
        ry="30"
        width="280"
        height="160"
      />
      <rect
        x="25"
        y="208"
        rx="0"
        ry="0"
        width="230"
        height="19"
      />
      <rect
        x="0"
        y="246"
        rx="10"
        ry="10"
        width="275"
        height="52"
      />
  
      <rect
        x="10"
        y="340"
        rx="0"
        ry="0"
        width="100"
        height="30"
      />
      <rect
        x="160"
        y="333"
        rx="20"
        ry="20"
        width="115"
        height="45"
      />
    </ContentLoader>
    </div>
    
  );
}