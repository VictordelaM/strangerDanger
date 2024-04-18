import { useContext, useEffect, useState } from "react";
import { mainContext } from "../context/mainProvider";
import ImageCard from "../components/ImageCard";
import { getImages } from "../functions/fetches";
import Nav from "../components/nav/Nav";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"


const Images = () => {
  const { image, setImage } = useContext(mainContext);


  useEffect(() => {
    getImages(setImage);
  }, []);

  if(localStorage.getItem('token')){return (
    <>
    <Nav/>

    <Carousel>
  <CarouselContent>
  {image?.map((img) => {
        return (
    <CarouselItem key={img._id} className="basis-1/3">
      <div >
            <ImageCard images={img} />
      </div>
    </CarouselItem>
    )})}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
</>)}
      {/* {image?.map((img) => {
        return (
          <div key={img._id}>
            <ImageCard images={img} />
          </div>
        );
      })}
    
  );} */}
  // else{
  //   return(
  //     <>
  //     <Nav/>
  //     <p>login to see images</p>
  //     </>
  //   )
  // }
};

export default Images;
