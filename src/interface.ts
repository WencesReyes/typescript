export {};

type PictureSize = "100x100" | "500x500";

interface IPicture {
  title: string;
  size: PictureSize;
}

const deletePicture = (picture: IPicture): void =>
  console.log(
    `Deleted picture: [title: ${picture.title}, size:${picture.size}]`
  );

deletePicture({
  title: "Mine",
  size: "500x500",
});
