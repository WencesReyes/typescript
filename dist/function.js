"use strict";
const createPicture = (name, size, date) => console.log("Picture", name, size, date);
const customHandleError = (code, message) => {
    if (message.indexOf("error") !== -1) {
        throw new Error(`Message: ${message}, Code: ${code}`);
    }
    return "An error has occurred";
};
const createPictureV2 = (name, size, date) => ({
    name,
    size,
    date,
});
try {
    createPicture("picture1", "500x500", "10-2021");
    createPicture("picture2", "100x100");
    const picture = createPictureV2("picture4", "100x100");
    console.log(picture);
    console.log(customHandleError("200", "OK"));
    console.log(customHandleError("404", "error not found"));
}
catch (error) {
    console.error(error);
}
