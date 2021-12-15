import { User } from './user';
import { Album } from './album';
import { PhotoOrientation } from './photo-orientation';
import { Picture } from './picture';

const newUser = new User(1, 'wences', 'reyes', true);
const newAlbum = new Album(1, 'my-album');
const newPicture = new Picture(1, 'my-picture', '03-2021', PhotoOrientation.Landscape);
newAlbum.addPicture(newPicture);
newUser.addAlbum(newAlbum);


console.log(newUser);
console.log(newAlbum);
console.log(newPicture);

newUser.removeAlbum(1);


console.log(newUser);
console.log(newAlbum);
console.log(newPicture);
