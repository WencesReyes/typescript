import { Album } from "./album";

export class User {
  private album: Album[];

  constructor(private id: number,
              private username: string,
              private firstName: string,
              private isPro: boolean){
      this.album = [];
  }

  addAlbum(album: Album): void {
      this.album.push(album);
  }

  removeAlbum(id: number): void {
    this.album = this.album.filter(album => album.id !== id);
  }
}