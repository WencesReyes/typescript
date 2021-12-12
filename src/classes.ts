export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
};

class Photo {
  private _id: number;
  title: string;
  private _orientation: PhotoOrientation;

  constructor(id: number, title: string, orientation: PhotoOrientation)
  {
    this._id = id;
    this.title = title;
    this._orientation = orientation;
  }

  get id(){
    return this._id;
  }
  get orientation(){
    return this._orientation;
  }
  set orientation(orientation: PhotoOrientation){
    this._orientation = orientation;
  }
}

class Album {
  #id: number;
  title: string;
  photos: Photo[];

  constructor(id: number, title: string)
  {
    this.#id = id;
    this.title = title;
    this.photos = [];
  }

  get id(){
    return this.#id;
  }

  addPhoto(photo: Photo)
  {
    this.photos.push(photo);
  }
}

// #property available only ts >= 3.8, no visible with console.log

const newPhoto: Photo = new Photo(1, 'my-photo', PhotoOrientation.Square);
const album: Album = new Album(1, 'my-album');

// newPhoto.id error id is private
// newPhoto.title = 'my-another-photo' correct
// album.id error id is private with # syntax

// using geters and setters

console.log('newPhoto.id', newPhoto.id);
console.log('newPhoto.orientation', newPhoto.orientation);
console.log('album.id', album.id);

newPhoto.orientation = PhotoOrientation.Portrait;


album.addPhoto(newPhoto);

console.log(album);
console.table(album);