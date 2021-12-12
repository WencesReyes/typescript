"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Album_id;
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
})(PhotoOrientation || (PhotoOrientation = {}));
;
class Photo {
    constructor(id, title, orientation) {
        this._id = id;
        this.title = title;
        this._orientation = orientation;
    }
    get id() {
        return this._id;
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(orientation) {
        this._orientation = orientation;
    }
}
class Album {
    constructor(id, title) {
        _Album_id.set(this, void 0);
        __classPrivateFieldSet(this, _Album_id, id, "f");
        this.title = title;
        this.photos = [];
    }
    get id() {
        return __classPrivateFieldGet(this, _Album_id, "f");
    }
    addPhoto(photo) {
        this.photos.push(photo);
    }
}
_Album_id = new WeakMap();
// #property available only ts >= 3.8, no visible with console.log
const newPhoto = new Photo(1, 'my-photo', PhotoOrientation.Square);
const album = new Album(1, 'my-album');
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
