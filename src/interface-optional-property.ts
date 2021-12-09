export {};

enum PhotoOrientation {
  PORTRAIT = 'portrait',
  HORIZONTAL = 'horizontal'
};

interface IPhotoConfig {
  orientation?: PhotoOrientation,
  readonly date: string,
  size: string,
};

const generatePhoto = (config : IPhotoConfig): IPhotoConfig => {
  const photo: IPhotoConfig = {
    ...config,
    orientation: PhotoOrientation.HORIZONTAL,
  };

  // Error
  // photo.date = 'sad';
  
  if(config.orientation) photo.orientation = config.orientation;
  return photo;
}

console.log(generatePhoto({
  date: '2002',
  size: '10x10'
}));

console.log(generatePhoto({
  date: '2002',
  size: '10x10',
  orientation: PhotoOrientation.PORTRAIT,
}));