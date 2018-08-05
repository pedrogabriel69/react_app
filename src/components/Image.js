import React from 'react';

const Image = (props) => {
  const { src, alt, height, width } = props;

  return (
    <img src={src} alt={alt} height={height} width={width} />
  )
};

export default Image;
