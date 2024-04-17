import { useState } from "react";
import { likeImage } from "../functions/likes";

const ImageCard = ({ images }) => {
  const [like, setLike] = useState(false);

  const handleLike = async (id) => {
    if (like === false) {
      const data = {};
      likeImage(`${import.meta.env.VITE_BACKEND_URL}/image/${id}`, data);
    } else {
    }
  };

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
