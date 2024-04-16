const ImageCard = ({ images }) => {
  return (
    <>
      
      <img src={images.imageUrl} alt="" />
      <p>{images.text}</p>
    </>
  );
};

export default ImageCard;
