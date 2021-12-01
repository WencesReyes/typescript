"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deletePicture = (picture) => console.log(`Deleted picture: [title: ${picture.title}, size:${picture.size}]`);
deletePicture({
    title: "Mine",
    size: "500x500",
});
