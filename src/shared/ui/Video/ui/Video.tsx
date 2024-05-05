import React from 'react';

interface IVideoProps {
  muted?: boolean;
  autoPlay?: boolean;
  preload?: string;
  loop?: boolean;
  src: string;
}

const Video: React.FC<IVideoProps> = React.memo((props) => {
  const { src, ...restProps } = props;

  return <video {...restProps} src={src} />;
});

export default Video;
