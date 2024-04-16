import { useState } from "react";

const ImageCard = ({ images }) => {
  const [like, setLike] = useState();
  return (
    <>
      {/* {images.map((img) => {
        console.log(img);
        return (
          <>
            <img src={img.imageUrl} alt="" />
          </>
        );
      })} */}
      <img src={images.imageUrl} alt="" />
      <p>{images.text}</p>
      <button
        onClick={() => {
          console.log("cock");
          like ? images.likes + "1" : images.likes - "1";
          setLike(!true);
        }}
      >
        DAUMENHOCH {like ? images.likes + "1" : images.likes - "1"}
      </button>
    </>
  );
};

export default ImageCard;
