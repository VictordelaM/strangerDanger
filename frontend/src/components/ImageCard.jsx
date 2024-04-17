import { useState } from "react";

const ImageCard = ({ images }) => {
  const [like, setLike] = useState(false);
  return (
    <>
      
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
