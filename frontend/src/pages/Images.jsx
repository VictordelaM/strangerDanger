import { useContext, useEffect, useState } from "react";
import { mainContext } from "../context/mainProvider";
import ImageCard from "../components/ImageCard";
import { getImages } from "../functions/fetches";
import Nav from "../components/nav/Nav";


const Images = () => {
  const { image, setImage } = useContext(mainContext);

  useEffect(() => {
    getImages(setImage);
  }, []);

  return (
    <>
    <Nav/>
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
