import { useState } from "react";

const ImageCard = ({ images }) => {
  const [like, setLike] = useState(false);
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
          setLike(!like);
        }}
      >
        DAUMENHOCH {like ? images.likes + 1 : images.likes}
      </button>
    </>
  );
};

export default ImageCard;
