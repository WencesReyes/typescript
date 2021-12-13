export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
};

abstract class Item {
  readonly #id: number;
  protected _title: string;
  constructor(id: number, title: string)
  {
    this.#id = id;
    this._title = title;
  }

  get id(){
    return this.#id;
  }

  set title(title: string)
  {
    this._title = title;
  }

  get title()
  {
    return this._title;
  }

}

class Photo extends Item {
  private _orientation: PhotoOrientation;

  constructor(id: number, title: string, orientation: PhotoOrientation)
  {
    super(id, title);
    this._orientation = orientation;
  }

  get orientation(){
    return this._orientation;
  }
  set orientation(orientation: PhotoOrientation){
    this._orientation = orientation;
  }
}

class Album extends Item {
  photos: Photo[];

  constructor(id: number, title: string)
  {
    super(id, title);
    this.photos = [];
  }

  addPhoto(photo: Photo)
  {
    this.photos.push(photo);
  }

  public static copyAlbum(album: Album): Album
  {
    const result = new Album(album.id, album.title);
    result.photos = [...album.photos];
    return result;
  }
}

// const item = new Item(); error, is not allowed to create object from abstract class

const photo = new Photo(1, 'my-photo', PhotoOrientation.Landscape);
const album = new Album(1, 'my-album');

album.addPhoto(photo);

console.log(album);

console.log(Album.copyAlbum(album))