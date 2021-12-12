export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
};

type PhotoSize = '100x100' | '500x500';

interface PhotoEntity {
  id: number,
  size: PhotoSize,
  name: string,
  orientation: PhotoOrientation,
}

interface ExpensivePhoto extends PhotoEntity {
  date: string,
}

interface CheapPhoto extends PhotoEntity {
  
}

const showOrientation = (photo: PhotoEntity): void => {
  console.log(photo.orientation);
}

const expensivePhoto: ExpensivePhoto = {
  id: 1,
  name: 'exp',
  date: '03/2021',
  size: "100x100",
  orientation: PhotoOrientation.Landscape,
};

const cheapPhoto: CheapPhoto = {
  id: 2,
  name: 'cheapPht',
  size: "500x500",
  orientation: PhotoOrientation.Portrait,
};

const newCheapPhoto = {} as CheapPhoto;
newCheapPhoto.id = 3;

console.log(cheapPhoto.name);
console.log(expensivePhoto.name);
console.log(newCheapPhoto);

showOrientation(cheapPhoto);
showOrientation(expensivePhoto);