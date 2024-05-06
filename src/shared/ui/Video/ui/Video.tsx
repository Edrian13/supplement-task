import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '../../Loader';
import styles from './Video.module.scss';
import { classNames } from '../../../lib/classNames/classNames';

interface IVideoProps {
  muted?: boolean;
  autoPlay?: boolean;
  preload?: string;
  loop?: boolean;
  src: string;
}

const Video: React.FC<IVideoProps> = React.memo((props) => {
  const { src, ...restProps } = props;

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  //При тестировании, обнаружил, что видео лагает, поэтому решил сделать так, чтобы оно показывалось исключительно, после полной загрузки
  useEffect(() => {
    const checkVideoLoadStatus = setInterval(() => {
      if (videoRef.current?.readyState === 4) {
        setIsVideoLoaded(true);
        clearInterval(checkVideoLoadStatus);
      }
    }, 1000);

    return () => {
      clearInterval(checkVideoLoadStatus);
    };
  }, []);

  return (
    <>
      {!isVideoLoaded && <Loader />}
      <video
        className={classNames('', { [styles.hideVideo]: !isVideoLoaded })}
        ref={videoRef}
        {...restProps}
        src={src}
      />
    </>
  );
});

export default Video;
