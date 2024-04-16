import { useContext, useEffect, useState } from "react";
import { mainContext } from "../context/mainProvider";
import ImageCard from "../components/ImageCard";
import { getImages } from "../functions/fetches";

const Images = () => {
  const { image, setImage } = useContext(mainContext);


  //! warum der parameter?
  useEffect(() => {
    getImages(setImage);
  }, []);

  return (
    <>
      {image?.map((img) => {
        return (
          <div key={img._id}>
            <ImageCard images={img} />
          </div>
        );
      })}
    </>
  );
};

export default Images;
