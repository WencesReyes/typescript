"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
})(PhotoOrientation || (PhotoOrientation = {}));
;
const showOrientation = (photo) => {
    console.log(photo.orientation);
};
const expensivePhoto = {
    id: 1,
    name: 'exp',
    date: '03/2021',
    size: "100x100",
    orientation: PhotoOrientation.Landscape,
};
const cheapPhoto = {
    id: 2,
    name: 'cheapPht',
    size: "500x500",
    orientation: PhotoOrientation.Portrait,
};
const newCheapPhoto = {};
newCheapPhoto.id = 3;
console.log(cheapPhoto.name);
console.log(expensivePhoto.name);
console.log(newCheapPhoto);
showOrientation(cheapPhoto);
showOrientation(expensivePhoto);
