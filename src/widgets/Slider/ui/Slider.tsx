import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import { IGameScreenshots } from '../../../entities/Games/model/types/GameTypes';

interface ISliderProps {
  width: number;
  showBullets: boolean;
  showNavs: boolean;
  height: number;
  images: IGameScreenshots[];
}

export const Slider: React.FC<ISliderProps> = React.memo((props) => {
  const { width, showBullets, height, showNavs, images } = props;

  return (
    <SimpleImageSlider
      width={width}
      showBullets={showBullets}
      showNavs={showNavs}
      height={height}
      images={images}
    />
  );
});
