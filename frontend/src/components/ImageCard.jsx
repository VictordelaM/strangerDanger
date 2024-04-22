import { useState } from "react";
import { likeImage } from "../functions/likes";
import { decryptToken } from "../functions/decrypt.js";

const ImageCard = ({ images }) => {
  const [like, setLike] = useState(false);

  const handleLike = async (id) => {
    if (like === false) {
      const data = localStorage.getItem("token");
      const newToken = decryptToken(data);
      newToken.payload.newLikedStatus = true;
      console.log(newToken);
      likeImage(
        `${import.meta.env.VITE_BACKEND_URL}/image/${id}/setFavorite`,
        newToken
      );
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
          handleLike(images._id);
        }}
      >
        DAUMENHOCH {like ? images.likes.length : images.likes.length - 1}
      </button>
    </>
  );
};

export default ImageCard;