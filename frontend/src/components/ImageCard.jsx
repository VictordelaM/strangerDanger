const ImageCard = ({ images }) => {
  return (
    <>
      {/* {images.map((img) => {
        return (
          <>
            <img src={img.imageUrl} alt="" />
          </>
        );
      })} */}
      <img src={images.imageUrl} alt="" />
    </>
  );
};

export default ImageCard;
