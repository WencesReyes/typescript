"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation["PORTRAIT"] = "portrait";
    PhotoOrientation["HORIZONTAL"] = "horizontal";
})(PhotoOrientation || (PhotoOrientation = {}));
;
;
const generatePhoto = (config) => {
    const photo = Object.assign(Object.assign({}, config), { orientation: PhotoOrientation.HORIZONTAL });
    // Error
    // photo.date = 'sad';
    if (config.orientation)
        photo.orientation = config.orientation;
    return photo;
};
console.log(generatePhoto({
    date: '2002',
    size: '10x10'
}));
console.log(generatePhoto({
    date: '2002',
    size: '10x10',
    orientation: PhotoOrientation.PORTRAIT,
}));
