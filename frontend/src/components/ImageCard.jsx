import { useState } from "react";
import { likeImage } from "../functions/likes";

const ImageCard = ({ images }) => {
  const [like, setLike] = useState(false);

  const handleLike = async (id) => {
    console.log(id);
    if (like === false) {
      const data = localStorage.getItem("token");
      console.log(data);
      likeImage(`${import.meta.env.VITE_BACKEND_URL}/image/like/${id}`, data);
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
        DAUMENHOCH {like ? images.likes + 1 : images.likes}
      </button>
    </>
  );
};

export default ImageCard;
