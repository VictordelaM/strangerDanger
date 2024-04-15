import { uploadImg } from "../functions/fetches";

const UploadImgForm = () => {
  return (
    <>
      <form onSubmit={uploadImg}>
        <label htmlFor="text">Bildbeschreibung</label>
        <input type="text" name="text" />
        <label for="file">Upload Image</label>
        <input name="image" type="file"></input>
        <button>Upload!</button>
      </form>
    </>
  );
};

export default UploadImgForm;
