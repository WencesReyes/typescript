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
var _Item_id;
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
})(PhotoOrientation || (PhotoOrientation = {}));
;
class Item {
    constructor(id, title) {
        _Item_id.set(this, void 0);
        __classPrivateFieldSet(this, _Item_id, id, "f");
        this._title = title;
    }
    get id() {
        return __classPrivateFieldGet(this, _Item_id, "f");
    }
    set title(title) {
        this._title = title;
    }
    get title() {
        return this._title;
    }
}
_Item_id = new WeakMap();
class Photo extends Item {
    constructor(id, title, orientation) {
        super(id, title);
        this._orientation = orientation;
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(orientation) {
        this._orientation = orientation;
    }
}
class Album extends Item {
    constructor(id, title) {
        super(id, title);
        this.photos = [];
    }
    addPhoto(photo) {
        this.photos.push(photo);
    }
    static copyAlbum(album) {
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
console.log(Album.copyAlbum(album));
